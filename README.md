# 🎓 Student Management System

A full-stack Student Management System built using **ASP.NET Core Web API**, **React**, **SQL Server**, and **JWT Authentication**. The application allows users to register, log in securely, and manage student records through a clean and responsive interface.

---

## 🚀 Features

- 🔐 User Registration
- 🔑 User Login with JWT Authentication
- 👨‍🎓 Add Student
- 📋 View Student List
- ✏️ Edit Student Details
- 🗑️ Delete Student
- 🔒 Protected Routes
- 📱 Responsive UI

---

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- React Router
- Axios

### Backend
- ASP.NET Core Web API
- Entity Framework Core
- SQL Server
- JWT Authentication

### Tools
- Visual Studio
- VS Code
- Postman
- Git
- GitHub

---

## 📂 Project Structure

```
StudentManagementSystem
│
├── StudentManagementSystem      # ASP.NET Core Backend
│
└── student-management-frontend  # React Frontend
```

---

## ⚙️ Installation

### Backend

```bash
cd StudentManagementSystem
dotnet restore
dotnet ef database update
dotnet run
```

### Frontend

```bash
cd student-management-frontend
npm install
npm run dev
```

---

## 🔗 API Endpoints

### Authentication

- POST `/api/Auth/register`
- POST `/api/Auth/login`

### Students

- GET `/api/Students`
- GET `/api/Students/{id}`
- POST `/api/Students`
- PUT `/api/Students/{id}`
- DELETE `/api/Students/{id}`

---

## 📸 Screenshots

Screenshots will be added soon.

---

## 📈 Future Improvements

- Password Hashing (BCrypt)
- Role-Based Authentication
- Search Students
- Pagination
- Dashboard Analytics
- Export to Excel/PDF
- Dark Mode

---

## 👨‍💻 Author

**Jay Gaikwad**

- GitHub: https://github.com/JayGaikwad44

---

⭐ If you like this project, don't forget to star the repository!
