import React from 'react'

import { Link } from 'react-router-dom'
import addProduct from "../../images/5333018.png"
import Products from "../../images/products.png"
import addUser from "../../images/add-user.png"
import users from "../../images/users.png"
import addCoupon from "../../images/add-coupon.png"
import coupon from "../../images/coupon.png"
import orders from "../../images/orders.png"
const AdminSidebar = ({active}) => {
  return (
<div className=" admin-sidebar d-flex flex-column">


<Link to="/admin/add-product" >
<div style={active ==="add-product"?{color:"#3874ff",borderBottom:"2px solid #3874ff"}:null} className="admin-fea pb-2  d-flex align-items-center ">
 <img src={addProduct} alt="addProduct" style={{width:"50px"}} />
 <h6 className='me-2'>إضافة منتج  </h6>
 </div>
</Link>

<Link to="/admin/products" >
<div style={active ==="products"?{color:"#3874ff",borderBottom:"2px solid #3874ff"}:null} className="admin-fea pb-2 d-flex align-items-center ">
<img src={Products} alt="addProduct" style={{width:"50px"}} />
 <h6 className='me-2'>المنتجات </h6>
 </div>
</Link>






 
</div>
  
  )
}

export default AdminSidebar
