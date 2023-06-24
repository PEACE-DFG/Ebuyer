import React from 'react'

function Comments(props) {
  return (
    <div>
      <p>
  <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  {props.id}
  </a>
  <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
   {props[id].user}
  </button>
</p>
<div class="collapse" id="collapseExample">
  <div class="card card-body">
        {props.body}
  </div>
</div>
    </div>
  )
}

export default Comments