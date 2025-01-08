// /pages/api/login.ts
import { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests are allowed" });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const sheets = google.sheets({ auth, version: "v4" });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A2:D1000", // Include the password column
    });

    const rows = response.data.values || [];
    const user = rows.find(
      ([name, emailField, role, passwordField]) =>
        emailField === email && passwordField === password
    );

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const [name, , role] = user;

    if (role === "Admin") {
      return res.status(200).json({ message: "Welcome Admin", role });
    } else {
      return res.status(403).json({ message: "You should be an admin", role });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
}
