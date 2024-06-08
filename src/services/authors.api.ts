import { AuthorSchema, AuthorsSchema, type Author } from "@/types/Author";
import API_ENDPOINTS from "../libs/configApiUrl";
import { getList, getOne } from "./general.api";

export async function getAuthors({
  offset = 0,
  limit = 10,
}: {
  offset: number;
  limit: number;
}) {
  try {
    const queryString = `${API_ENDPOINTS.USERS}?offset=${offset}&limit=${limit}&filter={"and":[{"role":"writer"}]}`;
    const res = await getList(queryString);

    if (!res) {
      throw new Error("Failed to fetch authors");
    }

    const authors = AuthorsSchema.safeParse(res);
    if (!authors?.success) {
      throw new Error("Failed to parse authors");
    }

    return authors.data;
  } catch (error) {
    console.error("Errors in getList: ", error);
    throw error;
  }
}

export async function getAuthor(idx: number): Promise<Author> {
  try {
    const res = await getOne(`${API_ENDPOINTS.USERS}/${idx}`);
    if (!res) {
      throw new Error("Failed to fetch author");
    }

    const author = AuthorSchema.safeParse(res);
    if (!author?.success) {
      throw new Error("Failed to parse author");
    }

    return author.data;
  } catch (error) {
    console.error("Errors in getAuthor: ", error);
    throw error;
  }
}
