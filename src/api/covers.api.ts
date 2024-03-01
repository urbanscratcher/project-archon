import { CoverSchema, CoversSchema } from "@/types/Cover";
import { getOne } from "./general.api";

export async function getHeadline() {
  const res = await getOne(
    "http://localhost:5001/archon-api/v1/covers/headline",
  );

  const headline = res ? CoverSchema.parse(res) : undefined;

  return headline;
}

export async function getCovers() {
  const res = await getOne("http://localhost:5001/archon-api/v1/covers");

  const covers = res ? CoversSchema.parse(res) : undefined;

  const coversWithoutHeadline = covers?.data.filter((c) => c.isMain === false);

  return {
    total: coversWithoutHeadline ? coversWithoutHeadline.length : 0,
    data: coversWithoutHeadline,
  };
}
