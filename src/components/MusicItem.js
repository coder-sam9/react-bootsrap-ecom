import React from 'react'
import { Button, Container } from 'react-bootstrap'

function MusicItem({item}) {
  return (
    <div className='border-bottom border-black d-flex flex-row justify-content-between align-items-center p-2' style={{gap:'1rem'}}>

    <p  style={{fontSize:'16px',textAlign:'left', width:'10%'
    }}>
{item.date}
    </p>
    <p  style={{fontSize:'16px',textAlign:'left', width:'22%'
    }}>
{item.location}
    </p>
    <p  style={{fontSize:'16px',textAlign:'left', width:"47%"
    }}>
{item.venue}
    </p>
    <Button variant='info' className='text-white'>
      Buy Tickets
    </Button>
    </div>
  )
}

export default MusicItem