import React from 'react'
import { Link } from 'react-router-dom'
function Groceri(props) {
  return (
    <div>
        <section className='container py-3 ' style={{maxWidth:'300px',margin:"auto"}}> 
            <div className="card " style={{width:'12rem',height:'24rem',boxShadow:"5px 5px 3px grey"}}>
                <img src={props.img}  className="card-img-top img-fluid w-100 h-75" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.brand}</p>
                    <p className="card-text">Price: ${props.price}</p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    <div className='d-flex' style={{justifyContent:'space-between'}}>
                      <div style={{fontSize:'13px'}}>
                        <button style={{border:'none'}} className='bg-warning text-light'> <span>ADD TO CART</span></button>
                      </div>
                      <div>
                        <Link to={`../details/${props.id}`} style={{textDecoration:'none'}}>
                        <p>DETAILS</p>
                        </Link>
                      </div>

                    </div>
                </div>
                </div>
                

            </section>
    </div>
  )
}

export default Groceri