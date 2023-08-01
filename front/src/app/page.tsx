"use client";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ProtectedRoutes from "./components/ProtectedRoutes";
export default function Home() {
  return (
    <>
      <ProtectedRoutes>
        <Navbar />
        <Sidebar />
      </ProtectedRoutes>
    </>
  );
}
