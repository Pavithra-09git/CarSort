import React from 'react'
import { createBrowserRouter, } from 'react-router-dom'
import Card from './assets/Component/Card'



const router = createBrowserRouter[ {
path:"/",
element:<App/>,
children:[{
    index:true,
    element:<Home/>
},
{
    path:"shop/cardId",
    element:<Card/>,
}]
 
}]

export default router
