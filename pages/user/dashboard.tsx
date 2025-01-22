"use client";

import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

// Define the type for the sheet data
type SheetData = {
  email: string;
  password: string;
  role: string;
  studentId: string;
  batch: string;
  sy: string;
  year: string;
  category: string;
  status: string;
  lastName: string;
  firstName: string;
  middleName: string;
  school: string;
  course: string;
  duration: string;
  mobileNumber: string;
  facebook: string;
  address: string;
};

const UserDashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [userData, setUserData] = useState<SheetData | null>(null);

  useEffect(() => {
    if (status === "loading") return;

    if (!session || session.user?.role !== "User") {
      router.push("/login"); // Redirect if user is not logged in or not a user
    }

    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch("/api/getData");
        const data = await response.json();

        // Find the user data for the logged-in user
        const user = data.data.find(
          (user: SheetData) => session && user.email === session.user?.email
        );

        if (user) {
          setUserData(user); // Set the user data if found
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [session, status, router]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (!userData) {
    return <p>Loading user data...</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl mb-4">Welcome to Your Dashboard</h1>

      <h2 className="text-2xl font-semibold mb-2">User Information</h2>
      <div className="space-y-4">
        <p>
          <strong>Email:</strong> {userData.email}
        </p>
        <p>
          <strong>Password:</strong> {userData.password}
        </p>
        <p>
          <strong>Role:</strong> {userData.role}
        </p>
        <p>
          <strong>Student ID:</strong> {userData.studentId}
        </p>
        <p>
          <strong>Batch:</strong> {userData.batch}
        </p>
        <p>
          <strong>School Year:</strong> {userData.sy}
        </p>
        <p>
          <strong>Year:</strong> {userData.year}
        </p>
        <p>
          <strong>Category:</strong> {userData.category}
        </p>
        <p>
          <strong>Status:</strong> {userData.status}
        </p>
        <p>
          <strong>Last Name:</strong> {userData.lastName}
        </p>
        <p>
          <strong>First Name:</strong> {userData.firstName}
        </p>
        <p>
          <strong>Middle Name:</strong> {userData.middleName}
        </p>
        <p>
          <strong>School:</strong> {userData.school}
        </p>
        <p>
          <strong>Course:</strong> {userData.course}
        </p>
        <p>
          <strong>Duration:</strong> {userData.duration}
        </p>
        <p>
          <strong>Mobile Number:</strong> {userData.mobileNumber}
        </p>
        <p>
          <strong>Facebook:</strong> {userData.facebook}
        </p>
        <p>
          <strong>Address:</strong> {userData.address}
        </p>
      </div>

      <button
        onClick={() => signOut({ callbackUrl: "/" })}
        className="mt-4 p-2 bg-red-500 text-white rounded-md hover:bg-red-700"
      >
        Sign Out
      </button>
    </div>
  );
};

export default UserDashboard;
