import React from 'react'
import {useState} from 'react'
import {useEffect} from 'react'
import axios from "axios"
import Mshirt from './Mshirt';

function Mshirts() {
    const [products,setProducts]=useState([]);
    function fetchData(){
      axios.get('https://dummyjson.com/products/category/mens-shirts')
      .then(res=>{
          setProducts(res.data.products)
          console.log(res)
      }).catch(err=>{
          console.log(err)
      })
  }
  useEffect(()=>{
      fetchData()
  },[])
  return (
    <div>
        <div className='pro'>
            {
                products.length>0?
                products.map((value,index)=>{
                    return(
                        <div key={index}>
                            <Mshirt id={value.id } brand={value.brand} description={value.description} title={value.title} img={value.images[0]}  price={value.price} discount={value.discountPercentage}/>

                            </div>
                    )
                }):
                <h5>Products Loading...</h5>
            }
        </div>
    </div>
  )
}

export default Mshirts