import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import { useRouter } from "next/router";

const UserPage = () => {
  const router = useRouter();
  const {
    studentId,
    no,
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
    emailField,
    mobileNumber,
    facebook,
    address,
  } = router.query;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-8">
        <h1 className="text-2xl font-bold mb-4">User Details</h1>
        <p>
          <strong>Student ID:</strong> {studentId}
        </p>
        <p>
          <strong>No.:</strong> {no}
        </p>
        <p>
          <strong>Batch:</strong> {batch}
        </p>
        <p>
          <strong>SY:</strong> {sy}
        </p>
        <p>
          <strong>Year:</strong> {year}
        </p>
        <p>
          <strong>Category:</strong> {category}
        </p>
        <p>
          <strong>Status:</strong> {status}
        </p>
        <p>
          <strong>Last Name:</strong> {lastName}
        </p>
        <p>
          <strong>First Name:</strong> {firstName}
        </p>
        <p>
          <strong>Middle Name:</strong> {middleName}
        </p>
        <p>
          <strong>School:</strong> {school}
        </p>
        <p>
          <strong>Course:</strong> {course}
        </p>
        <p>
          <strong>Duration:</strong> {duration}
        </p>
        <p>
          <strong>Email:</strong> {emailField}
        </p>
        <p>
          <strong>Mobile Number:</strong> {mobileNumber}
        </p>
        <p>
          <strong>Facebook:</strong> {facebook}
        </p>
        <p>
          <strong>Address:</strong> {address}
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default UserPage;
