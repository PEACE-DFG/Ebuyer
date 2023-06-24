// import React from 'react'
// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'


// function Register() {
 
//     let navigate = useNavigate()
//     function LoginBack(){
//     navigate('/Login')
//     }
//     const [user,setUser]=useState({
//         Firstname:'',
//         Lastname:'',
//         Email:'',
//         Address:'',
//         Telephone:'',
//         OptionalAddress:'',
//         Password:'',
//         RepeatPassword:''
//     })
//     const [errors,setErrors]=useState([])
//     const submitData=(e)=>{
//         e.preventDefault()
//         if(user.Firstname==''){
//             setErrors((err)=>{
//               return{...err,
//                 FirstnameErr:'Your First name is required'}
//             })
//           }
//           if (user.Lastname==''){
//             setErrors((err)=>{
//               return{
//                 ...err,
//                 LastnameErr:'Your Last name Is Required'
//               }
//             })
//           }
//           if(user.Email==''){
//             setErrors((err)=>{
//               return{
//                 ...err,
//                 EmailErr:'Your Email is Required'
//               }
//             })
//           }
//           if(user.Password==''){
//             setErrors((err)=>{
//               return{
//                 ...err,
//                 PasswordErr:'Your Password is Required'
//               }
//             })
//           }
//           if(user.RepeatPassword==''){
//             setErrors((err)=>{
//               return{
//                 ...err,
//                 RepeatpasswordErr:'Your Password is Required'
//               }
//             })
//           }
//           if(user.Address==''){
//             setErrors((err)=>{
//               return{
//                 ...err,
//                 AddressErr:'Your Address is Required'
//               }
//             })
//           }
         
//           if(user.Telephone==''){
//             setErrors((err)=>{
//               return{
//                 ...err,
//                 TelephoneErr:'Your PhoneNumber is Required'
//               }
//             })
//           }
          
//           let users=[];
//           if (errors.length==0){
//             if(localStorage.getItem('users')){
//               let lUsers=localStorage.getItem('users')
//               users=JSON.parse(lUsers);
//             }
            
//             users.push(user);
//             const dataUsers=JSON.stringify(users)
//             localStorage.setItem('users',dataUsers)

//             // if (users.Firstname!==''){
//             //   alert('fill')
//             // }else{

//             // }
//               // navigate('/Login') 
//               {
//                 users?
//                 <>
//                 {
//                 alert('Fill details')


//                 }
//                 </>:
//                 <>
//                 {
//               navigate('/Login') 

                
//                 }

//                 </>
//               }
             
           
//           }
        
       
        
//     }
    
//   return (
//     <div>
//         <div className='result'>
//             <div className='text-center text-light'>
//                 <h2>Register Details</h2>
//                 <marquee behavior="" direction="">
//                     Please Ensure To Fill All The Required Information
//                 </marquee>
//                 <hr />
//             </div>
//             <form action="" onSubmit={submitData}>
//             <div class="form-floating my-3">
//                 <input type="text" class="form-control" id="floatingInput" placeholder="firstname"
//                  onChange={(e)=>{
//                     setUser({...user, Firstname:e.target.value})
//                   }}/>
//                             <span style={{color:'red'}}>
//                             {errors.FirstnameErr}

//                             </span>
//                 <label for="floatingInput" name='Firstname'>First Name</label>
//                 </div>
//                 <div class="form-floating">
//                 <input type="text" class="form-control" id="floatingInput" placeholder="lastname"
//                 onChange={(e)=>{
//                     setUser({...user, Lastname:e.target.value})
//                   }}/>
//                        <span style={{color:'red'}}>
//                             {errors.LastnameErr}

//                             </span>
//                 <label for="floatingPassword" name='Lastname'>Last Name</label>
//                 </div> 
//                 <div class="form-floating my-3">
//                 <input type="text" class="form-control" id="floatingInput" placeholder="Home-Address"
//                 onChange={(e)=>{
//                     setUser({...user, Address:e.target.value})
//                   }}/>
//                        <span style={{color:'red'}}>
//                             {errors.AddressErr}

//                             </span>
//                 <label for="floatingPassword" name='Address'>Home-Address</label>
//                 </div> 
//                 <div class="form-floating my-3">
//                 <input type="text" class="form-control" id="floatingInput" placeholder="Optional Home-Address"
//                 onChange={(e)=>{
//                     setUser({...user, OptionalAddress:e.target.value})
//                   }}/>
//                        <span style={{color:'red'}}>
//                             {errors.OptionalAddressErr}

//                             </span>
//                 <label for="floatingPassword" name='OptionalAddress'>Optional Home-Address</label>
//                 </div> 
//                 {/* ################## */}
//                 <div class="form-floating my-3">
//                 <input type="tel" class="form-control" id="floatingInput" placeholder="PhoneNumber"
//                 onChange={(e)=>{
//                     setUser({...user, Telephone:e.target.value})
//                   }}/>
//                        <span style={{color:'red'}}>
//                             {errors.TelephoneErr}

//                             </span>
//                 <label for="floatingPassword" name='Telephone'>Phone Number</label>
//                 </div> 
//                 {/* ######################### */}
//                 <div class="form-floating my-3">
//                 <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"
//                 onChange={(e)=>{
//                     setUser({...user, Email:e.target.value})
//                   }}/>
//                                 <span style={{color:'red'}}>
//                             {errors.EmailErr}

//                             </span>
//                 <label for="floatingInput" name='Email'>Email address</label>
//                 </div>
                
//                 <div class="form-floating">
//                 <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
//                  onChange={(e)=>{
//                     setUser({...user, Password:e.target.value})
//                   }}/>
//                    <span style={{color:'red'}}>
//                             {errors.PasswordErr}

//                             </span>
//                 <label for="floatingPassword" name='Password'>Password</label>
//                 </div> 
//                 <div class="form-floating mt-3">
//                 <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
//                  onChange={(e)=>{
//                     setUser({...user, RepeatPassword:e.target.value})
//                   }}/>
//                    <span style={{color:'red'}}>
//                             {errors.RepeatpasswordErr}

//                             </span>
//                 <label for="floatingPassword" name='RepeatPassword'>RepeatPassword</label>
//                 </div> 

//                 <div className='mt-4'>
//                     <button className='w-100   fs-4 shafad' style={{borderRadius:'10px',border:'none',backgroundColor:'#90EE90'}} >Submit</button>
//                    </div>

//                    <div className='text-center text-light mt-3'>
//                     <p>
//                         <i>Already Have an account?</i>
//                     </p>
//                    </div>
//                    <div className='text-center text-warning my-3'>
//                    <span onClick={LoginBack} style={{textDecoration:'none'}}> <i class="fa-solid fa-arrow-left"></i> Back to Login</span>
//                    </div>
//             </form>
//         </div>
//     </div>
//   )
// }

// export default Register

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  function LoginBack(){
         navigate('/Login')
        }

  const [user, setUser] = useState({
    Firstname: '',
    Lastname: '',
    Email: '',
    Address: '',
    Telephone: '',
    OptionalAddress: '',
    Password: '',
    RepeatPassword: ''
  });

  const [errors, setErrors] = useState({});

  const submitData = (e) => {
    e.preventDefault();

    const newErrors = {};
    // const newRepeat='';

    if (user.Firstname.trim() === '') {
      newErrors.FirstnameErr = 'Your First name is required';
    }
    if (user.Lastname.trim() === '') {
      newErrors.LastnameErr = 'Your Last name is required';
    }
    if (user.Email.trim() === '') {
      newErrors.EmailErr = 'Your Email is required';
    }
    if (user.Password.trim() === '') {
      newErrors.PasswordErr = 'Your Password is required';
    }
    if (user.RepeatPassword.trim() === '') {
      newErrors.RepeatPasswordErr = 'Your Password is required';
    }
    if (user.Address.trim() === '') {
      newErrors.AddressErr = 'Your Address is required';
    }
    if (user.Telephone.trim() === '') {
      newErrors.TelephoneErr = 'Your Phone Number is required';
    }
    // if (user.Password.length != user.RepeatPassword.length){
    //   newRepeat='Your Passwords do not match'
    // }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      let users = [];
      if (localStorage.getItem('users')) {
        users = JSON.parse(localStorage.getItem('users'));
      }

      users.push(user);
      const dataUsers = JSON.stringify(users);
      localStorage.setItem('users', dataUsers);

      alert( "Hi" +" " +  users[0].Firstname + " "   +' Thank you for Registering, Please login to access Your Account');
      navigate('/Login');
    }
  };

  return (
    <div>
      <div className="result">
        <div className="text-center text-light">
          <h2>Register Details</h2>
          <marquee behavior="" direction="">
            Please Ensure To Fill All The Required Information
          </marquee>
          <hr />
        </div>
        <form onSubmit={submitData}>
          <div className="form-floating my-3">
            <input
              type="text"
              className="form-control"
              id="firstname"
              placeholder="firstname"
              onChange={(e) => {
                setUser({ ...user, Firstname: e.target.value });
              }}
            />
            {errors.FirstnameErr && <span style={{ color: 'red' }}>{errors.FirstnameErr}</span>}
            <label htmlFor="firstname">First Name</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="lastname"
              placeholder="lastname"
              onChange={(e) => {
                setUser({ ...user, Lastname: e.target.value });
              }}
            />
            {errors.LastnameErr && <span style={{ color: 'red' }}>{errors.LastnameErr}</span>}
            <label htmlFor="lastname">Last Name</label>
          </div>
          <div className="form-floating my-3">
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="Home-Address"
              onChange={(e) => {
                setUser({ ...user, Address: e.target.value });
              }}
            />
            {errors.AddressErr && <span style={{ color: 'red' }}>{errors.AddressErr}</span>}
            <label htmlFor="address">Home-Address</label>
          </div>
          <div class="form-floating my-3">
                 <input type="text" class="form-control" id="floatingInput" placeholder="Optional Home-Address"
                 onChange={(e)=>{
                     setUser({...user, OptionalAddress:e.target.value})
                   }}/>
                        <span style={{color:'red'}}>
                             {errors.OptionalAddressErr}

                             </span>
                 <label for="floatingPassword" name='OptionalAddress'>Optional Home-Address</label>
                 </div> 
                 {/* ################## */}
                 <div class="form-floating my-3">
                 <input type="tel" class="form-control" id="floatingInput" placeholder="PhoneNumber"
                 onChange={(e)=>{
                     setUser({...user, Telephone:e.target.value})
                   }}/>
                        <span style={{color:'red'}}>
                             {errors.TelephoneErr}

                             </span>
                 <label for="floatingPassword" name='Telephone'>Phone Number</label>
                 </div> 
                 {/* ######################### */}
                 <div class="form-floating my-3">
                 <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"
                 onChange={(e)=>{
                     setUser({...user, Email:e.target.value})
                   }}/>
                                 <span style={{color:'red'}}>
                             {errors.EmailErr}

                             </span>
                 <label for="floatingInput" name='Email'>Email address</label>
                 </div>
                
                 <div class="form-floating">
                 <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
                  onChange={(e)=>{
                     setUser({...user, Password:e.target.value})
                   }}/>
                    <span style={{color:'red'}}>
                             {errors.PasswordErr}

                             </span>
                 <label for="floatingPassword" name='Password'>Password</label>
                 </div> 
                 <div class="form-floating mt-3">
                 <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
                  onChange={(e)=>{
                     setUser({...user, RepeatPassword:e.target.value})
                   }}/>
                    <span style={{color:'red'}}>
                             {errors.RepeatPasswordErr}

                             </span>
                             {/* <span>
                              {newRepeat}
                             </span> */}
                 <label for="floatingPassword" name='RepeatPassword'>RepeatPassword</label>
                 </div> 

                 <div className='mt-4'>
                     <button className='w-100   fs-4 shafad' style={{borderRadius:'10px',border:'none',backgroundColor:'#90EE90'}} >Submit</button>
                    </div>

                    <div className='text-center text-light mt-3'>
                     <p>
                         <i>Already Have an account?</i>
                     </p>
                    </div>
                    <div className='text-center text-warning my-3'>
                    <span onClick={LoginBack} style={{textDecoration:'none'}}><a href=''>  Sign In </a></span>
                    </div>
             </form>
         </div>
     </div>
   )
 }

 export default Register

