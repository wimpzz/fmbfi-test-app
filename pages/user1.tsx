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
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow p-8 bg-white shadow-md rounded-lg mx-4 my-6">
        <h1 className="text-3xl font-extrabold text-center text-[#d12f27] mb-8">
          User Details
        </h1>

        {/* User Information Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Scholar's Information
            </h3>
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
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Contact Information
            </h3>
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
          </div>
        </div>

        {/* Additional Information Card */}
        <div className="mt-8 p-6 bg-white rounded-lg shadow-md border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Additional Information
          </h3>
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UserPage;
