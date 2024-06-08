const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const TOPICS_ENDPOINT = process.env.NEXT_PUBLIC_TOPICS_ENDPOINT;
const USERS_ENDPOINT = process.env.NEXT_PUBLIC_USERS_ENDPOINT;
const COVERS_ENDPOINT = process.env.NEXT_PUBLIC_COVERS_ENDPOINT;
const COVERS_HEADLINE_ENDPOINT =
  process.env.NEXT_PUBLIC_COVERS_HEADLINE_ENDPOINT;
const INSIGHTS_ENDPOINT = process.env.NEXT_PUBLIC_INSIGHTS_ENDPOINT;
const RANDOM_INSIGHTS_ENDPOINT =
  process.env.NEXT_PUBLIC_RANDOM_INSIGHTS_ENDPOINT;
const TRENDING_INSIGHTS_ENDPOINT =
  process.env.NEXT_PUBLIC_TRENDING_INSIGHTS_ENDPOINT;
const TRENDING_AUTHORS_ENDPOINT =
  process.env.NEXT_PUBLIC_TRENDING_AUTHORS_ENDPOINT;

if (!API_BASE_URL) {
  throw new Error("NEXT_PUBLIC_API_BASE_URL is not defined");
}
if (!TOPICS_ENDPOINT) {
  throw new Error("NEXT_PUBLIC_TOPICS_ENDPOINT is not defined");
}
if (!USERS_ENDPOINT) {
  throw new Error("NEXT_PUBLIC_USERS_ENDPOINT is not defined");
}
if (!COVERS_ENDPOINT) {
  throw new Error("NEXT_PUBLIC_COVERS_ENDPOINT is not defined");
}
if (!COVERS_HEADLINE_ENDPOINT) {
  throw new Error("NEXT_PUBLIC_COVERS_HEADLINE_ENDPOINT is not defined");
}
if (!INSIGHTS_ENDPOINT) {
  throw new Error("NEXT_PUBLIC_INSIGHTS_ENDPOINT is not defined");
}
if (!RANDOM_INSIGHTS_ENDPOINT) {
  throw new Error("NEXT_PUBLIC_RANDOM_INSIGHTS_ENDPOINT is not defined");
}
if (!TRENDING_INSIGHTS_ENDPOINT) {
  throw new Error("NEXT_PUBLIC_TRENDING_INSIGHTS_ENDPOINT is not defined");
}
if (!TRENDING_AUTHORS_ENDPOINT) {
  throw new Error("NEXT_PUBLIC_TRENDING_AUTHORS_ENDPOINT is not defined");
}

const API_ENDPOINTS = {
  TOPICS: `${API_BASE_URL}${TOPICS_ENDPOINT}`,
  USERS: `${API_BASE_URL}${USERS_ENDPOINT}`,
  COVERS: `${API_BASE_URL}${COVERS_ENDPOINT}`,
  COVERS_HEADLINE: `${API_BASE_URL}${COVERS_HEADLINE_ENDPOINT}`,
  INSIGHTS: `${API_BASE_URL}${INSIGHTS_ENDPOINT}`,
  RANDOM_INSIGHTS: `${API_BASE_URL}${RANDOM_INSIGHTS_ENDPOINT}`,
  TRENDING_INSIGHTS: `${API_BASE_URL}${TRENDING_INSIGHTS_ENDPOINT}`,
  TRENDING_AUTHORS: `${API_BASE_URL}${TRENDING_AUTHORS_ENDPOINT}`,
};

export default API_ENDPOINTS;