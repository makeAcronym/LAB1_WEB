import React from 'react'

function Result({tenHS, lop, ngayDK, gv, work, completeInClass,completeInHome}) {
  return (
    <div className='resultContainer'>
        <h1>Thông tin phiếu theo dõi</h1>
        {console.log(tenHS)}
        <p className='nameAndClass'>Tên học sinh: {tenHS} - Lớp: {lop}</p>
        <p className='dayAndTeacher'>Ngày đăng ký: {ngayDK} - Giáo viên phụ trách: {gv}</p>
        <p className='work'>Những công việc đã được phân công nhưng chưa hoàn thành:</p>
        <p>{work}</p>
        <p className='commitment'>Cam kết sẽ hoàn thành tại: {completeInClass&&'Tại lớp'} {completeInClass&&completeInHome&&'- '} {completeInHome&&' Tại nhà'}</p>
    </div>
  )
}

export default Result