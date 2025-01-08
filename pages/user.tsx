import { useRouter } from "next/router";

const UserPage = () => {
  const router = useRouter();
  const { studentId, no, lastName, firstName, middleName, emailField } =
    router.query;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">User Details</h1>
      <p>
        <strong>Student ID:</strong> {studentId}
      </p>
      <p>
        <strong>No.:</strong> {no}
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
        <strong>Email:</strong> {emailField}
      </p>
    </div>
  );
};

export default UserPage;
