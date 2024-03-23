import React, { useState } from "react";
const Form = () => {
  const [diemHK1, setDiemHK1] = useState(0);
  const [diemHK2, setDiemHK2] = useState(0);
  const [diemTB, setDiemTB] = useState();
  const [ketQua, setKetQua] = useState("");
  const [xepLoai, setXepLoai] = useState("");

  const handleSubmitBtn = () => {
    let diem1 = parseFloat(diemHK1);
    let diem2 = parseFloat(diemHK2);

      if (diem1 < 0 || diem2 < 0 || diem1 > 10 || diem2 > 10) {
      alert('Hãy nhập số từ 0-10')
    }
  
    else {
      let diem = (diem1 + diem2 * 2) / 3; 

      setDiemTB(diem.toFixed(1));
      setKetQua(diem >= 5 ? 'Được lên lớp' : 'Ở lại lớp');
      setXepLoai(
        diem >= 8 ? 'Giỏi' : diem > 6.5 ? 'Khá' : diem >= 5 ? 'Trung bình' : 'Yếu'
      )
    }
  }

    return (
      <div className="Container">
        <form action="form tinh ket qua hoc tap" method="post">

          <h1 class="title">KẾT QUẢ HỌC TẬP</h1>
            <div class="field">
                <p>Điểm HK1</p>
                <input type="number" 
                step="0.5" 
                value={diemHK1} 
                onChange={(e) => setDiemHK1(parseFloat(e.target.value))}/>
            </div>
            <div class="field">
                <p>Điểm HK2</p>
                <input type="number" 
                step="0.5" 
                value={diemHK2}
                onChange={(e) => setDiemHK2(parseFloat(e.target.value))} />
            </div>
            <div class="field">
                <p>Điểm trung bình:</p>
                <input type="number" 
                value={diemTB}
                disabled />
            </div>
            <div class="field">
                <p>Kết quả:</p>
                <input type="text" 
                value={ketQua}
                disabled />
            </div>
            <div class="field">
                <p>Xếp loại học lực:</p>
                <input type="text" 
                value={xepLoai}
                disabled />
            </div>

          <input class="submitBtn" 
          type="button" 
          value="Xem kết quả" 
          onClick={handleSubmitBtn}>
          </input>
        </form>
      </div>
    );
  };

  export default Form;