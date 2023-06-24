// import {useEffect} from "react"
// import React, { useState } from 'react'
import Home from '../component/Home'
// import axios from "axios"

function Index() {
    // const[products,setProducts]=useState([]);
    // function fetchData(){
    //     axios.get('https://dummyjson.com/products?limit=10&skip=10&select=title,price,images,discountPercentage')
    //     .then(res=>{
    //         setProducts(res.data.products)
    //         console.log(res)
    //     }).catch(err=>{
    //         console.log(err)
    //     })
    // }
    // useEffect(()=>{
    //     fetchData()
    // },[])
  return (
    <div>
        <Home/>
        {/* <div>
          {
            products.length>0?
            products.map((value,index)=>{
                return(
                    <div key={index} className="product">
                    < id={value.id} brand={value.brand} description={value.description} title={value.title} img={value.images[0]}  price={value.price} discount={value.discountPercentage}/>
                 </div>
                )
            }):
            <h5>Products Loading...</h5>
          }
        </div> */}
    </div>
  )
}

export default Index