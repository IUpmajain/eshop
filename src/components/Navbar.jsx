import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const {cart} = useSelector(state => state.cart)
  return (
    <>
<nav className="navbar navbar-expand-lg bg-secondary-subtle">
  <div className="container-fluid">
    <Link to="/"  className="link navbar-brand fs-3 fw-bold">E-Shop</Link>
    
      <form className="d-flex" role="search">
        <Link to="/cart"><button className="btn btn-outline-success">cart({cart.length})</button></Link>
      </form>
    </div>
</nav>

<nav className=' border p-1 mb-1 bg-dark '>
    <ul className="d-flex justify-content-around mt-1 fs-5 p-2">
        <Link to="/electronic"><li className="list-group-item text-white">Electronics</li></Link>
        <Link to="/men"><li className="list-group-item text-white">Men's Wear</li></Link>
        <Link to="/women"><li className="list-group-item text-white">Women's Wear</li></Link>
        <Link to="/jwellery"><li className="list-group-item text-white">Jwellery</li></Link>
    </ul>
</nav>
</>
  )
}

export default Navbar
