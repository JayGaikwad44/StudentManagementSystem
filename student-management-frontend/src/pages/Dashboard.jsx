import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100">

      <nav className="bg-blue-600 text-white flex justify-between p-4">
        <h1 className="text-2xl font-bold">
          Student Management System
        </h1>

        <button
          onClick={logout}
          className="bg-red-500 px-4 py-2 rounded"
        >
          Logout
        </button>
      </nav>

      <div className="flex flex-col items-center mt-20">

        <h2 className="text-4xl font-bold mb-10">
          Dashboard
        </h2>

        <button
          onClick={() => navigate("/students")}
          className="bg-blue-600 text-white p-4 rounded w-60 mb-5"
        >
          View Students
        </button>

        <button
          onClick={() => navigate("/add-student")}
          className="bg-green-600 text-white p-4 rounded w-60"
        >
          Add Student
        </button>

      </div>
    </div>
  );
}

export default Dashboard;