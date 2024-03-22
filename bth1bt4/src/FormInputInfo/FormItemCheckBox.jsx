import React from 'react'

function FormItemCheckBox({ labelText, setInput, inputValue}) {
    return (
        <div>
            <div class="formItemCheckbox">
                <input type="checkbox" onChange={() =>{setInput(!inputValue)}} value={inputValue} />
                <label>{labelText}</label>
            </div>
        </div>
    )
}

export default FormItemCheckBox