import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Cartcontext } from '../Context/Context';

function Product2(props) {
    const Globalstate=useContext(Cartcontext);
    const dispatch=Globalstate.dispatch
  return (
    <div>
          <section className='container py-3 ' style={{maxWidth:'300px',margin:"auto"}}> 
            <div className="card " style={{width:'12rem',height:'23rem',boxShadow:"5px 5px 3px grey"}}>
                <img src={props.img}  className="card-img-top img-fluid w-100 h-50" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.brand}</p>
                    <p className="card-text">Price: ${props.price}</p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
                <div className='d-flex' style={{justifyContent:'space-around'}}>
                {
                        localStorage.getItem('users')?
                        <>
                        <div style={{fontSize:'13px'}}>
                        <button style={{border:'none'}} className='bg-warning text-light' onClick={()=>dispatch({type:'ADD',payload:props.items},alert('Products Has Been Added To Cart'))}> <span>ADD TO CART</span></button>
                      </div>
                        </>:null
                      }
                      <div>
                      {
                          localStorage.getItem('users')?
                          <>
                          <Link to={`../details/${props.id}`} style={{textDecoration:'none'}}>
                        <p>DETAILS</p>
                        </Link>
                          </>:null
                          
                        }
                      </div>

                    </div>
                </div>
                

            </section> 
    </div>
  )
}

export default Product2