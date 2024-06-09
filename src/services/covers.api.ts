import {
  CoverSchema,
  CoversSchema,
  type Cover,
  type Covers,
} from "@/types/Cover";
import API_ENDPOINTS from "../libs/configApiUrl";
import { getOne } from "./general.api";
import { notFound } from "next/navigation";

export async function getHeadline(): Promise<Cover> {
  try {
    const res = await getOne(API_ENDPOINTS.COVERS_HEADLINE);
    if (!res) {
      notFound();
    }

    const parsedHeadline = CoverSchema.safeParse(res);
    if (!parsedHeadline.success) {
      throw new Error("Failed to parse headline");
    }

    return parsedHeadline.data;
  } catch (error) {
    console.error("Errors in getHeadline: ", error);
    throw error;
  }
}

export async function getCovers(): Promise<Covers> {
  try {
    const res = await getOne(API_ENDPOINTS.COVERS);

    if (!res) {
      notFound();
    }

    const parsedCovers = CoversSchema.safeParse(res);
    if (!parsedCovers.success) {
      throw new Error("Failed to parse covers");
    }

    const covers = parsedCovers.data;

    return {
      total: covers.total,
      data: covers.data.filter((c) => c.isMain === false),
    };
  } catch (error) {
    console.error("Errors in getCovers: ", error);
    throw error;
  }
}
