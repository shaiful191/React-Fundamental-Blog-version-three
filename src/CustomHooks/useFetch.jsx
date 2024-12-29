import { useEffect, useState } from 'react'

const useFetch = (url) => {

  const [data, setData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true);
  const [error, setError] = useState(null);



  const fetchData = async (abortController) => {
    try {
      const res = await fetch(url, { signal: abortController.signal });
      if (!res.ok) {
        throw new Error("Could not fetch the data for that resource");
      }
      const data = await res.json(); // Parse JSON response
      setData(data);
      setIsLoaded(false);
      setError(null);
    } catch (err) {
      if (err.name === 'AbortError') {
        console.log('fetch aborted');
      } else {
        setIsLoaded(false);
        setError(err.message);
      }
    }
  };


  useEffect(() => {
    const abortController = new AbortController();

    fetchData(abortController);

    // Clean-up function
    return () => {
      abortController.abort();
    };

  }, [url]);

  return { data, isLoaded, error };
}

export default useFetch

// json-server data/db.json run command->
// npx json-server --watch data/db.json --port 8000