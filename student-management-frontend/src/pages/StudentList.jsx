import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function StudentList() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await api.get("/Students");
      setStudents(response.data);
    } catch (error) {
      console.error(error);
      alert("Failed to fetch students");
    }
  };

  // Delete Student
  const deleteStudent = async (id) => {
    const confirmDelete = window.confirm("Delete this student?");

    if (!confirmDelete) return;

    try {
      await api.delete(`/Students/${id}`);

      alert("Student Deleted Successfully!");

      fetchStudents();
    } catch (error) {
      console.error(error);
      alert("Failed to delete student.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Student List</h1>

        <button
          onClick={() => navigate("/dashboard")}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Dashboard
        </button>
      </div>

      <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="p-3">ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Semester</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="border-b text-center">
              <td className="p-3">{student.id}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.department}</td>
              <td>{student.semester}</td>

              <td className="space-x-2">
                <button
                  onClick={() => navigate(`/edit-student/${student.id}`)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteStudent(student.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;