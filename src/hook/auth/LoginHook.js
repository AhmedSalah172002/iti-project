import React, { useState, useEffect } from 'react'
import notify from './../useNotifaction';


const LoginHook = () => {
   

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(true)
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const onSubmit = async () => {
        setLoading(true)
        const accounts = JSON.parse(localStorage.getItem("Accounts")) || [];

    const foundAccount = accounts.find(
      (account) =>
        account.email === email && account.password === password 
        );

    if (foundAccount) {
        localStorage.setItem("user", JSON.stringify(foundAccount));
        notify("تم تسجيل الدخول بنجاح", "success")
    } else {
        notify("هناك خطأ في عملية الدخول", "error")
        return false;
    }
        setLoading(false)
    }
    useEffect(() => {
        if (loading === false) {
                    setTimeout(() => {
                        window.location.href = "/"
                    }, 1500);
                }
               
    }, [loading])

    return [email, password, loading, onChangeEmail, onChangePassword, onSubmit]
}

export default LoginHook