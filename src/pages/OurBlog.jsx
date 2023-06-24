import React from 'react'
import Blog from '../component/Blog'
import axios from 'axios'
import {useEffect,useState} from "react"

function OurBlog() {
    const [posts,setPost]=useState([])
    function fetchData(){
     axios.get('https://dummyjson.com/posts')
     .then(res=>{
         setPost(res.data.posts)
         console.log(res.data.posts)
     }).catch(err=>{
         console.log(err)
     })
    }
    useEffect(()=>{
     fetchData()
    },[])
  return (
    <div>
       <div >
       {
            posts.length>0?
            posts.map((value,index)=>{
                return(
                    <div key={index}>
                        <Blog title={value.title} body={value.body} reactions={value.reactions}/>
                        </div>

                )
            }):
            <h3 className='text-light text-center'>Loading Posts...</h3>
        }
       </div>
    </div>
  )
}

export default OurBlog