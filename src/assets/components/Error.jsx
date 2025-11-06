import React from 'react'
import { useNavigate } from 'react-router-dom'
function Error() {
    let nevi=useNavigate();
     function go()
     {
        nevi('/');
     }
  return (
    <div>
      <h1>Error 404 please try something different</h1>
      <button onClick={go}>Go to HomePage</button>
    </div>
  )
}

export default Error