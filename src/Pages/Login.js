import React, { useState } from 'react'
import { Container, Form,Button } from 'react-bootstrap'
import { replace, useNavigate } from 'react-router-dom';

function Login() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('');
    const [isLoading,setIsLoading]=useState(false);
    const navigate=useNavigate();
    const apiKey='';
const baseUrl=`https://identitytoolkit.googleapis.com/v1/accounts:`
    const handleSubmit=async (e)=>{
        try {
            console.log(email,password)
            e.preventDefault();
            setIsLoading(true);
            
        const response=await fetch(baseUrl+'signInWithPassword'+apiKey,{
            method:'POST',
            headers:{
                'Content-Type':'application-json',
                Accept:"application-json"
            },
            body:JSON.stringify({
                email:email,
                password:password,
                returnSecureToken:true,
            })
        });
        const jsonReponse=  await response.json();
        console.log("JJson resposne",jsonReponse);
        if (!response.ok) {
            throw new Error(jsonReponse.error?.message);
            
        }
        localStorage.setItem('ecom-user',JSON.stringify(jsonReponse));
        navigate('/store',{replace:true})
        } catch (error) {
            console.error('Error from the handle Submit',error);
            alert(error)
        } finally{
            setIsLoading(false)
        }
    }
  return (
    <Container  fluid className='d-flex flex-column justify-content-center align-items-center border border-black' style={{height:'30rem',border:'1px',borderColor:'grey'

    }}>
        <h3 className='text-secondary fw-semibold'>
            Login
        </h3>

    {/* <Form>
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
    </Form> */}
    <Form>
        <Form.Group className='mb-3'>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' required autoComplete='' onChange={(e)=>setEmail(e.target.value)}/>
        </Form.Group>
        <Form.Group className='mb-3'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' required autoComplete='' onChange={(e)=>setPassword(e.target.value)}/>
        </Form.Group>
        <Button type='submit' onClick={handleSubmit} variant='primary' disabled={isLoading}>
            {isLoading?'Confirming...':'Login'}
        </Button>
    </Form>
    </Container>
  )
}

export default Login