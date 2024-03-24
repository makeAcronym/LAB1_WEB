import './App.css';
import React, { useState } from 'react';
function App() {
  const [hk1, setHk1] = useState();
  const [hk2, setHk2] = useState();
  const [tb, setTb] = useState();
  const [ketqua, setKetqua] = useState();
  const [xepLoai, setXepLoai] = useState();
  const Cal = () => {
    let diemhk1 = parseInt(hk1,10);
    let diemhk2 = parseInt(hk2,10);
    let diemtb = (diemhk1 + diemhk2)/2
    setTb(diemtb);
    
    setKetqua((diemtb >= 5) ? "Được lên lớp" : "Ở lại lớp") 
    if (diemtb >= 8) setXepLoai("Giỏi")
    else if (diemtb < 8 && diemtb > 6.5) setXepLoai("Khá")
    else if (diemtb < 6.5 && diemtb >= 5) setXepLoai("Trung bình")
    else setXepLoai("Yếu")
  }
  return (
    <div className="App">
      <h2>Kết quả học tập</h2>
      <div className="all">
        <form>
          <div className="info">
            <p>Điểm HK1: </p>
            <input
              type="text"
              value={hk1}
              onChange={(e) => setHk1(e.target.value)}
            />
          </div>
          <div className="info">
            <p>Điểm HK2: </p>
            <input
              type="text"
              value={hk2}
              onChange={(e) => setHk2(e.target.value)}
            />
          </div>
          <div className="info">
            <p>Điểm trung bình:</p>
            <input
              type="text"
              value={tb}
              disabled
            />
          </div>
          <div className="info">
            <p>Kết quả:</p>
            <input
              type="text"
              value={ketqua}
              disabled
            />
          </div>
          <div className="info">
            <p>Xếp loại học lực:</p>
            <input
              type="text"
              value={xepLoai}
              disabled
            />
          </div>
        </form>
        <button onClick={() => Cal()}>Xem kết quả</button>
      </div>
    </div>
  );
}

export default App;
