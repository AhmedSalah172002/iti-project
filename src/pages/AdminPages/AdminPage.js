import React from 'react'
import AdminHeader from '../../component/Admin/AdminHeader'
import AdminSidebar from '../../component/Admin/AdminSidebar'
import AddProduct from '../../component/Admin/AddProduct'

const AdminPage = () => {
  return (
    <>
<div dir='rtl'>
<AdminHeader title="لوحة التحكم" />
   
   <div className='d-flex'>
   <AdminSidebar active="add-product" />
   <AddProduct />
   </div>
</div>
      
    </>
  )
}

export default AdminPage
