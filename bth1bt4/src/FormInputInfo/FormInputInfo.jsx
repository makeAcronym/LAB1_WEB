import React, { useState } from 'react'
import FormItemEnter from './FormItemEnter'
import FormItemCheckBox from './FormItemCheckBox'
import Result from './Result'

const image = require('../assets/images/PenAndPaper.png')

function FormInputInfo() {
  const [studentName, setStudentName] = useState('')
  const [teacherName, setTeacherName] = useState('')
  const [className, setClassName] = useState('')
  const [day, setDay] = useState('')
  const [work, setWork] = useState('')
  const [completeInClass, setCompleteInClass] = useState(false)
  const [completeInHome, setCompleteInHome] = useState(false)

  const [studentNameInput, setStudentNameInput] = useState('')
  const [teacherNameInput, setTeacherNameInput] = useState('')
  const [classNameInput, setClassNameInput] = useState('')
  const [dayInput, setDayInput] = useState('')
  const [workInput, setWorkInput] = useState('')
  const [completeInClassInput, setCompleteInClassInput] = useState(false)
  const [completeInHomeInput, setCompleteInHomeInput] = useState(false)

  const [isSubmit, setIsSubmit] = useState(false)

  const handleSubmit = () => {
    setIsSubmit(true)

    setStudentName(studentNameInput)
    setClassName(classNameInput)
    setTeacherName(teacherNameInput)
    setDay(dayInput)
    setWork(workInput)
    setCompleteInClass(completeInClassInput)
    setCompleteInHome(completeInHomeInput)
  }

  return (
    <>
      <form action="formNhapThongTin" class="formContainer" name="formNhapThongTin" method="post">
        <h1 className='textHeader'>Theo dõi học tập</h1>

        <div style={{ padding: '8px' }}>
          <div className='enterInforContainer'>
            <div className='enterInfor'>

              <FormItemEnter setInput={setStudentNameInput} inputName={studentNameInput} labelText={'Họ tên học sinh:'} />
              <FormItemEnter setInput={setTeacherNameInput} inputName={teacherNameInput} labelText={'Giáo viên phụ trách:'} />

              <div className='classAndDayInputContainer'>
                <div className='adjustFlex' style={{ marginRight: '60px' }}>
                  <FormItemEnter setInput={setClassNameInput} inputName={classNameInput} labelText={'Lớp:'} />
                </div>

                <div className='adjustFlex'>
                  <FormItemEnter setInput={setDayInput} inputName={dayInput} labelText={'Ngày:'} />
                </div>
              </div>

              <p>Những việc phân công chưa làm:</p>
              <textarea rows={3} value={workInput} onChange={(e) => { setWorkInput(e.target.value) }} />
            </div>

            <img src={image} alt="ảnh minh họa" />
          </div>

          <p>Chọn hình thức hoàn thành</p>
          <FormItemCheckBox
            inputValue={completeInClass}
            setInput={setCompleteInClassInput}
            labelText={'Những việc chưa làm sẽ được hoàn thành ngay tại lớp'}
          />
          <FormItemCheckBox
            inputValue={completeInHome}
            setInput={setCompleteInHomeInput}
            labelText={'Sẽ hoàn thành những việc chưa làm tại nhà và nộp lại cho giáo viên vào ngày hôm sau'}

          />

          <input type="button" class="formBtn" value="Ghi nhận" onClick={handleSubmit}></input>
        </div>
      </form>

      {isSubmit && 
      <Result
        tenHS={studentName}
        lop={className}
        ngayDK={day}
        gv={teacherName}
        work={work}
        completeInClass={completeInClass}
        completeInHome={completeInHome}
      />
      }
    </>
  )
}

export default FormInputInfo