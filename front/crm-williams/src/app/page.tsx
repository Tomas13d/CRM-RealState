import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
export default function Home() {
  return (
    <>
      <Navbar />
      <Login />
    </>
  );
}
