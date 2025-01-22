import { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests are allowed" });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    // Authenticate Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const sheets = google.sheets({ auth, version: "v4" });

    // Fetch data from Google Sheets
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A2:C1000", // Assuming columns A, B, C are Email, Password, and Role
    });

    const rows = response.data.values;

    if (!rows || rows.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }

    // Find the user with matching email and password
    const user = rows.find((row) => row[0] === email && row[1] === password);

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Assuming the user data contains the role in column C (index 2)
    const role = user[2];

    // Return user data with role
    return res.status(200).json({ email, role });
  } catch (error) {
    console.error("Error fetching Google Sheets data:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
