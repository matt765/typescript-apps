import { useState } from "react";
import axios from "axios";

export const useFetch = (url: string) => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const makeApiCall = () => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        setLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  };

  return {
    data,
    loading,
    error,
    makeApiCall,
  };
};
