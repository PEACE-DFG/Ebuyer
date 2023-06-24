import React from 'react'
import { useContext } from 'react'
import { Cartcontext } from '../Context/Context'
function Cart() {
  const Globalstate=useContext(Cartcontext);
  const state=Globalstate.state
  const dispatch = Globalstate.dispatch;

  const total= state.reduce((total,item)=>
  {
    return (total+item.price*item.quantity)
  },0)
  
  return (
    <div style={{backgroundColor:'rgb(211,211,211)'}}>
      {state.map((item,index)=>{
        return(
          <div>
          
            <div className='card ' key={index} style={{backgroundColor:'rgb(211,211,211)'}}>
              <div className='row container my-5 m-auto border pt-3 text-center bg-light' style={{alignItems:'center',boxShadow:'5px 5px 4px grey'}}>

                <div className="col-md">
                  <img src={item.images[0]} style={{width:'150px'}} alt="" />
                  <p>Brand: {item.title}</p>

                </div>
                <div className="col-md">
                <p> Price: $ {item.price}</p>

                    <p>SubPriceTotal:  ${item.quantity * item.price}</p>
                  
                </div>
                <div className="col-md">
                <div className="quantity" style={{display:'flex',justifyContent:'space-around',alignItems:'center '}}>
                      <button onClick={()=>{
                        if(item.quantity>1){
                          dispatch({type:'DECREASE',payload:item});
                        }else{
                          dispatch({type:"REMOVE",payload:item});
                        }
                      }} >-</button>
                    <p>{item.quantity}</p>
                      <button onClick={()=>dispatch({type:'INCREASE',payload:item})}>+</button>
                    </div>
                </div>
                <div className="col-md">
                <button onClick={()=>dispatch({type:"REMOVE",payload:item})} className='bg-danger' style={{border:'none', borderRadius:'10px'}}> DELETE</button>

                </div>
                {/* <div className="col">
                  
                   
                </div> */}
              </div>

            </div>

          </div>
        )
      })}
      {
        state.length>0&& <div className="total text-center container text-light">
          <h2 >Total: ${total}</h2>
          </div>
      }
    </div>
  )
}

export default Cart