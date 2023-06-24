import React from 'react'
import Cart from '../component/Cart'

function Carts() {
  return (
    <div style={{backgroundColor:'rgb(211,211,211)'}}>
        <Cart/>

        <section>
            <div className="butt text-center container">
                <button className='fs-4 bg-warning px-4'>CHECK OUT</button>
            </div>
        </section>
    </div>
  )
}

export default Carts