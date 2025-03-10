import React, { useState } from 'react';

const AttendanceList = ({ onNavigate }) => {
  const [students] = useState([
    { id: '65000001', name: 'นาย ณัฐวุฒิ สิงขุนล', present: false, absent: false },
    { id: '65000002', name: 'นาย ธนภัทร ศิริเทพ', present: false, absent: false },
    { id: '65000003', name: 'นาย สราวุฒิ เพิชรพหุมนาตร์', present: false, absent: false },
    { id: '65000004', name: 'นาย ชญานนท์ ตันธนสข', present: false, absent: false },
    { id: '65000005', name: 'นาย กฤตเมธ สิงห์ลาว', present: false, absent: false },
  ]);

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-[#131B62] p-4 flex justify-between items-center">
        <div></div>
        <button 
          className="bg-white px-4 py-2 rounded-md font-medium"
          onClick={() => onNavigate('login')}
        >
          Log out
        </button>
      </header>

      <div className="p-6">
        <h2 className="text-lg mb-4">รายละเอียดการเช็คชื่อเข้าเรียน : 25/02/2568</h2>
        
        <div className="flex items-center mb-6">
          <div className="w-16 h-16 bg-[#131B62] rounded-full mr-4 flex items-center justify-center">
            <div className="w-6 h-6 bg-white rounded-full relative">
              <div className="w-8 h-5 bg-white absolute top-6 rounded-t-full"></div>
            </div>
          </div>
          <h3 className="text-xl">อาจารย์สุรชัย ทองแก้ว</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border p-2 text-left">รหัสนักศึกษา</th>
                <th className="border p-2 text-left">ชื่อ - นามสกุล</th>
                <th className="border p-2 text-center">เข้าเรียน</th>
                <th className="border p-2 text-center">ขาดเรียน</th>
              </tr>
            </thead>
            <tbody>
              {students.map(student => (
                <tr key={student.id}>
                  <td className="border p-2">{student.id}</td>
                  <td className="border p-2">{student.name}</td>
                  <td className="border p-2 text-center">
                    <div className="flex justify-center">
                      <div className="w-6 h-5 border-2 border-gray-300 rounded-full"></div>
                    </div>
                  </td>
                  <td className="border p-2 text-center">
                    <div className="flex justify-center">
                      <div className="w-6 h-6 border-2 border-gray-300 rounded-full"></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-end mt-6">
          <button 
            className="bg-green-500 text-white px-6 py-3 rounded-md"
            onClick={() => onNavigate('scan')}
          >
            เสร็จสิ้น
          </button>
        </div>
      </div>
    </div>
  );
};

export default AttendanceList;