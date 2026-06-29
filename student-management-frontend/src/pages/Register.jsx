import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Register</h1>

      <Link
        to="/"
        className="text-blue-600 hover:underline"
      >
        Already have an account? Login
      </Link>
    </div>
  );
}

export default Register;