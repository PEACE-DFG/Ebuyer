import React, { useContext } from 'react'
import {useState} from 'react'
import {useEffect} from 'react'
import axios from "axios"
import Product3 from '../component/Product3';
import { Cartcontext } from '../Context/Context';

function Productpages3() {
    const [products,setProducts]=useState([]);
    function fetchData(){
        axios.get('https://dummyjson.com/products?limit=5&skip=7&select=title,description,brand,price,images,discountPercentage')
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
    const Globalstate =useContext(Cartcontext);
    console.log(Globalstate)


  return (
    <div>
         <div className='pro'>
            {
                products.length>0?
                products.map((value,index)=>{
                    value.quantity=1;
                    return(
                        <div key={index}>
                            <Product3 id={value.id } brand={value.brand} description={value.description} title={value.title} img={value.images[0]}  price={value.price} discount={value.discountPercentage} items={value}/>

                            </div>
                    )
                }):
                <h5>Products Loading...</h5>
            }
        </div>

    </div>
  )
}

export default Productpages3