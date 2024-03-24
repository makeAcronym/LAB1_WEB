import { useState } from 'react';
import './App.css';

function App() {
  const [student, setStudent] = useState("")
  const [teacher, setTeacher] = useState("")
  const [class_name, setClassname] = useState("")
  const [date, setDate] = useState("")
  const [task, setTask] = useState("")
  const [isClicked, setIsClicked] = useState(false)
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [commit, setCommit] = useState("");
  const isDateValid = (dateStr) => {
    var dateFormat = /^(1[0-2]|0?[1-9])\/(3[01]|[12][0-9]|0?[1-9])\/(?:[0-9]{2})?[0-9]{2}$/;
    return dateFormat.test(dateStr)
  }
  const displayForm = () => {
    if (isDateValid(date) && student !== "" && teacher !== "" && class_name !== ""){
      setIsClicked(true)
      if (isChecked1 && isChecked2 === false){
        setCommit("Tại lớp")
      } else if (isChecked2 && isChecked1 === false){
        setCommit("Tại nhà")
      } else setCommit("Tại lớp - Tại nhà")
    }
  }
  return (
    <div className="App">
      <h2>THEO DÕI HỌC TẬP</h2>
      <div className='form'>
        <div className='part1'>
          <div className='inputPart1'>
            <div className='studentName'>
              <label>Họ tên học sinh: </label>
              <input 
                type='text' 
                placeholder='Họ tên học sinh' 
                value={student} 
                onChange={(e) => setStudent(e.target.value)}/>
            </div>
            <div className='teacherName'>
              <label>Giáo viên phụ trách: </label>
              <input 
                type='text' 
                placeholder='Họ tên giáo viên' 
                value={teacher} 
                onChange={(e) => setTeacher(e.target.value)}/>
            </div>
            <div className='class_date'>
              <div className='class'>
                <label>Lớp: </label>
                <input 
                  type='text' 
                  placeholder='00hc10' 
                  value={class_name} 
                  onChange={(e) => setClassname(e.target.value)}/>
              </div>
              <div className='date'>
                <label>Ngày: </label>
                <input 
                  type='text' 
                  placeholder='2/3/2024' 
                  value={date} 
                  onChange={(e) => setDate(e.target.value)}/>
              </div>
            </div>
            <div className='taskUndo'>
              <label className='textarea'>Những việc phân công chưa làm:</label>
              <textarea
                value={task}
                onChange={(e) => setTask(e.target.value)}
                />
            </div>
          </div>
          <img src='https://img.lovepik.com/free-png/20210919/lovepik-book-pencil-png-image_400484808_wh1200.png' alt='hinh_sach'/>
        </div>

        <div className='part2'>
          <p>Chọn hình thức hoàn thành</p>
          <input 
            type='checkbox'
            checked={isChecked1}
            onChange={() => setIsChecked1(!isChecked1)}
            /> 
          <span>Những việc chưa làm sẽ được hoàn thành ngay tại lớp </span> <br/>
          <input 
            type='checkbox'
            checked={isChecked2}
            onChange={() => setIsChecked2(!isChecked2)}
            /> 
          <span>Sẽ hoàn thành những việc chưa làm tại nhà và nộp lại cho giáo viên vào ngày hôm sau</span>
        </div>

        <button onClick={() => displayForm()}>Ghi nhận</button>
      </div>

      {isClicked === true && 
        <div className='resForm'>
          <h3>Thông tin phiếu theo dõi</h3>
          <div className='info'>
            <p>Tên học sinh: {student} - Lớp: {class_name}</p>
            <p>Ngày đăng ký: {date} - Giáo viên phụ trách: {teacher}</p>
            <p>Những công việc đã được phân công nhưng chưa hoàn thành:</p>
            <p>{task}</p>
            <p>Cam kết sẽ hoàn thành tại: {commit}</p>
          </div>
        </div>
      }
    </div>
  );
}

export default App;
