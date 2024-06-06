import { CoverSchema, CoversSchema } from "@/types/Cover";
import { getOne } from "./general.api";

export async function getHeadline() {
  const res = await getOne(
    "http://localhost:5001/archon-api/v1/covers/headline",
  );
  if (!res) {
    throw new Error("Failed to fetch headline");
  }

  const headline = CoverSchema.safeParse(res);
  if (!headline?.success) {
    throw new Error("Failed to parse headline");
  }

  return headline.data;
}

export async function getCovers() {
  const res = await getOne("http://localhost:5001/archon-api/v1/covers");

  if (!res) {
    throw new Error("Failed to fetch covers");
  }

  const covers = CoversSchema.safeParse(res);
  if (!covers.success) {
    throw new Error("Failed to parse covers");
  }

  try {
    const coversWithoutHeadline = covers?.data.data.filter(
      (c) => c.isMain === false,
    );
    return {
      total: coversWithoutHeadline ? coversWithoutHeadline.length : 0,
      data: coversWithoutHeadline,
    };
  } catch (e) {
    return {
      total: 0,
      data: [],
    };
  }
}
