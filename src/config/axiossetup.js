"use client";
import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (endpoint, query) => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);
  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {
      ...query,
    },
    headers: {
      "X-RapidAPI-Key": "28146002e6msh89f30afc410de16p1355f3jsn67d31634c272",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };
  const fetchData = async () => {
    try {
      setloading(true);
      const res = await axios.request(options);
      setdata(res.data.data);
      setloading(false);
    } catch (error) {
      console.log(error);
      // alert("Error");
    } finally {
      setloading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const refetch = () => {
    fetchData();
  };
  return { data, refetch, loading };
};

export const useFetchDetails = (endpoint, query, no) => {
  const [details, setdetails] = useState([]);
  const [isloading, setisloading] = useState(true);
  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {
      ...query,
    },
    headers: {
      "X-RapidAPI-Key": "28146002e6msh89f30afc410de16p1355f3jsn67d31634c272",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };
  const fetchDetails = async () => {
    try {
      setisloading(true);
      const res = await axios.request(options);
      setdetails(res.data.data);
      // console.log(res.data);
      setisloading(false);
    } catch (error) {
      console.log(error);
      // alert("Error");
    } finally {
      setisloading(false);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, [no]);

  return { details, isloading };
};
export default useFetch;
