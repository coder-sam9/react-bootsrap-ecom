import React, { useContext } from 'react'
import { Button, Container } from 'react-bootstrap'
import CartContext from '../store/cart-context'

function Productitem({item}) {
    const cartCtx=useContext(CartContext);
  return (
    <Container className='m-3 d-flex flex-column align-items-center'>
        <Container className='d-flex flex-column justify-content-center align-items-center m-3'>
        <h3>
            {item.title}
            </h3>
    <img src={item.imageUrl} alt={item.title} className='w-75 h-75'/>
        </Container>

    <Container fluid className='justify-content-between m-1 d-flex flex-row'>
        <p className='fw-normal'>${item.price}
            </p>
        <Button variant='info' className='text-white fw-bold m-0 p-1' onClick={()=>cartCtx.addItems(item)}>
            {'Add to Cart'.toLocaleUpperCase()}
        </Button>
    </Container>
    </Container>
  )
}

export default Productitem