import {
  BrowserRouter ,
  Routes,
  Route,
} from "react-router-dom";
import  Navbar  from '../src/component/utils/Navbar';
import Footer from "./component/utils/Footer";
import LoginPage from "./pages/authPages/LoginPage";
import SignupPage from "./pages/authPages/SignupPage";
import HomePage from './pages/HomePage';
import AdminPage from "./pages/AdminPages/AdminPage";
import AdminProductsPage from "./pages/AdminPages/AdminProductsPage";

import AdminEditProductPage from "./pages/AdminPages/AdminEditProductPage";
import ProductsPage from "./pages/ProductsPages/ProductsPage";
import ProductDetails from "./pages/ProductsPages/ProductDetailsPage";
import CartPage from "./pages/CartPage/CartPage";

import ProtectedRouteHook from "./hook/auth/ProtectedRouteHook";
import ProtectedRoute from "./component/utils/ProtectedRoute";
import UserProfilePage from "./pages/userPage/UserProfilePage";

function App() {
  const [isUser, isAdmin, userData] = ProtectedRouteHook()

  return (
    <>
    <BrowserRouter>
   <Navbar />
    <Routes>


      <Route path="/" element={<HomePage /> } />
       <Route path="products" element={<ProductsPage /> } />
      <Route path="products/:ProductId" element={<ProductDetails />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignupPage />} />
    


       <Route element={<ProtectedRoute auth={isUser} />}>
            <Route path="Myprofile" element={<UserProfilePage />} />          
            <Route path="cart" element={<CartPage />} />
          </Route> 

  



      <Route element={<ProtectedRoute auth={isAdmin} />}>
          <Route path="admin/add-product" element={<AdminPage/>} />
          <Route path="admin/products" element={<AdminProductsPage/>} />
          <Route path="products/edit/:ProductId" element={<AdminEditProductPage  />} />
        </Route> 
          
          


    </Routes>
   <Footer />
   </BrowserRouter>
    
    </>
  );
}

export default App;
