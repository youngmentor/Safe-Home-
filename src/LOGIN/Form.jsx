import React, { useRef, useEffect, useState } from 'react'
import { MdRemoveRedEye } from "react-icons/md";
import { AiOutlineEyeInvisible } from "react-icons/ai";


export default function Form(props) {
  // const input = [
  //   {
  //     id: 1,
  //     placeholder: "Email",
  //     type: "email",
  //     name: "Email",
  //     err: "not a valid email",
  //     required: true
  //   },
  //   {
  //     id: 2,
  //     placeholder: "Password",
  //     type: view ? "text" : "password",
  //     name: "Password",
  //     err: "Password must include upper case ",
  //   }
  // ]

  const [focus, setFocus] = useState(false)

  const handleFocus = (e) => {
    setFocus(true)
  }
  return (
    <>
      <div style={{marginTop : props.name === "Password" ?  30: null}} className='form_input_wrap'>
        <div  className='login_input_warp'>
          <input className='login_input'
          onChange={props.onChange}
         
          placeholder={props.placeholder}
          type={props.type}
          name={props.name}
          required={props.required}
          pattern={props.pattern}
          onBlur={handleFocus}
          focused={focus.toString()}
          />
          <span className='login_err'>{props.err}</span>
        </div>
        {props.name === "Password" ? props.view ? <AiOutlineEyeInvisible fontSize={20} className='login_eye pointer' onClick={() => { props.setView(!props.view) }} /> : <MdRemoveRedEye fontSize={20} className='login_eye pointer' onClick={() => { props.setView(!props.view) }} /> : null}
      </div>

    </>
  )
}

