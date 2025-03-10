import React, { useState } from 'react';

const ScanPage = ({ onNavigate }) => {
  const [studentName, setStudentName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the attendance data
    console.log({ studentName, studentId, date, time });
  };

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
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <div className="border-4 border-navy-900 rounded-lg overflow-hidden">
              <div className="h-64 bg-white flex items-end justify-center">
                <div className="bg-[#3754ED] w-full py-4 text-center">
                  <span className="text-white text-2xl font-serif">SCAN ME</span>
                </div>
              </div>
            </div>
            <div className="mt-2 text-center">
              <button className="inline-flex items-center">
                <span className="border-2 border-green-500 p-1 mr-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                  </svg>
                </span>
                <span className="text-lg">แสกนใบหน้า</span>
              </button>
            </div>
          </div>

          <div className="flex-1">
            <div className="border-4 border-blue-900 rounded-lg p-6">
              <h3 className="text-xl mb-4">ข้อมูลนักศึกษา</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input
                    type="text"
                    className="w-full p-3 border rounded"
                    placeholder="ชื่อ - นามสกุล :"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                  />
                </div>
                
                <div className="mb-4">
                  <input
                    type="text"
                    className="w-full p-3 border rounded"
                    placeholder="รหัสนักศึกษา :"
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                  />
                </div>
                
                <div className="mb-4">
                  <input
                    type="text"
                    className="w-full p-3 border rounded"
                    placeholder="วันที่ :"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                
                <div className="mb-4">
                  <input
                    type="text"
                    className="w-full p-3 border rounded"
                    placeholder="เวลา :"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        
        <div className="flex justify-end mt-6">
          <button 
            className="bg-green-500 text-white px-6 py-3 rounded-md"
            onClick={() => onNavigate('attendance')}
          >
            เสร็จสิ้น
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScanPage;