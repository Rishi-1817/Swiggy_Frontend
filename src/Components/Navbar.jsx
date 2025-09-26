import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='navbar'>
      <Link to='/'>
      <img className='logo' src="data:image/png;base64,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" alt="" />
      </Link>
        
        <ul>
            <li><Link to='/corporate'><i class="bi bi-tv"></i> Swiggy Corporate</Link></li>
            <li><Link to='/Search'><i class="bi bi-search"></i> Search</Link></li>
            <li><Link to='/Offers'><i class="bi bi-gift"></i> Offers</Link></li>
            <li><Link to='/Help'><i class="bi bi-question-circle"></i> Help</Link></li>
            <li><Link to='/SignIn'><i class="bi bi-person"></i> Sign In</Link></li>
            <li><Link to='/Cart'><i class="bi bi-cart"></i> Cart</Link></li>
        </ul>
    </div>
  )
}

export default Navbar