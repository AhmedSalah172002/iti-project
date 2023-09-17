import React from 'react'
import person from "../../images/images.jpg"
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux'
const AdminUsers = ({users }) => {

  const dispatch=useDispatch()

  let auth
  if(localStorage.getItem("user") !== null){
    auth = JSON.parse(localStorage.getItem("user"))
  }
//Delete Product
  const deleteUserById=(userEmail,userName)=>{
    Swal.fire({
      title: 'هل أنت متأكد ؟',
      text: `أنت علي وشك أن تقوم بحذف ${userName}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'نعم قم بالحذف',
      cancelButtonText: "الغاء",
    }).then(async(result) => {
      if (result.isConfirmed) {
        let newArr=users.filter((e)=> e.email !== userEmail )
        if(auth?.email === userEmail){
          localStorage.setItem("Accounts",JSON.stringify(newArr))
          localStorage.removeItem("user")
          Swal.fire(
            'تمت!',
            'لقد قمت بحذف المنتج',
            'success'
          ).then((result)=>{
            if (result.isConfirmed !==false){
              window.location.href="/login"
            }
          })
        }
        localStorage.setItem("Accounts",JSON.stringify(newArr))
        Swal.fire(
          'تمت!',
          'لقد قمت بحذف المنتج',
          'success'
        ).then((result)=>{
          if (result.isConfirmed !==false){
            window.location.reload()
          }
        })
        
      }
    })
  }

 
  return (
    <div dir='rtl' className="admin-users ">
    <div className="container">
    <h2 className='mb-4'>المستخدمون</h2>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">الصورة الشخصية</th>
      <th scope="col">الاسم</th>
      <th scope="col">الايميل</th>
      <th scope="col">نوع المستخدم</th>
      <th scope="col">الاعدادات</th>
    </tr>
  </thead>
  <tbody>
   {
    users ? users.map((e,i)=>{
      return (
        <tr key={i}>
        <th scope="row">{i+1}</th>
        <td><img style={{width:"50px"}} src={person} alt="img"  /></td>
        <td>{e.name || "لايوجد"}</td>
        <td>{e.email || "لايوجد"}</td>
        <td>{e.role || "لايوجد"}</td>
        <td>
          <button onClick={()=>deleteUserById(e.email , e.name)} className='del'>حذف</button>
        </td>
      </tr>
      )
    }): <h1>لايوجد مستخدمين</h1>
   }
  </tbody>
</table>
    </div>
   </div>
  )
}

export default AdminUsers
