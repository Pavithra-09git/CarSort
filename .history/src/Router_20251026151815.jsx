import React from 'react'
import { createBrowserRouter, } from 'react-router-dom'



const router = createBrowserRouter[ {
path:"/",
element:<App/>,
children:[{
    index:true,
    element:<Home/>
},
{
    path:"shop/{}"
}]
 
}]

export default router
