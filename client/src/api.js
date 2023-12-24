const fetchJSON = async (path, method, inputData) => {
    let fetched;
    if (method === "POST") {
      fetched = await fetch(import.meta.env.VITE_BASE_URL + "api/" + path, {
        method: method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${ import.meta.env.VITE_TOKEN}`,
        },
        body: JSON.stringify(inputData),
      }).then((response) => response.json());
    } else if (method === "GET") {
      fetched = await fetch(import.meta.env.VITE_BASE_URL + "api/" + path, {
        method: method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${ import.meta.env.VITE_TOKEN}`,
        },
      }).then((response) => response.json());
    }
    return fetched;
  };

  export { fetchJSON};
