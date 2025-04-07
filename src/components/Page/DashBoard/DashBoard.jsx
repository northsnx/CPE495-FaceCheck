import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [isConnected, setIsConnected] = useState(true);
  const apiUrl = "https://your-api-endpoint.com/dashborad";
  const navigate = useNavigate();
  
  const fetchStudents = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setStudents(data);
      setIsConnected(true);
    } catch (error) {
      console.error("❌ Error fetching students:", error);
      setIsConnected(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('role');
    navigate('/login');
  };

  const checkedInCount = students.filter(student =>
    student.attendances.some(attendance => attendance.status === "present")
  ).length;

  const notCheckedInCount = students.filter(student =>
    student.attendances.every(attendance => attendance.status !== "present")
  ).length;

  // Navbar Component
  const Navbar = () => {
    return (
      <div className="bg-white h-100 p-4 text-zinc-800 w-59">
        <div className="flex items-center space-x-2 mb-10">
          <span className="icon">💻</span>
          <span className="text-xl font-bold">CPE-495</span>
        </div>
        <ul className="space-y-6">
          <li><a href="#dashboard" className="flex items-center space-x-2 hover:text-gray-400"><span className="icon">📊</span><i className="fas fa-tachometer-alt"></i><span>Dashboard</span></a></li>
          <li><a href="#notification" className="flex items-center space-x-2 hover:text-gray-400"><span className="icon">🔔 </span><i className="fas fa-notification-alt"></i><span>Notification</span></a></li>
          <li><a href="#log" className="flex items-center space-x-2 hover:text-gray-400"><span className="icon">📄</span><i className="fas fa-calendar-alt"></i><span>Log</span></a></li>
          <li><a href="#profile" className="flex items-center space-x-2 hover:text-gray-400"><span className="icon">👤</span><i className="fas fa-user"></i><span>Profile</span></a></li>
          <li><a href="#settings" className="flex items-center space-x-2 hover:text-gray-400"><span className="icon">⚙️</span><i className="fas fa-cog"></i><span>Settings</span></a></li>
        </ul>
      </div>
    );
  };

  // Topbar Component
  const Topbar = () => {
    return (
      <div className="bg-white text-black p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <button 
            className="bg-white px-4 py-2 rounded-md font-medium"
            onClick={handleLogout}
          >
            Log out
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="flex">
      {/* Navbar ด้านซ้าย */}
      <Navbar />

      {/* Content ด้านขวา */}
      <div className="flex-1 flex flex-col">
        {/* Topbar ด้านบน */}
        <Topbar />

        {/* Dashboard Content */}
        <div className="flex-1 bg-white text-black p-4 grid grid-cols-4 gap-4 min-h-screen">
          {/* กล่องแสดงรายชื่อนักศึกษา */}
          <div className="bg-white text-black rounded-lg p-4 shadow-md col-span-3">
            <h2 className="font-bold text-lg mb-2">📋 รายชื่อนักศึกษา</h2>
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2">📌 รหัสวิชา</th>
                  <th className="border border-gray-300 px-4 py-2">📌 Student ID</th>
                  <th className="border border-gray-300 px-4 py-2">👤 ชื่อ</th>
                  <th className="border border-gray-300 px-4 py-2">📅 วันที่เรียน</th>
                  <th className="border border-gray-300 px-4 py-2">⏰ เวลาเรียน</th>
                  <th className="border border-gray-300 px-4 py-2">📌 สถานะ</th>
                </tr>
              </thead>
              <tbody>
                {students.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center text-gray-500 py-4">ไม่พบข้อมูลนักศึกษา</td>
                  </tr>
                ) : (
                  students.map((student) => {
                    const timestamp = student.attendances[0]?.timestamp;
                    const date = timestamp?.split("T")[0];
                    const time = timestamp?.split("T")[1]?.split(".")[0];
                    return (
                      <tr key={student.id} className="text-center">
                        <td className="border border-gray-300 px-4 py-2">{student.attendances[0]?.status}</td>
                        <td className="border border-gray-300 px-4 py-2">{student.id}</td>
                        <td className="border border-gray-300 px-4 py-2">{student.fullName}</td>
                        <td className="border border-gray-300 px-4 py-2">{date || "-"}</td>
                        <td className="border border-gray-300 px-4 py-2">{time || "-"}</td>
                        <td className={`border border-gray-300 px-4 py-2 ${student.attendances[0]?.status === "present" ? "text-green-500" : "text-red-500"}`}>
                          {student.attendances[0]?.status === "present" ? "✅ YES" : "❌ NO"}
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

          {/* กล่องแสดงระบบ */}
          <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-300 col-span-1 flex flex-col gap-4">
            <h2 className="font-bold text-lg mb-2">🔹 ระบบ</h2>
            <div className="bg-gray-100 p-3 rounded-lg ">
              <p className="font-bold">{isConnected ? "✅ Connected" : "❌ Disconnected"}</p>
              <p>✅ เช็คชื่อแล้ว: <b>{checkedInCount}</b> คน</p>
              <p>❌ ยังไม่ได้เช็คชื่อ: <b>{notCheckedInCount}</b> คน</p>
            </div>

            <div className="bg-gray-100 p-3 rounded-lg ">
              <h3 className="font-bold">🛠 ฟังก์ชันเพิ่มเติม</h3>
              <button
                onClick={fetchStudents}
                className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 hover:bg-blue-600 transition"
              >
                รีเฟรชข้อมูล
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;