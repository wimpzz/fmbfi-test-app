import { useState } from "react";
import { useRouter } from "next/router"; // Import useRouter for routing

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter(); // Initialize useRouter hook

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      router.push({
        pathname: "/user",
        query: { ...data.user },
      });
    } else {
      setMessage(data.message || "Login failed"); // Show the error message from the server
    }
  };

  return (
    <form className="py-8 space-y-6" onSubmit={handleSubmit}>
      {message && (
        <div className="bg-red-500 text-white p-4 rounded-md">{message}</div>
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
          placeholder="Your StudentId"
        />
      </div>

      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="flex items-center justify-center w-full max-w-lg rounded-md shadow py-4 px-6 text-lg sm:text-xl lg:text-2xl text-white bg-red-900 hover:bg-white hover:text-red-900 border-4 border-transparent hover:border-red-900 transition-colors duration-300"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
