import React from 'react'
import { useSelector } from 'react-redux';
import Productcard from '../components/Productcard';


const Women = () => {

  const {products}=useSelector(state=>state.products)

  return (
    <div className='d-flex justify-content-around flex-wrap'>
      {
        products.map((product)=>product.category ==="women's clothing" && <Productcard key={product.id} product={product}/>)
      }
    </div>
  )
}

export default Women;
