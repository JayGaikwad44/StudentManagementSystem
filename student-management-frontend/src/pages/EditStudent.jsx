import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";

function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    id: "",
    name: "",
    email: "",
    department: "",
    semester: "",
  });

  useEffect(() => {
    fetchStudent();
  }, []);

  const fetchStudent = async () => {
    try {
      const response = await api.get(`/Students/${id}`);
      setStudent(response.data);
    } catch (error) {
      console.error(error);
      alert("Failed to load student.");
    }
  };

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.put(`/Students/${id}`, student);

      alert("Student Updated Successfully!");

      navigate("/students");
    } catch (error) {
      console.error(error);
      alert("Update Failed");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-96"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">
          Edit Student
        </h1>

        <input
          type="text"
          name="name"
          value={student.name}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="email"
          name="email"
          value={student.email}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="text"
          name="department"
          value={student.department}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="number"
          name="semester"
          value={student.semester}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
        />

        <button className="w-full bg-green-600 text-white p-3 rounded">
          Update Student
        </button>
      </form>
    </div>
  );
}

export default EditStudent;