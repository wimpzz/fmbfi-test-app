// pages/user.tsx
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const UserPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Wait for session loading or if the user is not authenticated, redirect
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session?.user) {
    // If there is no session or user data, redirect to sign-in page
    router.push("/auth/signin");
    return null; // Prevent rendering while redirecting
  }

  return (
    <div>
      <h1>Welcome, {session.user.email}</h1>
      {/* You can display more user-specific information here */}
    </div>
  );
};

export default UserPage;
