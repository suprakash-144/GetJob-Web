"use client";
import { useFetchDetails } from "@/config/axiossetup";
import Image from "next/image";
import React, { useEffect } from "react";
import { CiHeart } from "react-icons/ci";

const Details = ({ alldata, no }) => {
  const { details, isloading } = useFetchDetails(
    "job-details",
    {
      job_id: alldata[no].job_id,
    },
    no
  );

  const imageLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };
  return (
    <>
      {isloading ? (
        <> Loading... </>
      ) : (
        <div className="bg-white rounded-3 px-5 py-4">
          <div className="d-flex align-items-center justify-content-between border-bottom py-3">
            <div className="d-flex gap-3">
              <Image
                loader={imageLoader}
                src={`${
                  details[0]?.employer_logo
                    ? details[0].employer_logo
                    : "/next.svg"
                }`}
                alt="logo"
                width={50}
                height={50}
              />
              <div className="px-3">
                <p className="fs-4">{details[0].job_title}</p>
                <p className=""> {details[0].job_publisher}</p>
              </div>
            </div>
            <div className="d-flex align-items-center gap-2">
              <div className="btn btn-primary">Apply Now</div>
              <CiHeart
                className="btn btn-outline-light text-dark p-1"
                size="40px"
              />
            </div>
          </div>
          <div className="py-3 border-bottom ">
            <p className="lh-lg">Role: {details[0].job_title}</p>
            <p className="lh-lg">Type: {details[0].job_employment_type}</p>
            <p className="lh-lg">Company: {details[0].employer_name}</p>
            <p className="lh-lg">
              Location:{" "}
              {` ${details[0]?.job_city ? details[0].job_city : ""}  ${
                details[0].job_country
              }`}
            </p>
          </div>
          <div className="py-3 border-bottom ">
            <h4>Qualifications</h4>
            {details[0].job_highlights?.Qualifications.map((item, key) => (
              <p className="lh-base" key={key}>
                {" "}
                {item}.
              </p>
            )) ?? ["NO Data"]}
          </div>
          <div className="py-3 border-bottom ">
            <h5>Skills Required</h5>
            <div className="d-flex flex-wrap">
              {details[0]?.job_required_skills
                ? details[0]?.job_required_skills.map((item, key) => (
                    <span
                      key={key}
                      className="badge bg-light text-dark p-2 me-1"
                    >
                      {item}
                    </span>
                  ))
                : "NO DATA"}
            </div>
          </div>
          <div className="py-3 border-bottom ">
            <h5>Responsibilities</h5>
            {details[0].job_highlights?.Responsibilities ?? ["NO Data"]}
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
