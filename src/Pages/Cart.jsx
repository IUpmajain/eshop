import React from 'react'
import Cartsection from '../components/Cartsection'
import { useSelector } from 'react-redux'

const Cart = () => {

  const {cart} = useSelector(state => state.cart);
  const total = cart.reduce((p,c)=>{
    return p + c.NewPrice;
  },0);

  if (!cart || cart.length == 0) {
    return (
      <h1
        className="heading"
        style={{ marginTop: "200px", marginBottom: "160px" }}
      >
        No items in your <span>cart </span>...
      </h1>
    );
  }

  return (
    <div className='container d-flex justify-content-around mt-5'>
        <div>
        {
          cart.map((item)=>(<Cartsection key={item.id} item={item}/>))
        }
        </div>
      <div className="col-2" style={{width:"12rem"}}>
        <div className="card mb-4 rounded-3 shadow-sm">
          <div className="card-header">
            <h4 className="my-0 fw-normal">Total Amount:</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">${total.toFixed(2)}</h1>
            <button className="pay-btn btn btn-primary">Pay Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart;
