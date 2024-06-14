# Multi-stage build
# 1단계: 환경 설정 및 dependency 설치
FROM node:20-alpine AS base
RUN apk add --no-cache libc6-compat

# pnpm 설치
RUN npm install -g pnpm@8.15.8

# 명령어를 실행할 디렉터리 지정
WORKDIR /usr/src/app

# Dependency install을 위해 package.json, pnpm-lock.yaml 복사 
COPY package.json pnpm-lock.yaml ./ 

# Dependency 설치 (새로운 lock 파일 수정 또는 생성 방지)
RUN pnpm install --prefer-frozen-lockfile 

###########################################################
# 2단계: next.js 빌드 단계
FROM node:20-alpine AS builder

# pnpm 설치
RUN npm install -g pnpm@8.15.8

# 명령어를 실행할 디렉터리 지정
WORKDIR /usr/src/app

# node_modules 등의 dependency를 복사
COPY --from=base /usr/src/app/node_modules ./node_modules
COPY . .

# next.js 애플리케이션 빌드
RUN pnpm build

###########################################################
# 3단계: next.js 실행 단계
FROM node:20-alpine AS runner

# 명령어를 실행할 디렉터리 지정
WORKDIR /usr/src/app
 
# container 환경에 시스템 사용자를 추가함
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# 빌드된 결과물과 필요한 파일들 복사
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder --chown=nextjs:nodejs /usr/src/app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /usr/src/app/.next/static ./.next/static

# 컨테이너의 수신 대기 포트를 3000으로 설정
EXPOSE 3000

# node로 애플리케이션 실행
CMD ["node", "server.js"]
