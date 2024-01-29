"use client";
import React, { useState } from "react";
const Navbar = () => {
  return (
    <div>
      <div className="bg-white px-5 py-3">
        <p className="fs-3 m-0 fw-bold">GetJob</p>
      </div>
      <div className="mx-1 bg-primary">
        <div className="container py-4 text-white ">
          <p className="fs-3">Find your dream job</p>
          <p className="fs-6">
            Looking for jobs? Browse our latest job opening to view
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
