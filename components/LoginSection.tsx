"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router"; // Import useRouter
import { useState, useEffect } from "react";

const LoginSection = () => {
  const { data: session, status } = useSession();
  const router = useRouter(); // Initialize useRouter
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setErrorMessage(""); // Clear previous error message

    // Call signIn with credentials provider
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setErrorMessage(res.error); // Set error message if login fails
    } else if (res?.ok) {
      // After successful login, navigate based on the role
      if (session?.user?.role === "Admin") {
        router.push("/admin/dashboard");
      } else if (session?.user?.role === "User") {
        router.push("/user/dashboard");
      }
    }
  };

  // Check the session and navigate on initial load or session change
  useEffect(() => {
    if (status === "loading") return; // Prevent unnecessary redirects while loading

    if (session) {
      // Session exists, navigate based on the role
      if (session.user?.role === "Admin") {
        router.push("/admin/dashboard");
      } else if (session.user?.role === "User") {
        router.push("/user/dashboard");
      }
    }
  }, [session, status, router]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <section
      id="login"
      className="relative flex justify-center items-center min-h-screen bg-cover bg-center"
    >
      {/* Background Image with opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/images/FMBFI.JPG")', // Local image path
          opacity: 0.5, // Set opacity to 50% for background image
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      {/* Overlay for background opacity */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content Container */}
      <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-xl w-[90%] sm:w-[400px] relative z-10 mt-12 sm:mt-16 md:mt-20">
        {/* Logo Centered at the Top (Bottom Half Sticking to Top) */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mb-6">
          <img
            src="/images/logo.png" // Replace with your logo image path
            alt="Logo"
            className="w-24 h-auto" // Adjust size as needed
          />
        </div>

        {/* Form */}
        <div>
          <h2 className="text-2xl sm:text-3xl mb-4 sm:mb-6 font-semibold text-[#2a2a2a] font-body">
            Log-in
          </h2>

          {session ? (
            <div>
              <h3>Welcome back, {session.user?.email}!</h3>
              <p>Role: {session.user?.role}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMessage && (
                <div className="bg-red-500 text-white p-4 rounded-md">
                  {errorMessage}
                </div>
              )}

              <div className="flex items-center justify-center">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  id="email"
                  className="shadow-md focus:ring-red-900 focus:border-red-900 block w-full max-w-lg sm:text-lg lg:text-xl border-gray-300 rounded-md p-4"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="flex items-center justify-center">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  id="password"
                  className="shadow-md focus:ring-red-900 focus:border-red-900 block w-full max-w-lg sm:text-lg lg:text-xl border-gray-300 rounded-md p-4"
                  placeholder="Your Password"
                  required
                />
              </div>

              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="flex items-center justify-center w-full max-w-lg rounded-md shadow py-4 px-6 text-lg sm:text-xl lg:text-2xl text-white bg-red-900 hover:bg-white hover:text-red-900 border-4 border-transparent hover:border-red-900 transition-colors duration-300"
                >
                  Log-in
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default LoginSection;
