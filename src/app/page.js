import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/component/Navbar";
import JobsSection from "@/component/JobsSection";
import Footer from "@/component/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <JobsSection />
      <Footer />
    </>
  );
}
