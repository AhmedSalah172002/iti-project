import React from 'react'
import AuthHeader from '../../component/auth/AuthHeader'
import SignupForm from '../../component/auth/SignupForm'

const SignupPage = () => {
  return (
    <>
    <AuthHeader title="إنشاء حساب جديد"/>
    <SignupForm />
    </>
  )
}

export default SignupPage
