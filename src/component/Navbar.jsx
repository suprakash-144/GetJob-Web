"use client";
import React, { useState } from "react";
const Navbar = () => {
  return (
    <div>
      <div className="bg-white px-5 py-1">
        <p className="fs-3 m-0">GetJob</p>
      </div>
      <div className="mx-1">
        <div className="px-5 py-4 text-white bg-primary">
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
