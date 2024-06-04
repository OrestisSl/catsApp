import { useEffect, useState } from "react";
import { fetchCatFact, fetchCatImage } from "../api/catApi";

const useFetchData = () => {
  // state:
  const [fact, setFact] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // fetch function:
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const [factData, imageData] = await Promise.all([
          fetchCatFact(),
          fetchCatImage(),
        ]);

        setFact(factData);
        setImage(imageData);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    useEffect(() => {
        fetchData();
    },[])

  return { fact, image, isLoading, error , fetchData };
};

export default useFetchData;
