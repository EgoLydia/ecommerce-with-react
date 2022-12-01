// import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { Home } from "./pages/Home/Home"
import { Product } from "./pages/Product/Product"
import { Products } from "./pages/Products/Products"
import './index.scss'

const Layout = () => {
  return (
    <div className='app'>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/products/:id',
        element: <Products />
      },
      {
        path: '/product/:id',
        element: <Product />
      }
    ]
  },

])
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
