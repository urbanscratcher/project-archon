export async function getList(url: string) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  const response = fetch(url, options)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        switch (res.status) {
          case 404:
            throw new Error("Not Found");
          case 429:
            throw new Error("Too many request");
          default:
            throw new Error("Internal Error");
        }
      }
    })
    .catch((err) => console.error(err));

  return response;
}

export async function create(url: string) {
  const options = { method: "POST", headers: { accept: "appllication/json" } };

  const response = fetch(url, options)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        switch (res.status) {
          case 429:
            throw new Error("Too many request");
          default:
            throw new Error("Internal Error");
        }
      }
    })
    .catch((err) => console.error(err));

  return response;
}

export async function getOne(url: string) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  const response = fetch(url, options)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        switch (res.status) {
          case 404:
            throw new Error("Not Found");
          case 429:
            throw new Error("Too many request");
          default:
            throw new Error("Internal Error");
        }
      }
    })
    .catch((err) => console.error(err));

  return response;
}
