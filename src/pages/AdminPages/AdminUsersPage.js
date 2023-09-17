import React from 'react'
import AdminHeader from '../../component/Admin/AdminHeader'
import AdminSidebar from '../../component/Admin/AdminSidebar'
import AdminUsers from '../../component/Admin/AdminUsers'

const AdminUsersPage = () => {
  let users
  if(localStorage.getItem("Accounts") !== null){
    users =JSON.parse(localStorage.getItem("Accounts"))
  }
  return (
    <>
   <div dir='rtl'>
   <AdminHeader title="لوحة التحكم" />
   
   <div className='d-flex'>
   <AdminSidebar active="users" />
   <AdminUsers users={users} />
   </div>
   </div>
   </>
  )
}

export default AdminUsersPage
