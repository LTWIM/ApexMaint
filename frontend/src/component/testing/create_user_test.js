import React, {useState, useCallback} from 'react'
import {registerUser} from "../../util/api_utils/admin_api_util"
const Register = () => {
  const [inputValues, updateInputValues] = useState({
    email: "",
    password:"",
    firstName: "",
    lastName: ""
  })
  const updateHandler = useCallback((e) => {
    const {name, value} = e.target
    updateInputValues({ ...inputValues, [name]: value})
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(inputValues)
  }
  return(
    <>
      <form onSubmit={e => handleSubmit(e)}>
        <input name="email" placeholder="email" onChange={updateHandler} value={inputValues.email}/>
        <input name="password" placeholder="password" onChange={updateHandler} value={inputValues.password}/>
        <input name="firstName" placeholder="First Name" onChange={updateHandler} value={inputValues.firstName}/>
        <input name="lastName" placeholder="last Name" onChange={updateHandler} value={inputValues.lastName}/>
        <input type="submit" />
      </form>
    </>
  )
}

export default Register