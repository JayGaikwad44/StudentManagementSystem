import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function AddStudent() {
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    name: "",
    email: "",
    department: "",
    semester: "",
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/Students", student);

      alert("Student Added Successfully!");

      navigate("/students");
    } catch (error) {
      console.error(error);
      alert("Failed to add student.");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-96"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">
          Add Student
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full border p-3 rounded mb-4"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border p-3 rounded mb-4"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="department"
          placeholder="Department"
          className="w-full border p-3 rounded mb-4"
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="semester"
          placeholder="Semester"
          className="w-full border p-3 rounded mb-4"
          onChange={handleChange}
          required
        />

        <button
          className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700"
        >
          Add Student
        </button>

      </form>

    </div>
  );
}

export default AddStudent;