import React,{useState} from 'react'
import FormItem from './FormItem'

function FormTinhDiem() {
    const [diemHK1, setDiemHK1] = useState(-1)
    const [diemHK2, setDiemHK2] = useState(-1)
    const [diemTB, setDiemTB] = useState(-1)
    const [ketQua, setKetQua] = useState('')
    const [xepLoai, setXepLoai] = useState('')
    
    function handleBtnClick(){        
        if(diemHK1>=0&&diemHK1<=10&&diemHK2>=0&&diemHK2<=10){
            let dtb =JSON.parse(((JSON.parse(diemHK1) + JSON.parse(diemHK2)*2)/3).toFixed(2));
            setDiemTB(dtb)
            setKetQua(dtb>=5?'Được lên lớp':'Ở lại lớp')
            setXepLoai(
                dtb>=8?'Giỏi'
                :
                dtb>6.5?'Khá'
                :
                dtb>5?'Trung bình':'Yếu'
            )
        }
        else{
            alert('Vui lòng nhập đúng số điểm')
        }
    }
  
    return (
    <div>
        <form action="formTinhDiem" class="formContainer" name="formTinhDiem" method="post">
            <h4 className="headerText">kết quả học tập</h4>

            <FormItem
                labelText={'Điểm HK1:'}
                inputName={'diemHK1'}
                handleInput={(e) => {
                    setDiemHK1(e.target.value)
                }}
            />

            <FormItem
                labelText={'Điểm HK2:'}
                inputName={'diemHK2'}
                handleInput={(e) => {
                    setDiemHK2(e.target.value)
                }}
            />

            <FormItem
                labelText={'Điểm trung bình:'}
                inputName={'diemTB'}
                readOnly
                inputValue={diemTB<0?null:diemTB}
            />

            <FormItem
                labelText={'Kết quả:'}
                inputName={'ketQua'}
                readOnly
                inputValue={ketQua}
            />

            <FormItem
                labelText={'Xếp loại học lực:'}
                inputName={'xepLoai'}
                readOnly
                inputValue={xepLoai}
            />            

            <input type="button" class="formBtn" value="Xem kết quả" onClick={handleBtnClick}></input>
        </form>
    </div>
  )
}

export default FormTinhDiem