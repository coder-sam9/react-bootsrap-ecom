import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'

function ContactUs() {
  return (
    <Container  fluid className='d-flex flex-column justify-content-center align-items-center' style={{height:'30rem'}}>

    <Form>
<Form.Group className='mb-3' controlId='name'>
    <Form.Label className='fw-bold'>
        Name
    </Form.Label>
    <Form.Control type='text' placeholder='Enter Name'/>
<Form.Group className='mb-3' controlId='Email'>
    <Form.Label className='fw-bold'>
        Email
    </Form.Label>
    <Form.Control type='email' placeholder='Enter Email'/>
    <Form.Text className='fw-semibold' >
        You will be contact on this email.
    </Form.Text>
</Form.Group>
</Form.Group>
<Form.Group className='mb-3' controlId='phoneNumber'>
    <Form.Label className='fw-bold'>
        Phone Number
    </Form.Label>
    <Form.Control type='tel' placeholder='Enter Phone Number'/>
    <Form.Text className='fw-semibold' >
        You will be contact on this Phone Number.
    </Form.Text>
</Form.Group>

<Button variant="primary" type="submit" onSubmit={(e)=>{e.preventDefault();console.log('Thanks for conneccting');}
}>
        Submit
      </Button>
    </Form>
    </Container>
  )
}

export default ContactUs