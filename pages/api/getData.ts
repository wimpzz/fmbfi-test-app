// /pages/api/getData.ts
import { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";

type SheetData = {
  email: string;
  password: string;
  role: string;
  studentId: string;
  batch: string;
  sy: string;
  year: string;
  category: string;
  status: string;
  lastName: string;
  firstName: string;
  middleName: string;
  school: string;
  course: string;
  duration: string;
  mobileNumber: string;
  facebook: string;
  address: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Only GET requests are allowed" });
  }

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/spreadsheets.readonly",
      ],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A2:R1000", // Adjusted range to cover columns A to R
    });

    const rows = response.data.values || [];
    const data: SheetData[] = rows.map(
      ([
        email,
        password,
        role,
        studentId,
        batch,
        sy,
        year,
        category,
        status,
        lastName,
        firstName,
        middleName,
        school,
        course,
        duration,
        mobileNumber,
        facebook,
        address,
      ]) => ({
        email: String(email),
        password: String(password),
        role: String(role),
        studentId: String(studentId),
        batch: String(batch),
        sy: String(sy),
        year: String(year),
        category: String(category),
        status: String(status),
        lastName: String(lastName),
        firstName: String(firstName),
        middleName: String(middleName),
        school: String(school),
        course: String(course),
        duration: String(duration),
        mobileNumber: String(mobileNumber),
        facebook: String(facebook),
        address: String(address),
      })
    );

    res.status(200).json({ data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
}
