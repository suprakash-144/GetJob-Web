"use client";
import useFetch from "@/config/axiossetup";
import { useParams } from "next/navigation";
import React from "react";
import Card from "./Card";

const Search = () => {
  const path = useParams();
  const { data, refetch, loading } = useFetch("search", {
    query: path,
    num_pages: 3,
  });
  return (
    <div>
      {loading ? (
        <> Loading</>
      ) : (
        <div>
          {" "}
          {data.map((item, key) => (
            <Card key={key} data={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
