import React from 'react'
import { add } from '../features/Cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const Productcard = ({product}) => {
  const dispatch = useDispatch();

  const {cart} = useSelector(state=>state.cart)

const handleAdd = (product) => {
  let x = cart.filter(item=>item.id===product.id)
  if (x.length) {
    toast.error('Item is already in the cart', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
  else{
    const cartProduct = {...product, qty:1, NewPrice:product.price}
    dispatch(add(cartProduct));
  }
};
  return (
    <>
     <div className="card mt-3" style={{width:"18rem", height:"26rem", background:"pink"}}>
  <div className="image text-center">
  <img src={product.image} className="card-img-top mt-1" style={{width:"200px", height:"200px"}} alt="..."/>
  </div>
  <div className="card-body">
    <h5 className="card-title">{product.title}</h5>
    <span className='d-flex justify-content-between'>
    <p className="card-text">${product.price}</p>
    <button className="add_cart btn btn-primary" onClick={()=>handleAdd(product)}>Add to cart</button>
    </span>
  </div>
</div>


    </>
  )
}

export default Productcard;
