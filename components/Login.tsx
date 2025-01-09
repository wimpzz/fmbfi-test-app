// /components/Login.tsx
import { useState } from "react";
import { useRouter } from "next/router";

const Login = () => {
  const [role, setRole] = useState<string>("admin");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRole(event.target.value);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "" || password === "") {
      alert("Please fill out both fields.");
      return;
    }

    // Perform authentication (you can integrate an API here)
    // For demo purposes, we use a simple check for role-based redirection
    if (role === "admin") {
      alert("Admin logged in");
      router.push("/admin-dashboard");
    } else if (role === "scholar") {
      alert("Scholar logged in");
      router.push("/scholar-dashboard");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <form onSubmit={handleLogin}>
        {/* Role Selection */}
        <div className="mb-4">
          <label
            htmlFor="role"
            className="block text-sm font-medium text-gray-700"
          >
            Select Role
          </label>
          <select
            id="role"
            name="role"
            value={role}
            onChange={handleRoleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          >
            <option value="admin">Admin</option>
            <option value="scholar">Scholar</option>
          </select>
        </div>

        {/* Username */}
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Login Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
