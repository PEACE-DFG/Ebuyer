import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Index from '../../pages/Index'
import { useState,useEffect } from 'react';
import axios from 'axios';

function Navbar() {
  let user=JSON.parse(localStorage.getItem('users'))
  console.log(user)
  let navigate = useNavigate()
  function logout( )
  {
    localStorage.clear();
    navigate('/Register') 
  }
  function Register(){
    navigate('/Register') 

  }
  
  const [search, setSearch] = useState('');
  const [searchProduct, setSearchProduct] = useState([]);
  const [searchItems, setSearchItems] = useState([]);

  useEffect(() => {
    if (search !== '') {
      axios.get(`https://dummyjson.com/products/search?q=${search}`)
        .then((res) => {
          setSearchProduct(res.data.products);
          localStorage.setItem('products', JSON.stringify(res.data.products));
          let storedProducts =
            localStorage.getItem('products') !== null
              ? JSON.parse(localStorage.getItem('products'))
              : [];
          setSearchItems(storedProducts);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [search]);

  return (
    <div>
        <nav className="navbar  navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid " style={{alignItems:'center'}}>
    <a className="navbar-brand" href="#">
      <Link to= '/'>
        <img src="https://image.ebuyer.com/customer/promos/brand_guidelines_2015/2020/logo2020-w.png" width={'155px'} alt="" />
        </Link>
    </a>
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" ></span>
      
    </button>
    <div className=" navbar-collapse " id="navbarSupportedContent">
  <div className='tea'>
  <span>
  <a href="">
        <img src="https://www.ebuyer.com/assets/img/header-dailydeals.08ee7471d868bbd1e251354f2281438d.png" alt=""  width={'80px'}/>
    </a>
  </span>
    <span>
        <div className="row  mt-4 ms-3">
            <div className="row text-light"><h6>Up To 40% off</h6></div>
            <div className="row text-light"><p>View the deals</p></div>
        </div>
    </span>
  </div>
      <div className="navbar-nav  mb-2 mb-lg-0">
   
      <form className="d-flex">
        <input className="form-control " type="search" name='searchproduct'  size={40} placeholder="Search for products..." aria-label="Search"  onChange={(e) => setSearch(e.target.value)} />
        <button
         className="btn btn-outline-warning bg-warning text-dark ram"
         type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal"
           ><i className='fa-solid fa-search'></i></button>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
  <div class="modal-dialog">
    <div class="modal-content" style={{backgroundImage:'url(https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_1280.jpg)',backgroundSize:'cover',backgroundRepeat:"no-repeat"}}>
      <div class="modal-header ">
        <h5 class="modal-title text-light" id="exampleModalLabel" >Searched Products</h5>
        <button type="button" class="btn-close" style={{backgroundColor:'white'}} data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-dialog modal-dialog-scrollable" >
        {/* ... */}
        {searchItems.length === 0 ? (
                    <h3 className='text-light'>No search results found.</h3>
                  ) : (
                    <ul className="list-unstyled" >
                      {searchItems.map((item) => (
                        <li key={item.id} className="d-flex mb-3" style={{border:'2px solid none',backgroundColor:'rgb(0,0,0,0.8)',color:'white',borderRadius:'10px',boxShadow:'5px 5px 4px white'}}>
                          <img
                            src={item.images[1]}
                            alt={item.title}
                            className="img-fluid me-3"
                            style={{ maxWidth: '200px' }}
                          />
                          <div className='pt-4 pe-3'>
                            <h6>{item.title}</h6>
                            <p>Price: ${item.price}</p>
                            <p>Discount Percentage:  ${item.discountPercentage}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                    
                  )}
                  

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
        {/* <button type="button" class="btn btn-primary">Save changes</button> */}
      </div>
    </div>
  </div>
</div>
      </form>
     
       
      </div>
      {/* <span className="mew"> */}
      <span className='d-flex ms-2 mt-3'>
        <span>
        {/* <i className="fa-solid fa-user"></i> */}\
        {
          localStorage.getItem('users')?

          <>
          <img src="https://t4.ftcdn.net/jpg/04/21/42/31/240_F_421423196_s95d4KYxTE3uzkKJqNhRHWMjouLqskpb.jpg" width={'50px'} style={{borderRadius:'50%'}} alt="" />
          </>:
          <>
        <img src="https://cdn-icons-png.flaticon.com/512/219/219983.png" onClick={Register} width={'40px'} alt="" />
          
          </>
        }
        </span>
        {
          localStorage.getItem('users')?
         <>
         <span className='row'>
          <div class="navbar-collapse " id="navbarNavDarkDropdown">
      <ul class="navbar-nav ">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-secondary bg-light ms-2 px-4" style={{borderRadius:'5px'}} href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Hi, {user&& user[0].Firstname} 
          </a>
          <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
            <li>  <Link to='/' element={<Index/>} className='Link'>
       <i class="fa-solid fa-home px-3"></i>  Home
      </Link></li>
      <li><a class="dropdown-item" href="#"> <i class="fa-solid fa-user pe-3"></i> 
      <Link to='/Profile' className='Link'>My Profile</Link></a></li>
      <li><a class="dropdown-item" href="#"><i class="fa-solid fa-newspaper pe-2"></i>
      <Link to='/Blog' className='Link'> Our Blog</Link></a></li>
            <hr/>
            <li><a class="dropdown-item text-center text-light " onClick={logout} href="#">Logout</a></li>
          </ul>
        </li>
      </ul>
    </div>

         </span>
         
         </>:
         <>
          <span className="  ms-2">
          <span className=" text-light"><h6>Account</h6></span>
          <span className="text-light"><p ><span><span ><Link to='/Register' style={{textDecoration:'none', color:'gold'}} onClick={Register}>Register</Link></span></span>||<span><span ><Link to='/Login' style={{textDecoration:'none',color:'gold'}}>Login</Link></span></span></p></span>
      </span>
         </>

        }
       
    </span>


    <span>
        {
          localStorage.getItem('users')?
          <>
           <span className='ms-4'>
            {/* <i className='fa-solid fa-cart'></i> */}
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiGRrKG8Rgpf15CNYyiYc0fUpaGaNMHFqDTh29Loq-fBVCwZ4Iy70GSq6IBZVgTrL2j0s&usqp=CAU" style={{borderRadius:'50%',width:'40px'}} alt="" /><span className='text-light fs-3 pt-5'>
           <Link to='/Cart'>
           <button type="button" class="btn  position-relative" style={{backgroundColor:'rgb(0,0,0,0.6)',color:'white'}}>
                <span class="cart p-0 fs-5">CART</span>
                <span class="position-absolute top-0 start-100 translate-middle px-1 bg-danger border border-light rounded-circle">
                    <span class="visually-hidden">New alerts</span>
                </span>
                </button>
           </Link>
            </span>
        </span>
          </>:null
        }
       
    </span>
    {/* </span> */}
      
    </div>
  </div>
</nav>
<nav className='bg-secondary text-light' style={{fontWeight:'900'}}>
    <div className='container-fluid'>
      {
        localStorage.getItem('users')?
        <>
         <div className="row py-2 gy-3 text-center">
        <div className="col-md-2">
            <Link to='/Smartphones' className='Link'> Smartphones</Link>
            <hr />
        </div>
        <div className="col-md-2">
        <Link to='/Laptops' className='Link'> Laptops</Link>
        <hr />
        </div>
        <div className="col-md-2">
          <Link to='/Fragrance' className='Link' >Fragrances</Link>
          <hr />
        </div>
        <div className="col-md-3">
          <Link to='/SkinCare' className='Link'>SkinCare</Link>
          <hr />
        </div>
        <div className="col-md-2">
          <Link to='/Groceries' className='Link'>Groceries</Link>
          <hr />
        </div>
        <div className="col-md-2">
          <Link to='Homedecoration' className='Link'>Home-Decor</Link>
          <hr />
        </div>
        <div className="col-md-2">
          <Link to='Furnitures' className='Link'>Furniture</Link>
          <hr />
        </div>
        <div className="col-md-2">
          <Link to='/Watches' className='Link'>Watches</Link>
          <hr />
        </div>
        <div className="col-md-3">
          <Link to='/Dresses' className='Link'>Dresses</Link>
          <hr />
        </div>
        <div className="col-md-2">
          <Link to='/Shoes' className='Link'>Shoes</Link>
          <hr />
        </div>
    </div>
    <div className="row py-2 gy-3 text-center">
        {/* <div className="col-md-2">Mens-Shirt</div>
        <div className="col-md-2">Mens-Shoes</div>
        <div className="col-md-2">Men-Watch</div>
        <div className="col-md-3">Women-Watch</div>
        <div className="col-md-2">Women-Bag</div> */}
        <div className="col-md-2">
          <Link to='/Jewellery' className='Link'>Jewelleries</Link>
          <hr />
        </div>
        <div className="col-md-2">
          <Link to='/Sunglasses' className='Link'>Sunglasses</Link>
          <hr />
        </div>
        <div className="col-md-2">
          <Link to='/Automotive' className='Link'>Automotive</Link>
          <hr />
        </div>
        <div className="col-md-3">
          <Link to='/Motorcycle' className='Link'>MotorCycle</Link>
          <hr />
        </div>
        <div className="col-md-2">
          <Link to='/Lighting' className='Link'>Lighting</Link>
          <hr />
        </div>
    </div>
        
        </>:null
       
        
      }
   
   
    </div>
</nav>
{/* <section>
 {
  localStorage.getItem('users')?
  <>
   <div>
    <p style={{position:'fixed',top:'70px',backgroundColor:'grey',padding:'10px',borderRadius:'5px',}}>
      <Link to='/' element={<Index/>} className='Link'>
       <i class="fa-solid fa-home"></i> Back Home
      </Link>
    </p>
  </div>
  </>:null
 }
</section> */}


    </div>
  )
}

export default Navbar