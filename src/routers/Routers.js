
import { Route, Routes, Navigate } from "react-router-dom"
import Home from '../pages/Home'
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import ProductDetails from "../pages/ProductDetails";
import Shop from "../pages/Shop";
import Signup from "../pages/Signup";
import ProtectedRoute from "./ProtectedRoute";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to='home' />} />
      <Route path='home' element={<Home />} />
      <Route path='shop' element={<Shop />} />
      <Route path='cart' element={<Cart />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
      <Route path='shop/:id' element={<ProductDetails />} />
      <Route path='checkout' element={
        // <ProtectedRoute>
          <Checkout />
        // </ProtectedRoute>
      } />
    </Routes>
  )
}

export default Routers
