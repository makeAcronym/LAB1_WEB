import React from 'react'

function FormItem({labelText, inputName,readOnly, handleInput, inputValue}) {
  return (
    <div>
        <div class="formItem">
            <label>{labelText}</label>
            <input type="text" readOnly={readOnly} name={inputName} onChange={handleInput} value={inputValue}/>
        </div>
    </div>
  )
}

export default FormItem