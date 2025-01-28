"use client";

import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { SheetData } from "../../types/sheetData";
import Sidebar from "../../components/Sidebar";
import Footer from "@/components/Footer";

const UserDashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [userData, setUserData] = useState<SheetData | null>(null);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    if (status === "loading") return;

    if (!session || session.user?.role !== "User") {
      router.push("/login");
    }

    if (isDataLoaded) return;

    const fetchData = async () => {
      try {
        const response = await fetch("/api/getData");
        const data = await response.json();

        const user = data.data.find(
          (user: SheetData) => session && user.email === session.user?.email
        );

        if (user) {
          setUserData(user);
          setIsDataLoaded(true);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [session, status, router, isDataLoaded]);

  if (status === "loading" || !userData) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="spinner-border animate-spin inline-block w-16 h-16 border-4 border-t-4 border-gray-300 rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="p-6 max-w-5xl mx-auto flex-grow">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Welcome, {userData.firstName}!
        </h1>

        <div className="bg-gradient-to-r from-red-500 to-red-700 text-white rounded-lg p-4 mb-6 shadow">
          <h2 className="text-2xl font-semibold">Your Information</h2>
          <p>All the details we have for your account are displayed below.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p>
              <span className="font-semibold">Email:</span> {userData.email}
            </p>
            <p>
              <span className="font-semibold">Role:</span> {userData.role}
            </p>
            <p>
              <span className="font-semibold">Student ID:</span>{" "}
              {userData.studentId}
            </p>
            <p>
              <span className="font-semibold">Batch:</span> {userData.batch}
            </p>
            <p>
              <span className="font-semibold">School Year:</span> {userData.sy}
            </p>
          </div>
          <div>
            <p>
              <span className="font-semibold">First Name:</span>{" "}
              {userData.firstName}
            </p>
            <p>
              <span className="font-semibold">Last Name:</span>{" "}
              {userData.lastName}
            </p>
            <p>
              <span className="font-semibold">Middle Name:</span>{" "}
              {userData.middleName}
            </p>
            <p>
              <span className="font-semibold">School:</span> {userData.school}
            </p>
            <p>
              <span className="font-semibold">Course:</span> {userData.course}
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-700 transition"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
