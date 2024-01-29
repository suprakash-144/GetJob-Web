"use client";
import Image from "next/image";
import React from "react";

const Card = ({ data, selected, setselected, no }) => {
  const imageLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };
  return (
    <div>
      <div
        onClick={() => {
          setselected(no);
        }}
        className={`${
          selected == no ? "border border-primary" : "border-warning"
        } d-flex flex-column px-3 py-2 bg-white w-100 rounded-3 search`}
      >
        <div className="d-flex align-items-center justify-context-center border-bottom py-2">
          <Image
            loader={imageLoader}
            src={`${data.employer_logo ? data.employer_logo : "/next.svg"}`}
            alt="logo"
            width={50}
            height={50}
          />
          <div className="px-3">
            <p className="m-0 fs-5">{data.job_title}</p>
            <p className="m-0 fs-6">{data.job_publisher}</p>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between px-3 py-1">
          <p className="m-0 ">{data.job_employment_type}</p>
          <p className="m-0 "> {data.job_country}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
