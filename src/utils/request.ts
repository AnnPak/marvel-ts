type TRequest = {
  method?: "GET" | "POST";
  url: string;
  body?: BodyInit;
};

export const request = async ({ method, url, body }: TRequest) => {
  const requestOptions: RequestInit = {
    method: method ? method : "GET",
    headers: { "Content-Type": "application/json" },
    body: body ? body : null,
  };

  const response = await fetch(url, requestOptions);

  if (!response.ok) {
    throw new Error(`Could not fetch ${url}, status: ${response.status}`);
  }
  return await response.json();
};
