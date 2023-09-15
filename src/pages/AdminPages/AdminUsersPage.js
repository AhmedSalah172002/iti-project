import React from 'react'
import AdminHeader from '../../component/Admin/AdminHeader'
import AdminSidebar from '../../component/Admin/AdminSidebar'
import AdminUsers from '../../component/Admin/AdminUsers'
import GetUsersHook from '../../hook/admin/GetUsersHook'

const AdminUsersPage = () => {
  const [users ,pageCount ,onPress] =GetUsersHook(8)
  return (
    <>
   <div dir='rtl'>
   <AdminHeader title="لوحة التحكم" />
   
   <div className='d-flex'>
   <AdminSidebar active="users" />
   <AdminUsers users={users} pageCount={pageCount} onPress={onPress} />
   </div>
   </div>
   </>
  )
}

export default AdminUsersPage
