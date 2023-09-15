import React from 'react'
import AdminHeader from '../../component/Admin/AdminHeader'
import AdminSidebar from '../../component/Admin/AdminSidebar'
import AdminProducts from '../../component/Admin/AdminProducts'
import GetAllProducts from '../../hook/products/GetAllProducts'

const AdminProductsPage = () => {
  const [items,sortType, setSortType ,search, setSearch,priceFilter , setPriceFilter ,filterButton, setFilterButton,onPress,pageCount,results]=GetAllProducts(8)

  return (
   <>
  <div dir='rtl'>
  <AdminHeader title="لوحة التحكم" />
   
   <div className='d-flex'>
   <AdminSidebar active="products" />
   <AdminProducts items={items} pageCount={pageCount} onPress={onPress} />
   </div>
  </div>
   </>
  )
}

export default AdminProductsPage
