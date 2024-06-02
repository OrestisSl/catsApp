const FACT_API_URL = "https://meowfacts.herokuapp.com";
const IMAGE_API_URL = "https://api.thecatapi.com/v1/images/search";

const fetchCatFact = async () => {
  const res = await fetch(FACT_API_URL);

  if (!res.ok) {
    throw new Error(`Error: ${res.statusText}`);
  }
  
  const data = await res.json();
  return data.data;
};

const fetchCatImage = async () => {
  const res = await fetch(IMAGE_API_URL);
  if (!res.ok) {
    throw new Error(`Error: ${res.statusText}`);
  }
  const data = await res.json();
  return data[0].url;
};

export { fetchCatFact, fetchCatImage };
