import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import notify from '../useNotifaction';
import { useEffect } from 'react';

const SignupHook = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('admin')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(true)

    const onChangeName = (e) => {
        setName(e.target.value)
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const onChangeRole = (e) => {
        setRole(e.target.value)
    }
  
    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const onChangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }

 
    
    //save data
    const OnSubmit = async () => {
        if(email==="" ||password===""||name==="" || password !==confirmPassword){
            notify("هناك خطأ ", "error")
            return false ;
        }
        setLoading(true)
        const newAccount = {
            name,
            email,
            password,
            role,
           
        }
        const existingAccounts = JSON.parse(localStorage.getItem("Accounts")) || [];
        let checkEmail=existingAccounts.find((e)=> e.email===newAccount.email)
    
        if(checkEmail){
            notify("الايميل موجود بالفعل", "error")
            return false;
        }
    
    
        existingAccounts.push(newAccount);
    
        localStorage.setItem("Accounts", JSON.stringify(existingAccounts));
    
        notify("تم تسجيل الحساب بنجاح", "success")
        setLoading(false)
    }

    useEffect(() => {
        if (loading === false) {
                   
                    setTimeout(() => {
                        navigate('/login')
                    }, 2000);
                }

              
    }, [loading])

    return [name, email, role, password, confirmPassword, loading, onChangeName, onChangeEmail, onChangeRole, onChangePassword, onChangeConfirmPassword, OnSubmit]
}

export default SignupHook
