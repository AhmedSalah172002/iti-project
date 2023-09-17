import React,{ useEffect, useState } from 'react';
import logo from "../../images/header-logo.png"
import person from "../../images/images.jpg"
import UnopDropdown from "unop-react-dropdown";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping,  faPhone } from '@fortawesome/free-solid-svg-icons'
import { Link} from 'react-router-dom';
import GetLoggedCartHook from '../../hook/cart/GetLoggedCartHook';
import Swal from 'sweetalert2';



const Navbar = () => {
  const [itemsNum, cartItems] = GetLoggedCartHook()

  let auth
  if(localStorage.getItem("user") !== null){
    auth = JSON.parse(localStorage.getItem("user"))
  }
  let users
  if(localStorage.getItem("Accounts") !== null){
    users =JSON.parse(localStorage.getItem("Accounts"))
  }
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
        
      }
    })
  }

   const [active ,setActive] =useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY >= 10){
                setActive(true)
            }else{
                setActive(false)
            }
          
        })
    }, []);
   
    const logOut=()=>{
      localStorage.removeItem("user")
      
      window.location.reload(false);
    }
    
  return (
 
    <nav dir='ltr'  className={active ? "navbar Scroll fixed-top navbar-expand-lg" : "navbar fixed-top navbar-expand-lg"}> 
     
      <div className="container">
     
    
        
        <div >
        <Link onClick={()=>window.scrollTo({ top: 0, behavior: 'smooth' })} className="navbar-brand mt-2 mt-lg-0" to="/">
          <img src={logo} className='img-fluid'  />
          </Link>
          
        </div>
        
    
        
        <div className="d-flex align-items-center">
            <div className="phone me-2">
            <FontAwesomeIcon icon={faPhone} />
            <span className='ms-1'>2425110111</span>
            </div>
         
        {
          auth?.role ==="user" ?   <Link  className="text-reset cart me-3" to="/cart">
          <FontAwesomeIcon icon={faCartShopping} />
           <span style={!itemsNum ?{display:"none"} : {display: "flex"}} className='cartItemsQuantity'>{itemsNum || 0}</span> 
          </Link>:null
        }
    
          
        
       
          <div className="dropdown">
           
            <UnopDropdown trigger={<img
                src={person}
                className="rounded-circle"
                height="25"
                alt="Black and White Portrait of a Man"
                loading="lazy"
              />}
                
                hover
              >
                {auth&& auth.role ==="admin"?  <ul>
                <li>
                <Link onClick={()=>window.scrollTo({ top: 0, behavior: 'smooth' })} style={{color:"white"}}  to="/admin/add-product">لوحة التحكم</Link>
              </li>
              <li>
                <a style={{color:"red"}} onClick={()=> logOut()}  href="/">تسجيل خروج</a>
              </li>
            </ul>:auth && auth.role ==="user" ?
            <ul>
               <li>
                <Link onClick={()=>window.scrollTo({ top: 0, behavior: 'smooth' })} style={{color:"white"}}  to="/Myprofile">الصفحة الشخصية</Link>
              </li>
              <li>
                <a  style={{color:"yellow"}} onClick={()=> deleteUserById(auth.email ,auth.name)} >ازالة الحساب</a>
              </li>
              <li>
              <a style={{color:"red"}} onClick={()=> logOut()}  href="/">تسجيل خروج</a>
              </li>
            </ul>: <ul>
              <li>
                <Link style={{color:"white",width:"100%"}}  to="/login">تسجيل دخول</Link>
              </li>
            </ul>}
               
                </UnopDropdown> 
           
            
          </div>
        </div>
      
      </div>
      
    </nav>
   
   )
}



export default Navbar
