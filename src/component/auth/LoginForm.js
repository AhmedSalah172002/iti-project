import React from 'react'
import logo from "../../images/header-logo.png"
import { Link } from 'react-router-dom'
import LoginHook from '../../hook/auth/LoginHook'
import { ToastContainer } from 'react-toastify'

const LoginForm = () => {
  const [email, password, loading, onChangeEmail, onChangePassword, onSubmit]=LoginHook()
  return (
  <div dir='rtl' className="login-form mt-5 mb-5 ">
    <div className="container">
        <div className="form">
            <div className="form-image mb-5">
            <img src={logo} className='img-fluid'  />
            </div>
            <div className="email mb-4 d-flex flex-column align-items-start">
                <label className='mb-3' htmlFor="email">البريد الالكتروني :</label>
               <input onChange={(e)=>onChangeEmail(e)} value={email} placeholder='البريد الالكتروني' type="email" name="email" id="email" />
            </div>
            <div className="password mb-4 d-flex flex-column align-items-start">
                <label className='mb-3' htmlFor="password">كلمة المرور :</label>
               <input onChange={(e)=>onChangePassword(e)} value={password} placeholder='كلمة المرور' type="password" name="password" id="password" />
            </div>
            <div className="form-btn mt-2 mb-3">
                <button onClick={()=>onSubmit()}>تسجيل الدخول</button>
            </div>
            <Link className='mt-2 create-new' to="/signup">إنشاء حساب جديد</Link>
        </div>
    </div>
    <ToastContainer />
  </div>
  )
}

export default LoginForm
