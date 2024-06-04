import useFetchData from "../hooks/useFetchData";

const CatCard = () => {
  const { fact, image, fetchData, isLoading, error } = useFetchData();

  return (
    <div className="text-center p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-4">
      <h1 className="text-xl text-gray-800 font-bold">Cat Fact</h1>
      {isLoading ? (
        <p className="text-lg">Loading...</p>
      ) : error ? (
        <p className="text-lg text-red-500">Error: {error}</p>
      ) : (
        <>
          <img
            src={image}
            alt="A cute cat"
            className="w-full h-64 object-cover rounded"
          />
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
