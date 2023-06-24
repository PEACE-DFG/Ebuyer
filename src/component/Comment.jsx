import React from 'react'
import axios from 'axios'
import {useEffect,useState} from "react"
import Comments from '../pages/Comments'

function Comment() {
    const [comments,setComments]=useState([])
    function fetchData(){
     axios.get('https://dummyjson.com/comments')
     .then(res=>{
         setComments(res.data.comments)
         console.log(res.data.comments)
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
            comments.length>0?
            comments.map((value,index)=>{

                return(
                    <div key={index}>
                        <Comments  body={value.body} Username={value.user.username} id={value.id} />
                        </div>

                )
            }):
            <h3 className='text-light text-center'>Loading Posts...</h3>
        }
       </div>
    </div>
  )
}

export default Comment