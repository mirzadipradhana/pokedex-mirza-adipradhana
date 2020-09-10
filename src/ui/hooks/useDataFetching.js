import { useState, useEffect } from "react";
import axios from 'axios';

const useDataFetching = (url, options = {}) => {
  const [loading, setLoading] = useState(true);
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
  }, [url]);

  return {
    error,
    loading,
    data
  };
}

export default useDataFetching;
