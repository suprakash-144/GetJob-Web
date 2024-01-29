"use client";
import React, { useState } from "react";
import Card from "./Card";
import useFetch from "@/config/axiossetup";
import Details from "./Details";
import { CiSearch } from "react-icons/ci";

const tabs = ["Full-Time", "Part-Time", "Remote", "Contractor"];
const JobsSection = () => {
  const [search, setSearch] = useState("");
  const { data, refetch, loading } = useFetch("search", {
    query: search || "react developer",
    num_pages: 1,
  });
  const [selected, setselected] = useState(0);
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center px-3 py-2">
        <div className="d-flex">
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
            className="form-control"
          />
          <CiSearch
            size="40px"
            className="btn text-dark btn-outline-light p-1 mx-2"
            onClick={() => {}}
          />
        </div>
        <div className="d-flex gap-2">
          {tabs.map((item, key) => (
            <span
              onClick={() => {}}
              key={key}
              className="badge bg-light text-dark p-3"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="mx-1 bg-light p-3 py-5 h-75">
        {loading ? (
          <div className="row">
            <div className="d-flex justify-content-center align-items-center">
              Loading...
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="col-4 ps-5">
              <p className="fs-4 m-0">
                Jobs Realated to {search ? search : "React Developers"}
              </p>
              <p className="fs-6"> {data.length} job posting available</p>
              <div className="d-flex flex-column overflow-auto list gap-3 py-3 ">
                {data.map((item, key) => (
                  <Card
                    key={key}
                    data={item}
                    selected={selected}
                    setselected={setselected}
                    no={key}
                  />
                ))}
              </div>
            </div>
            <div className="col-8 overflow-auto ">
              <Details alldata={data} no={selected} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobsSection;
