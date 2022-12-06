import React from 'react'

const AppInput = (props) => {
    const {state,label,setState,type,id,placeholder,name}=props;
  return (
    <div class="mb-3 mt-3">
    <label for="DevName" class="form-label">
      {label}
    </label>
    <input
      type={type}
      class="form-control"
      id={id}
      placeholder={placeholder}
      name={name}
      onChange={(e) => setState(e.target.value)}
      value={state}
    />
  </div>
  )
}

export default AppInput