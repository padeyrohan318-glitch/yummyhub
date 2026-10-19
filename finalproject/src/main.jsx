import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import {createBrowserRouter, Link, RouterProvider} from 'react-router-dom'
// import Login from './component/Login.jsx';
// import Home from './Home.jsx';

// const router=createBrowserRouter([
//   {
//     path:"/",
//     element:(
//       <Home />
//     )
//   },
//   {
//     path:"login.jsx",
//     element:(
//       <Login />
//     )
//   },
// ]
// )

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition: Bounce
/>

<ToastContainer />
  </StrictMode>,
)
