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
      range: "Sheet2!A2:Z1000", // Adjusted range for all columns
    });

    const rows = response.data.values || [];
    const user = rows.find(
      ([studentId, , , , , , , , , , , , , emailField]) => studentId === password && emailField === email
    );

    if (!user) {
      return res.status(401).json({ message: "User not existed in database" });
    }

    // Destructure to get user details
    const [
      studentId, no, batch, sy, year, category, status, lastName, firstName,
      middleName, school, course, duration, emailField, mobileNumber, facebook, address
    ] = user;

    return res.status(200).json({
      message: "Login successful",
      user: {
        studentId, no, batch, sy, year, category, status, lastName, firstName,
        middleName, school, course, duration, emailField, mobileNumber, facebook, address
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
}
