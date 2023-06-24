import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { loggedIn } from '../App';
import { useNavigate } from 'react-router-dom';

function Login() {
  function ReDirect(){
    navigate('/Register')

  }
    let [isLoggedIn,setIsLoggedIn]=useContext(loggedIn)
  let navigate = useNavigate()
  const [user,setUser]=useState({
    email:'',
    password:''
  })
  function getUser(e){
    let name=e.target.name;
    let value=e.target.value
    setUser({
      ...user,
      [name]:value
    })
   
  }
  const submitData =(e)=>{
    e.preventDefault()
    if (localStorage.getItem('users')){
      let users = JSON.parse(localStorage.getItem('users'))
      let validatedUser= users.filter((value,index)=>{
        return value.Email == user.email && value.Password==user.password
      })
      console.log(validatedUser)
      if (validatedUser.length==0){
        alert('Invalid Details')
      }else{
        {
          localStorage.length==0?
          <>
             {
              <>
              {
               alert('Please register')

              }
              </>
              }
          </>
           :
         <>
            {
             <>
             {
               alert('You are Logged In')
             }
           {
             navigate('/')
     
           }</>
            }
         </>
     }
   
        // setIsLoggedIn(true)
        // navigate('/')
        // console.log(isLoggedIn)
        // console.log(true)
      }
     
    }

    
    

  }
  function Login(){
    if(localStorage.length==0){
      alert('You Have Not Registered, Please register ')

    }
  }
  // function LogIn() {
  //   {
  //    localStorage.length==0 && validatedUser.length!==""?
  //    <>
  //       {
  //         alert('Please register')
  //       }
  //    </>
  //     :
  //   <>
  //      {
  //       <>
  //       {
  //         alert('You are Logged In')
  //       }
  //     {
  //       navigate('/')

  //     }</>
  //      }
  //   </>
  //   }

  // }
  return (
    <div >
        <div className='login'>
            <div className='result mb-5'>
                <div className='text-light text-center my-4'>
                    <h2>Login Details</h2>
                    <hr />
                </div>
                <form action="" onSubmit={submitData}>
                <div className="input-group flex-nowrap my-5">
                    <span className="input-group-text" id="addon-wrapping"><i class='fa-solid fa-user'></i></span>
                    <input type="email" className="form-control" name="email" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" onChange={getUser}/>
                    </div>

                    <div className="input-group flex-nowrap my-5">
                    <span className="input-group-text" id="addon-wrapping"><i class='fa-solid fa-lock'></i></span>
                    <input type="password" className="form-control" name='password' placeholder="Password" aria-label="Password" aria-describedby="addon-wrapping" onChange={getUser}/>
                    </div>
                   <div style={{display:'flex',justifyContent:'space-between'}} className='my-3'>
                   <div className='text-light'>
                        <input type="checkbox" name="" id="" /> Remember me
                    </div>

                    <div className='text-info'>
                        <p onClick={ReDirect}>
                            Forgotten password?
                        </p>
                    </div>
                   </div>

                   <div>
                    <button className='w-100 bg-primary fs-4 shafad' style={{borderRadius:'10px',border:'none'}} onClick={Login}  >Login</button>
                   </div>
                   <div className='text-light text-center my-3'>
                    <p>Don't have an account?<span className='text-primary' onClick={ReDirect}><a href=''>Sign up</a></span></p>
                   </div>
                   <div className='text-center text-light'>
                    <p>or connect with</p>
                   </div>
                   <div style={{display:'flex',justifyContent:'space-evenly'}} className='text-center'>
                    <div>
                      <a href=" https://www.facebook.com/" target='_blank'>
                      <i class="fa-brands fa-facebook fs-2" style={{color:'blue',backgroundColor:'white',borderRadius:'50%',padding:'5px'}}></i>

                      </a>
                    </div>
                    <div>
                      <a href="https://www.google.com/" target='_blank'>
                        <i class="fa-brands fa-google fs-2" style={{color:'red',backgroundColor:'white',borderRadius:'50%',padding:'5px'}}></i>

                      </a>
                    </div>
                    <div>
                      <a href=" https://github.com/PEACE-DFG" target='_blank'>
                        <i class="fa-brands fa-github fs-2" style={{color:'black',backgroundColor:'rgb(211,211,211)',borderRadius:'50%',padding:'5px'}}></i>

                      </a>
                    </div>
                   </div>

                </form>

            </div>

        </div>

    </div>
  )
}

export default Login