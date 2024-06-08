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
          throw new Error("Not Found");
        case 429:
          throw new Error("Too many request");
        default:
          throw new Error("Internal Error");
      }
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error;
  }
}

export async function create(url: string) {
  const options = { method: "POST", headers: { accept: "appllication/json" } };

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

    return data;
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
          throw new Error("Not Found");
        case 429:
          throw new Error("Too many request");
        default:
          throw new Error("Internal Error");
      }
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error;
  }
}
