// import React from 'react'

// function Blog(props) {
//   return (
//     <div>
//         <div>
//         <div className="card" style="width: 18rem;">
//   <img src={''} className="card-img-top" alt="..."/>
//   <div className="card-body">
//     <h5 className="card-title">{props.title}</h5>
//     <p className="card-text">{props.body}</p>
//     <a href="#" className="btn btn-primary">{props.reactions}</a>
//   </div>
// </div>
//         </div>
       

//     </div>
//   )
// }

// export default Blog

// import React from 'react';

// function Blog(props) {
//   return (
//     <div >

//       <div className="card mb-3" style="max-width: 540px;">
//   <div className="row g-0">
//     <div className="col-md-4">
//       <img src={'https://cdn.pixabay.com/photo/2018/01/06/09/25/hijab-3064633_1280.jpg'} className="img-fluid rounded-start" alt="..."/>
//     </div>
//     <div className="col-md-8">
//       <div className="card-body">
//         <h5 className="card-title">{props.title}</h5>
//         <p className="card-text">{props.body}</p>
//         <div className='d-flex justify-content-around '>
//            <p type="button" className="btn btn-light position-relative">
//   <i className="fa-solid fa-heart"></i>
//   <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
//    {props.reactions}
//     <span className="visually-hidden">unread messages</span>
//   </span>
// </p>
// <p type="button" className="btn btn-light position-relative">
// <i className="fa-solid fa-thumbs-up"></i>

//   <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
//    {props.reactions}
//     <span className="visually-hidden">unread messages</span>
//   </span>
// </p>
// <p type="button" className="btn btn-light position-relative">
//   <i className="fa-solid fa-heart"></i>
//   <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
//    {props.reactions}
//     <span className="visually-hidden">unread messages</span>
//   </span>
// </p>
// <p type="button" className="btn btn-light position-relative">
//   <i className="fa-solid fa-heart"></i>
//   <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
//    {props.reactions}
//     <span className="visually-hidden">unread messages</span>
//   </span>
// </p>
          
//           </div>

//         <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
//       </div>
//     </div>
//   </div>
// </div>
      
//       </div>
//   );
// }

// export default Blog;

import React from 'react';
import { Link } from 'react-router-dom';

function Blog(props) {
  return (
    <div>
      <div className="card my-3  container" style={{ maxWidth: '1130px' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={'https://cdn.pixabay.com/photo/2018/01/06/09/25/hijab-3064633_1280.jpg'}
              className="img-fluid w-100 rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.body}</p>
              <div className="d-flex justify-content-around">
                <p type="button" className="btn btn-light position-relative">
                  <i className="fa-solid fa-heart"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {props.reactions}
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </p>
                <p type="button" className="btn btn-light position-relative">
                  <i className="fa-solid fa-thumbs-up"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {props.reactions}
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </p>
                <p type="button" className="btn btn-light position-relative">
                  <i className="fa-solid fa-comment"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {props.reactions}
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </p>
                <p type="button" className="btn btn-light position-relative">
                  <i className="fa-solid fa-smile"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {props.reactions}
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </p>
              </div>
              <p className="card-text" >
                  {/* <Link to='/Comment'> */}
                View Comments...
                  {/* </Link> */}
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
