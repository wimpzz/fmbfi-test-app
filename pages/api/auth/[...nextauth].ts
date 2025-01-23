import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  secret: process.env.NEXT_AUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        try {
          // Call the custom login API
          const res = await fetch(`${process.env.NEXTAUTH_URL}/api/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          });

          if (!res.ok) {
            throw new Error("Invalid email or password");
          }

          const user = await res.json();

          // Return the user object with role
          if (user) {
            return {
              id: user.id, // Using email as ID for simplicity
              email: user.email,
              role: user.role,
            };
          }
        } catch (error) {
          console.error("Login error:", error);
          throw new Error("Invalid email or password");
        }

        // Return null if user data is not available
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
    // error: '/auth/error',
    // signOut: '/auth/signout'
  },
  callbacks: {
    async jwt({ token, user }) {
      // Add user role to the token on first sign in
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      // Add role to the session object
      if (token) {
        session.user.role = token.role as string;
      }
      return session;
    },
    
  },
};

export default NextAuth(authOptions);
