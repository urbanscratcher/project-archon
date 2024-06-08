import {
  CoverSchema,
  CoversSchema,
  type Cover,
  type Covers,
} from "@/types/Cover";
import API_ENDPOINTS from "../libs/configApiUrl";
import { getOne } from "./general.api";

export async function getHeadline(): Promise<Cover> {
  try {
    const res = await getOne(API_ENDPOINTS.COVERS_HEADLINE);
    if (res) {
      throw new Error("Failed to fetch headline");
    }

    const headline = CoverSchema.safeParse(res);
    if (!headline?.success) {
      throw new Error("Failed to parse headline");
    } else {
      return headline.data;
    }
  } catch (error) {
    throw error;
  }
}

export async function getCovers(): Promise<Covers> {
  try {
    const res = await getOne(API_ENDPOINTS.COVERS);

    if (!res) {
      throw new Error("Failed to fetch covers");
    }

    const covers = CoversSchema.safeParse(res);
    if (!covers.success) {
      throw new Error("Failed to parse covers");
    }

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
