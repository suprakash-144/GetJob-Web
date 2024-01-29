"use client";
import React, { useState } from "react";
import Card from "./Card";
import useFetch from "@/config/axiossetup";
import Details from "./Details";
import { CiSearch } from "react-icons/ci";
import { useForm } from "react-hook-form";
const tabs = ["Full-Time", "Part-Time", "Remote", "Contractor"];

const JobsSection = () => {
  const [search, setSearch] = useState("react developer");
  const { data, refetch, loading } = useFetch("search", {
    query: search,
    num_pages: 1,
  });
  const [selected, setselected] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setSearch(data.search);
    setselected(0);
    refetch();
  };
  return (
    <div className={`job-sec `}>
      <div className="d-flex justify-content-center align-items-center px-3 py-2">
        <form onSubmit={handleSubmit(onSubmit)} className="form w-25 d-flex">
          <input
            type="text"
            placeholder="Search"
            {...register("search")}
            className="form-control "
          />
          <button className="btn text-dark btn-outline-dark mx-2">
            <CiSearch size="25px" />
          </button>
        </form>
        <div className="d-flex gap-2">
          {tabs.map((item, key) => (
            <span
              onClick={() => {
                onSubmit({ search: item });
              }}
              key={key}
              className="badge bg-light text-dark p-3 search"
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
