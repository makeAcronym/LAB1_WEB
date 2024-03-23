import React, { useState } from "react";
import "./Form4.css";

export default function Form4() {

    const [Hoten, setHoten] = useState('');
    const [Gv, setGv] = useState('');
    const [Lop, setLop] = useState('');
    const [Ngay, setNgay] = useState('');
    const [ViecChuaLam, setViec] = useState('');
    const [TrenLop, setTrenLop]= useState(false);
    const [TaiNha, setTaiNha]= useState(false);
    const Save =()=> {
            setSave(true);
    }
    const [save, setSave] = useState(false);
  return (
  <div className="container">
  <h1>Theo dõi học tập</h1>
    <div style={{flexDirection:"row"}}>
      
      <div>
        <div className="input-container">
          <p>Họ tên học sinh:</p>
          <input type="text" name="Hoten" value={Hoten} onChange={(e)=> setHoten(e.target.value)} />
        </div>
        <div className="input-container">
          <p>Giáo viên phụ trách:</p>
          <input type="text" name="Hoten" value={Gv} onChange={(e)=>setGv(e.target.value)} />
        </div>
        <div className="input-class-container">
            <p>Lớp:</p>
            <input type="text" name="Hoten" value={Lop} onChange={(e)=>setLop(e.target.value)}/>
            <p>Ngày:</p>
            <input type="text" name="Hoten" value={Ngay} onChange={(e)=>setNgay(e.target.value)}/>
        </div>

        <div className="undone-conainer">
          <p>Những việc phân công chưa làm</p>
          <textarea type="text" name="Hoten" rows={2} value={ViecChuaLam} onChange={(e)=>setViec(e.target.value)}/>
          <p> Chọn hình thức hoàn thành</p>
        <div>
          <input
            type="checkbox"
            checked={TrenLop}
            onChange={() => setTrenLop(!TrenLop)}
          />
          <label htmlFor="checkbox">
            Những việc chưa làm sẽ được hoàn thành ngay tại lớp
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            checked={TaiNha}
            onChange={() => setTaiNha(!TaiNha)}
          />
          <label htmlFor="checkbox">
            Sẽ hoàn thành những việc chưa làm tại nhà và nộp lại cho giáo viên
            vào ngày hôm sau
          </label>
        </div>
        </div>

        
      </div>
      <div>
       <button onClick={Save}>Ghi nhận</button>
      </div>
{
    save&&
        (<div className="Phieu-container">
            <p>
                Học sinh: {Hoten} - Lớp: {Lop}
            </p>
            <p>
                Ngày đăng ký: {Ngay} -Giáo viên phụ trách: {Gv}
                </p>
                <p>
                Những công việc đã được phân công nhưng chưa hoàn thành: {ViecChuaLam}
            </p>
            <p>
                Cam kết sẽ hoàn thành tại : {TaiNha? "Tại nhà":"-"} {TrenLop? "Trên lớp" :""}
            </p>
            </div>
            )

    
}
      
    </div>
    </div>
  );
}
