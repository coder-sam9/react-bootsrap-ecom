import React, { useContext } from 'react'
import { Button, Container } from 'react-bootstrap'
import CartItem from '../components/CartItem'
import CartContext from '../store/cart-context'

function CartTopUp({onClose}) {
    const cartCtx=useContext(CartContext);
  return (
    <Container className=' d-flex flex-column align-items-center bg-light' style={{position:"fixed",top:'8vh',right:'0px',height:"100%",width:'30vw',boxShadow:"0px 4px 8px rgba(0, 0, 0, 0.2)",}}>
        <p className='text-dark-subtle border border-black p-1 rounded-2 fw-bolder ms-auto mt-3' onClick={onClose}> X</p>
        <h2 >Cart</h2>
        <Container className='d-flex flex-row'>
        <h4 className=' border-bottom border-black py-2 fs-4' style={{width:'40%', marginRight:'5%'}}> ITEM </h4>
        <h4 className=' border-bottom border-black py-2 fs-4' style={{width:'20%', marginRight:'5%'}}> PRICE </h4>
        <h4 className=' border-bottom border-black py-2 fs-4' style={{width:'30%', marginRight:'5%'}}> QUANTITY </h4>

        </Container>
        {
            cartCtx.items.map((item,index)=><CartItem key={index} item={item} onRemove={()=>cartCtx.removeItem(item)}/>)
        }
        <Container className='d-flex flex-row text-end'>

        <h4 className='text-dark-subtle p-1 rounded-2 fw-bolder ms-auto mt-3'>
            Total  <span className='fw-lighter'>
                 ${cartCtx.totalAmount}
                </span>
        </h4>
        </Container>
        <Button variant='info' className='text-white fw-semibold ' onClick={()=>cartCtx.clearCart()}>Purchase</Button>
            </Container>
  )
}

export default CartTopUp;