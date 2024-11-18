import { createRoot } from 'react-dom/client'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Layout from './Layout.jsx'



const router =  createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    children: [
      {
        path:"",
        element:<App/>,
      },
      {
        path:"*",
        element:<h1 className='flex justify-center items-center text-2xl text-red-600'>404 | Not Found</h1>
      }
    ]
  }
]);
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
);
