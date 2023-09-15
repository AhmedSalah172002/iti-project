import React from 'react'
import GetAllProducts from '../../hook/products/GetAllProducts'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux'
import { deleteProducts } from '../../redux/actions/productsAction'

const AdminProducts = ({items}) => {
  const dispatch=useDispatch()


//Delete Product
  const deleteProductById=(productId,productName)=>{
    Swal.fire({
      title: 'هل أنت متأكد ؟',
      text: `أنت علي وشك أن تقوم بحذف ${productName}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'نعم قم بالحذف',
      cancelButtonText: "الغاء",
    }).then(async(result) => {
      if (result.isConfirmed) {
       await dispatch(deleteProducts(productId))
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
    <div dir='rtl' className="admin-products ">
    <div className="container">
    <h2 className='mb-4'>المنتجات</h2>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">صورة المنتج</th>
      <th scope="col">اسم المنتج</th>
      <th scope="col">وصف المنتج</th>
      <th scope="col">سعر المنتج</th>
      <th scope="col">تقييمات المنتج</th>
      <th scope="col">الاعدادات</th>
    </tr>
  </thead>
  <tbody>
   {
    items ? items.map((product,i)=>{
      return(
        <tr key={i}>
        <th scope="row">{i+1}</th>
        <td>
          <Link onClick={()=>window.scrollTo({ top: 0, behavior: 'smooth' })} to={`/products/${product.id}`}>
            <img style={{width:"50px"}} src={product.image} alt="image" />
          </Link>
        </td>
        <td>{product.name}</td>
        <td>{product.description.slice(0,20)}...</td>
        <td>{product.mediumPrice}</td>
        <td>{product.ratingsAverage || 4.3}</td>
        <td>
          <button onClick={()=>deleteProductById(product.id,product.name)} className='del'>حذف</button>
          <Link onClick={()=>window.scrollTo({ top: 0, behavior: 'smooth' })} to={`/products/edit/${product.id}`} className='edit'>تعديل</Link>
        </td>
      </tr>
      )
    }) :null
     }
  </tbody>
</table>
    </div>
   </div>
  )
}

export default AdminProducts
