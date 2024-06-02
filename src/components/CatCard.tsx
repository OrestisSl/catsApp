import { useEffect, useState } from "react";
import { fetchCatFact, fetchCatImage } from "../api/catApi";

const CatCard = () => {
  const [fact, setFact] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const [factData, imageData] = await Promise.all([fetchCatFact(), fetchCatImage()]);

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
  }, []);

  return (
    <div className="text-center p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-4">
      <h1 className="text-xl text-gray-800 font-bold">Cat Fact</h1>
      {isLoading ? (
        <p className="text-lg">Loading...</p>
      ) : error ? (
        <p className="text-lg text-red-500">Error: {error}</p>
      ) : (
        <>
          <img src={image} alt="A cute cat" className="w-full h-64 object-cover rounded" />
          <p className="text-lg text-gray-600">{fact}</p>
        </>
      )}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={fetchData}
      >
        Get New Fact
      </button>
    </div>
  );
};

export default CatCard;
