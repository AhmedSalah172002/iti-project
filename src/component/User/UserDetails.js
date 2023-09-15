import React from 'react'
import icon from "../../images/User-Account-Person-PNG-File.png"
import { ToastContainer } from 'react-toastify'


const UserDetails = () => {
    let auth
  if(localStorage.getItem("user") !== null){
    auth = JSON.parse(localStorage.getItem("user"))
  }
   
  return (
<>
<div dir='rtl' className="userDetails mt-5 mb-5">
    <div className="container">
        <h1 style={{color:"#fd9d3e"}} className='mb-3'>الصفحة الشخصية</h1>
      
        <div className="row">
            <div className="col-lg-8 col-md-12">
                <div className="user-details mb-5">
                    <div className="personal-details mb-5 d-flex align-items-center">
                        <div className="personal-image ms-3">
                            <img src={ icon} alt="icon" />
                        </div>
                        <div className="personal-text">
                            <h3>{auth.name}</h3>
                
                          <p> انضم منذ 5أيام</p>
                        </div> 
                    </div> 

                 </div> 
            </div>
        </div>
                  
     </div>
    <ToastContainer />
</div>
</>
  )
}

export default UserDetails
