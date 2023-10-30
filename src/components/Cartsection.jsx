import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { QtyUpdate,  newPrice,  remove} from '../features/Cart/cartSlice'
import { toast } from 'react-toastify';


const Cartsection = ({item}) => {

  
  const dispatch =useDispatch();

  const handleremove =(id)=> {
    dispatch(remove(id));
    toast.warn('Selected item is deleted', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      })
  }


  const [Qty, setQty] = useState(1)
  const handlezero = ()=>{
    if(Qty<=1){
      setQty(1);
    };
  };


  const PriceUpdate = ((id, num)=>{
    const newPayload = {
      id,
      num
    }
    dispatch(QtyUpdate(newPayload))

    dispatch(newPrice(newPayload))
    
  })

  useEffect(() => {
    handlezero()
  }, [Qty]);
  return (
<div className="card d-flex text-center mt-2 flex-wrap" style={{width: "40rem"}}>
 <div className="col-md-12">
 <img src={item.image} style={{width:"120px", height:"120px"}} className="img-fluid rounded-start mt-1" alt="..."/>
 </div>
   <div className="col-md-12">
   <div className="card-body">
     <h5 className="card-title">{item.title}</h5>
     <p className="card-text">${item.price}</p>
     <p>{item.category}</p>
     <p>{item.description}</p>
     <p className="card-text">rate: ${item.NewPrice ?item.NewPrice : item.price }</p>
    <h3>Qty :<strong className='btn btn-primary fs-6 fw-bold ms-2 me-2' onClick={() => PriceUpdate(item.id, - 1)}>-</strong> 
{item.qty}
<strong className='btn btn-primary fs-6 fw-bold ms-2' onClick={() => PriceUpdate(item.id, + 1)}>+</strong></h3>
     <span>
     <button className="btn btn-danger text-center" onClick={()=>handleremove(item.id)}>Remove</button>
     </span>
   </div>
   </div>
 </div>
  )
}
export default Cartsection;
