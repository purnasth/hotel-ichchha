import { useState, useEffect } from "react";

const useFetchApi = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const cacheKey = `cache_${url}`; // Use the URL as the cache key

      // Check if the data exists in localStorage
      const cachedData = localStorage.getItem(cacheKey);
      if (cachedData) {
        setData(JSON.parse(cachedData)); // Use cached data
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(url);
        const text = await response.text(); // Get the raw text response

        // Check if the response contains 'const ... =' and parse it
        if (text.includes("const")) {
          const parsedData = eval(
            text.replace(/^const\s+\w+\s?=/, "").trim()
          ); // Remove const declaration
          setData(parsedData); // Set the data state

          // Store parsed data in localStorage
          localStorage.setItem(cacheKey, JSON.stringify(parsedData));
        } else {
          throw new Error("Unexpected response format");
        }

        setLoading(false); // Set loading to false once data is fetched
      } catch (err) {
        setError(err.message || "Failed to fetch data");
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetchApi;
