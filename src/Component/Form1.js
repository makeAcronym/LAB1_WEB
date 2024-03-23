import "../Style.css";
import React, { useState } from "react";

export default function Form1() {
  
    const [diemTB1, setDiemTB1] = useState(0);
    const [diemTB2, setDiemTB2] = useState(0);
    const [diemTB, setDiemTB] = useState('');
    const [kQ, setKQ] = useState('');
    const [xepLoai, setXepLoai] = useState('');
  
    const handleTB1Change = (e) => {
      const { value } = e.target;
      setDiemTB1(value);
    };
    const handleTB2Change = (e) => {
      const { value } = e.target;
      setDiemTB2(value);
    };
    const handleSubmit = () => {
      setDiemTB((parseFloat(diemTB1) + parseFloat(diemTB2) * 2) / 3.0);
      if (diemTB < 5) {
        setKQ("Ở lại lớp");
        setXepLoai("Yếu");
      }
      if (diemTB >= 5 && diemTB < 6.5) {
        setKQ("Được lên lớp");
        setXepLoai("Trung bình");
      }
      if (diemTB >= 6.5 && diemTB < 8) {
        setKQ("Được lên lớp");
        setXepLoai("Khá");
      }
      if (diemTB >= 8) {
        setKQ("Được lên lớp");
        setXepLoai("Giỏi");
      }
    };
  
    return (
      <div >
        <header className="App-header">
          <div className="container">
            <form name="KetQuaHocTap" action="KetQuaHocTap">
              <div className="InputField">
                <label>Điểm HK1: </label>
                <input
                  type="text"
                  name="Diem_HK1"
                  value={diemTB1}
                  onChange={handleTB1Change}
                />
              </div>
  
              <br />
              <div className="InputField">
                <label>Điểm HK2: </label>
                <input
                  type="text"
                  name="Diem_HK2"
                  value={diemTB2}
                  onChange={handleTB2Change}
                />
              </div>
  
              <br />
              <div className="InputField">
                <label>Điểm trung bình: </label>
                <input
                  type="text"
                  name="Diem_TB"
                  value={diemTB}
                  readOnly={true}
                />
              </div>
  
              <br />
              <div className="InputField">
                <label>Kết quả: </label>
                <input type="text" name="KQ" value={kQ} readOnly={true} />
              </div>
  
              <br />
              <div className="InputField">
                <label>Xếp loại học lực: </label>
                <input
                  type="text"
                  name="XepLoai"
                  value={xepLoai}
                  readOnly={true}
                />
              </div>
  
              <br />
              <br />
              <b className="SubmitButton" onClick={handleSubmit}>
                Xem kết quả
              </b>
            </form>
          </div>
        </header>
      </div>
        );
  
}
