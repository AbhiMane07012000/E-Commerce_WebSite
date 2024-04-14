import React from 'react'
import failed from '../../Assets/remove.png'

const Failed = () => {
  return (
    <div className='p-5 m-5 text-center'><img className='w-25 h-25' src={failed} alt="FaliedLogo" /> <p className='p-2 h1'>Payment is Failed</p></div>
  )
}

export default Failed  