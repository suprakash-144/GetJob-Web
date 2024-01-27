"use client";
import { usePathname } from "next/navigation";
import React from "react";

const Cards = () => {
  const path = usePathname();
  return <div>{path}</div>;
};

export default Cards;
