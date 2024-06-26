# Archon v2
[사이트 바로가기](https://archon.placidgull.com)

2024년 3월 ~ 6월 (3.5개월)

Next.js 연습을 위해 진행한 개인 프로젝트입니다. 순수 JavaScript로만 작성했던 Archon V1 프로젝트를 리뉴얼했습니다.

## 주요 기능
- 기존 **디자인, 콘텐츠 위계에 따른 배치, 카테고리별 기사, 북마크, 기사 추천** 등을 모두 새로 구현했고, 더불어 몇 가지 기능을 개선했습니다.
- **네비게이션 개선**: 메인 메뉴, 토픽 메뉴 등의 동작을 개선했습니다.
- **상단 메시지**: 북마크를 더하거나 뺄 때, 링크 복사 버튼을 누를 때 등 사용자 이벤트에 따라 상단 메시지를 띄웁니다.
- **뉴스레터 구독 확인**: 뉴스레터 폼에 정보를 입력하면 구독 확인 이메일이 전달됩니다.
- **기사 추천 로직 개선**: 추천 기사(trending) 목록은 실제 유저가 클릭한 횟수를 통계 내어 최근 3개월 내 가장 클릭수가 많은 기사가 추천됩니다.
- **반응형 디자인 개선**: 조금 더 모바일 친화적으로 디자인을 개선했습니다.

## 기술적 중점 사항

- Next.js의 SSR을 활용하고, CSR 컴포넌트와의 구분에 초점을 두었습니다. 데이터 `fetch`시 `revalidate` 옵션을 5분으로 두어 그동안 새 유저에 의해 페이지가 요청될 시 최신 데이터를 제공하도록 했습니다.
- 리팩토링 과정에서 UI 컴포넌트의 분리와 구조화를 어떻게 할지 고민하였습니다. app 폴더 내에는 기능(feature) 단위의 컴포넌트를, 폴더 외에는 공유되는 컴포넌트들을 만들었습니다. 공유 컴포넌트 폴더에서는 컴포넌트를 원자(atoms), 분자(molecules), 조직(organisms) 단위로 구분했습니다.
- Archon V1의 테마를 차용하면서 네비게이션 바 등 스타일링에 약간의 변화를 주었고, 반응형 디자인에 신경썼습니다.
- 상단 메시지를 띄우는 toast 기능을 실제로 구현해 보았습니다. `zustand`로 여러 개의 메시지를 넣고 빼는 작업을 했고, 한 컴포넌트에서 이들을 관리하는 식으로 구현했습니다. 100% 안정적이지는 않지만, 자료구조나 리액트 컴포넌트의 작동에 대해 더 깊은 공부가 되었습니다.
- 뉴스레터 구독 폼에서 Next.js의 서버 액션과 `react-hook-form`을 함께 사용해 보았고, 이메일을 전송하는 것까지 구현해 보았습니다.
- Next.js 방식으로 에러, 로딩 처리를 해 보았습니다.

## 시연

1. 메인 화면
<video src="https://github.com/urbanscratcher/project-archon/assets/17016494/b82b667a-41f4-4071-9a46-c546f73006b7" controls></video>

2. 반응형 디자인 (태블릿, 모바일)
<video src="https://github.com/urbanscratcher/project-archon/assets/17016494/495df001-0003-4d1f-a04c-82b8bcb2e3ba" controls></video>

3. 뉴스레터 구독
<video src="https://github.com/urbanscratcher/project-archon/assets/17016494/b55813c8-8f2d-405a-9b8c-07d75f20a411" controls></video>

4. 토픽 별 아티클 목록
<video src="https://github.com/urbanscratcher/project-archon/assets/17016494/c51f0242-a75a-49a2-bba4-24f0e9ee157f" controls></video>

5. 북마크
<video src="https://github.com/urbanscratcher/project-archon/assets/17016494/ce7f8009-6132-4599-b7f6-167f37c63b60" controls></video>

6. 랜덤 기사 추천
<video src="https://github.com/urbanscratcher/project-archon/assets/17016494/7644b436-7463-47fd-9f6e-1f32bdd594eb" controls></video>

7. 저자 목록 페이지네이션
<video src="https://github.com/urbanscratcher/project-archon/assets/17016494/937ce45b-cc3e-4caa-99ab-3e512b97a4ae" controls></video>

8. 링크 공유
<video src="https://github.com/urbanscratcher/project-archon/assets/17016494/a8c16ea3-224d-4f03-92ca-83ba323e7678" controls></video>



## 기술 구성

### 프론트엔드

- **프레임워크**: Next.js
- **언어**: TypeScript
- **스타일링**: TailwindCSS
- **타입 체크**: zod
- **전역 상태 관리**: zustand
- **원격 상태 관리**: tanstack/react-query
- **기타**: react-hook-form, nodemailer

### 백엔드
#### Archon API
- Archon-cms와 동일합니다. [깃헙 바로가기](https://github.com/urbanscratcher/project-archon-api)
- **라이브러리**: Express, Node.js
- **데이터베이스**: MariaDB
- **로그**: Pino, Pino-http
- **보안**: Express-rate-limit, Xss, Helmet, Hpp, Bcrypt 등
- **API 테스트**: Postman
- **이미지 서비스**: Cloudinary

### 개발 환경
- **소스 코드**: GitHub
- **패키지 관리**: pnpm
- **기타**: VSCode, Eslint, Prettier

### 클라우드 서비스 및 배포
- **이미지 호스팅**: Cloudinary
- **백엔드 호스팅 및 배포**: Oracle Cloud, Docker, Nginx (개인 서브도메인으로 연결)
- **프론트엔드 호스팅 및 배포**: Oracle Cloud, Docker, Docker Hub, Nginx (개인 서브도메인으로 연결)

## 컴포넌트화

### 네이밍 규칙
- 서버 컴포넌트는 `Loader`라는 접미사를 붙여 데이터가 비동기적으로 로딩되는 컴포넌트임을 명시했습니다.
- List, Box(div) 등 자식 요소를 렌더링하는 기본 컴포넌트들을 만들어 가독성을 높였습니다.

### 컴포넌트 분리 원칙

- 컴포넌트는 자체 데이터, 로직, 외형(작동 방식과 모양)을 가진 UI 조각입니다. 컴포넌트는 재사용 가능하고, 서로 중첩될 수 있으며, 데이터를 주고받을 수 있습니다.
- 다음의 컴포넌트 제작의 4가지 원칙에 대해 생각하며 컴포넌트화를 진행했습니다.
  1. 콘텐츠/레이아웃의 논리적 분리
     - 컴포넌트에 서로 관련 없는 콘텐츠나 레이아웃이 포함되어 있는가?
  2. 재사용성
     - 컴포넌트의 일부를 재사용할 수 있는가?
     - 재사용하고 싶거나 필요로 하는가?
  3. 책임/복잡성
     - 컴포넌트가 너무 많은 일을 하고 있는가?
     - 컴포넌트가 너무 많은 props에 의존하고 있는가?
     - 컴포넌트에 너무 많은 상태나 효과가 있는가?
     - 코드, 특히 JSX가 너무 복잡하거나 혼란스러운가?
  4. 코딩 스타일
     - 더 작은 함수/컴포넌트를 선호하는가?

### 아토믹 디자인
- 컴포넌트들을 아토믹 디자인에 따라 나름대로 정의하고, 분류하려고 노력했습니다. 결과적으로 Atoms, Molecules, Organisms를 중점적으로 컴포넌트화 했습니다.
1. Subatomic particles - 디자인 시스템의 토큰들 (TailwindCSS를 통해 정의됩니다)
2. Atoms - 쪼개질 수 없는 작은 단위의 컴포넌트
3. Molecules - 행, 항목 등 1개의 기능(SRP)이 있는 컴포넌트
4. Organisms - 목록, 카드 등 N개의 기능들이 담긴 컴포넌트
5. Templates, Pages - Next.js의 page.tsx와 layout.tsx (따라서 본 프로젝트에서는 생략했습니다)


---

## 회고
- Next.js의 서버 컴포넌트와 클라이언트 컴포넌트 간의 분리에 대해 너무너무 고생한 프로젝트였다. 안 그래도 컴포넌트들을 쪼개놓았는데 서버와 클라이언트 간 분리까지 하려니 네이밍도 어려웠고, 뭔가 트리 구조가 아주 깊어진 느낌이라 전체 구조를 이해하기가 직관적이지 않았다. '서버 컴포넌트가 클라이언트 컴포넌트를 품고 클라이언트 컴포넌트가 서버 컴포넌트를 품으면 도대체 어떻게 되는거야?'와 같은 질문이 끊이지 않았던.
- 결론적으로, Next.js란 프레임워크는 프로젝트의 복잡성이 높아지는 것 때문에 SEO가 필수적인 곳에 한해서 사용하는 게 낫다고 생각했다. 오히려 React에 대한 탄탄한 지식이 필요하구나라고 새삼 깨닫게 되었다.
- 만들어뒀던 API들도 기대한대로 동작하지 않아서 다시 손을 보기도 했고, 더미 콘텐츠를 만들며 어드민 사이트도 덩달아 디버깅하다가 끝이 안날 것 같아 이대로 끝을 맺으려 한다.
- Archon 프로젝트는 피그마로 따로 모바일을 기획하지 않아서 스케일감이 영 와닿지 않았다. 그래서 그런지 텍스트나 여백 크기가 들쭉날쭉이라 조금 마음에 안 들기는 하다. 빌드하고 모바일로 체크하면서 디자인을 다시 쓰고 다시 디바깅하고 다시 새로 쓰고했는데 (본의 아니게 애자일), 너무 너무 비효율적이라 아무리 생각해도 역시 디자인과 기획이 퍼스트여야 한다고 생각했다.
- 더미 콘텐츠를 ChatGPT 4o와 Gemini를 통해 생성했는데 굉장히 유용했다.

## 다음은...
- Next.js의 가장 좋은 기능이 이미지 최적화인데 이걸 좀 더 파보고 싶다.
- 부드러운 로딩을 위해 스켈레톤 UI를 적용해 보고 싶다.
- 인터랙션할 때 모바일이나 태블릿의 모션들을 반영하고 싶다.
