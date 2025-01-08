// components/LoginForm.tsx
import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    setMessage(data.message);
  };

  return (
    <form className="py-4 space-y-4" onSubmit={handleSubmit}>
      {message && (
        <div className="bg-red-500 text-white p-4 rounded-md">
          {message}
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
          className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md"
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
          className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md"
          placeholder="Your Password"
        />
      </div>

      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="flex items-center justify-center text-sm w-64 rounded-md shadow py-3 px-2 text-white bg-indigo-500"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
