import { NextPage } from "next";
import { signIn } from "next-auth/react";
import { FormEventHandler, useState } from "react";

interface Props {}

const SignIn: NextPage = (props) => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    // Perform signIn with NextAuth credentials provider
    const res = await signIn("credentials", {
      email: userInfo.email,
      password: userInfo.password,
      redirect: false,
    });

    if (res?.error) {
      setMessage(res.error); // Show error message if login failed
    } else {
      // Handle success, you can redirect to the user dashboard or another page
      // For example, router.push('/user')
      console.log("Login successful", res);
    }
  };

  return (
    <div className="sign-in-form max-w-lg mx-auto py-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <h1 className="text-2xl font-bold text-center text-red-900">Login</h1>

        {message && (
          <div className="bg-red-500 text-white p-4 rounded-md text-center">
            {message}
          </div>
        )}

        <div className="flex items-center justify-center">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            value={userInfo.email}
            onChange={({ target }) =>
              setUserInfo({ ...userInfo, email: target.value })
            }
            type="email"
            placeholder="Your Email"
            id="email"
            className="shadow-md focus:ring-red-900 focus:border-red-900 block w-full sm:text-lg lg:text-xl border-gray-300 rounded-md p-4"
          />
        </div>

        <div className="flex items-center justify-center">
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            value={userInfo.password}
            onChange={({ target }) =>
              setUserInfo({ ...userInfo, password: target.value })
            }
            type="password"
            placeholder="Your Student ID"
            id="password"
            className="shadow-md focus:ring-red-900 focus:border-red-900 block w-full sm:text-lg lg:text-xl border-gray-300 rounded-md p-4"
          />
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="w-full rounded-md shadow py-4 px-6 text-lg sm:text-xl lg:text-2xl text-white bg-red-900 hover:bg-white hover:text-red-900 border-4 border-transparent hover:border-red-900 transition-colors duration-300"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
