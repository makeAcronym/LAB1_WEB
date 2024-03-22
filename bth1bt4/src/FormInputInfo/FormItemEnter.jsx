import React from 'react'

function FormItemEnter({ labelText, setInput, inputValue }) {
  return (
    <div>
      <div class="formItemEnter">
        <label>{labelText}</label>

        <input type="text" onChange={(e) =>{setInput(e.target.value)}} value={inputValue} />
      </div>
    </div>
  )
}

export default FormItemEnter