import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../images/header-logo.png"
import SignupHook from '../../hook/auth/SignupHook'
import { ToastContainer } from 'react-toastify';

const SignupForm = () => {
    const  [name, email, role, password, confirmPassword, loading, onChangeName, onChangeEmail, onChangeRole, onChangePassword, onChangeConfirmPassword, OnSubmit]
    = SignupHook()
  return (
    <div dir='rtl' className="login-form mt-5 mb-5">
    <div className="container">
        <div className="form">
            <div className="form-image mb-5">
            <img src={logo} className='img-fluid'  />
            </div>
            <div className="username mb-4 d-flex flex-column align-items-start">
                <label className='mb-3' htmlFor="username">اسم المستخدم</label>
               <input onChange={(e)=>onChangeName(e)} placeholder='اسم المستخدم' value={name} type="text" name="username" id="username" />
            </div>
            <div className="email mb-4 d-flex flex-column align-items-start">
                <label className='mb-3' htmlFor="email">البريد الالكتروني :</label>
               <input onChange={(e)=>onChangeEmail(e)} value={email} placeholder='البريد الالكتروني' type="email" name="email" id="email" />
            </div>
            <div className="phone mb-4 d-flex flex-column align-items-start">
                <label className='mb-3' htmlFor="phone">الدور</label>
                <select name="" id="" onChange={(e)=>onChangeRole(e)}>
                    <option selected value="admin">أدمن</option>
                    <option value="user">مستخدم</option>
                </select>
               
            </div>
            <div className="password mb-4 d-flex flex-column align-items-start">
                <label className='mb-3' htmlFor="password">كلمة المرور :</label>
               <input onChange={(e)=>onChangePassword(e)} value={password} placeholder='كلمة المرور' type="password" name="password" id="password" />
            </div>
            <div className="passwordConfirm mb-4 d-flex flex-column align-items-start">
                <label className='mb-3' htmlFor="passwordConfirm">تأكيد كلمة المرور :</label>
               <input onChange={(e)=>onChangeConfirmPassword(e)} value={confirmPassword} placeholder='تأكيد كلمة المرور' type="password" name="passwordConfirm" id="passwordConfirm" />
            </div>
            <div className="form-btn mt-2 mb-3">
                <button onClick={()=>OnSubmit()}>تسجيل الدخول</button>
            </div>
            <Link className='mt-2 create-new' to="/login">لديك حساب بالفعل</Link>
        </div>
    </div>
    <ToastContainer />
  </div>
  )
}

export default SignupForm
