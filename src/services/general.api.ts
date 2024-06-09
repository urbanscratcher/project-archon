import { toCamelCase } from "@/libs/helpers";
import { notFound } from "next/navigation";

export async function getList(url: string) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      switch (response.status) {
        case 404:
          return undefined;
        case 429:
          throw new Error("Too many request");
        default:
          throw new Error("Internal Error");
      }
    }

    const data = await response.json();

    try {
      const camelCasedData = toCamelCase(data);
      return camelCasedData;
    } catch (error) {
      console.error("Failed to turn to camel case: ", error);
      throw error;
    }
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error;
  }
}

export async function create(url: string) {
  const options = {
    method: "POST",
    headers: { accept: "application/json" },
    body: JSON.stringify({}),
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      switch (response.status) {
        case 429:
          throw new Error("Too many request");
        default:
          throw new Error("Internal Error");
      }
    }

    const data = await response.json();

    if (data) {
      try {
        const camelCasedData = toCamelCase(data);
        return camelCasedData;
      } catch (error) {
        console.error("Failed to turn to camel case: ", error);
        throw error;
      }
    }
  } catch (error) {
    console.error("Error creating data: ", error);
    throw error;
  }
}

export async function getOne(url: string) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      switch (response.status) {
        case 404:
          notFound();
        case 429:
          throw new Error("Too many request");
        default:
          throw new Error("Internal Error");
      }
    }

    const data = await response.json();

    try {
      const camelCasedData = toCamelCase(data);
      return camelCasedData;
    } catch (error) {
      console.error("Failed to turn to camel case: ", error);
      throw error;
    }
  } catch (error) {
    throw error;
  }
}
