import { useEffect, useState } from "react";
import Axios from "../Axios";
const useFetch = (url) => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);
  const fetchdata = async () => {
    setloading(true);
    try {
      const res = await Axios.get(url);
      setdata(res.data.message);
      // console.log(res);
    } catch (error) {
      seterror(error);
    }
    setloading(false);
  };
  useEffect(() => {
    fetchdata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const reFetch = async () => {
    setloading(true);
    try {
      const res = await Axios.get(url);
      setdata(res.data.message);
    } catch (error) {
      seterror(error);
    }
    setloading(false);
  };
  return { data, loading, error, reFetch };
};
export default useFetch;
