import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// pages
import Home from './components/home/Home'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Shop from './components/shop/Shop'
import Login from './components/Login'
import ProductDetails from './components/ProductDetails'
import Checkout from './components/Checkout'
import { CartProvider } from './context/CartContext'
import PageNotFound from './components/PageNotFound'
import OrderDetails from './components/OrderDetails'
import { UserInfoProvider } from './context/UserInfo'


const router = createBrowserRouter([
  { 
    path: '',
    element: <Home/>
  },
  {
    path: '/about',
    element: <About/>
  },
  {
    path: '/contact',
    element: <Contact/>
  },
  {
    path: '/shop',
    element: <Shop/>
  },
  {
    path: '/nolok-login',
    element: <Login/>
  },
  {
    path: '/product-details/:id',
    element: <ProductDetails/>
  },
  {
    path: '/checkout/:id',
    element: <Checkout/>
  },
  {
    path: '/order-details/:orderId',
    element: <OrderDetails/>
  },
  {
    path: '*',
    element: <PageNotFound/>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserInfoProvider>
      <CartProvider>
        <RouterProvider router={router}/>
      </CartProvider>
    </UserInfoProvider>
  </StrictMode>,
)
