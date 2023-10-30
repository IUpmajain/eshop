import React from 'react'
import { useSelector } from 'react-redux';
import Productcard from '../components/Productcard';


const Electronic = () => {

  const {products}=useSelector(state=>state.products)

  return (
    <div className='d-flex justify-content-around flex-wrap mt-3'>
      {
        products.map((product)=>product.category ==="electronics" && <Productcard key={product.id} product={product}/>)
      }
    </div>
  )
}

export default Electronic;
