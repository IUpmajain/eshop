import React from 'react'
import { useSelector } from 'react-redux'
import Productcard from '../components/Productcard'

const Jwellerys = () => {

  const {products}=useSelector(state=>state.products)

  return (
    <div className='d-flex justify-content-around'>
      {
       products.map((product)=>
       product.category==="jewelery" && <Productcard key={product.id} product={product}/>) 
      }
    </div>
  )
}

export default Jwellerys
