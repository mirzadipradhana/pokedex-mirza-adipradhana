import { useState, useEffect } from "react";
import axios from 'axios';

const useDataFetching = (initUrl, options = {}) => {
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState(initUrl);
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const { method, ...opts} = options;
        const result = await axios({
          method: method || 'get',
          url,
          ...opts,
        });
        if (result) {
          const data = options.resolver ? options.resolver(result.data) : result.data
          setData(data);
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }

      setLoading(false);
    }

    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  const fetchMore = (nextUrl) => {
    setUrl(nextUrl)
  } 

  return {
    error,
    loading,
    data,
    fetchMore
  };
}

export default useDataFetching;
