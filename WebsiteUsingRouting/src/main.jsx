import React, { createElement } from 'react'
import ReactDOM from 'react-dom/client' 
import './index.css'
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/ContactUs/ContactUs.jsx'
import GitHub from './components/GitHub/GitHub.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       }, 
//       {
//         path: "/about",
//         element: <About/>
//       },
//       {
//         path: "/contactUs",
//         element: <Contact/>
//       }

//     ]
//   }
// ])-

 const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>} >
        <Route path='about' element={<About/>} />
        <Route path='' element={<Home/>}/>
        <Route path='contactUs' element={<Contact/>} />
        <Route path='github' element={<GitHub/>} />
    </Route>
    )
 )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
