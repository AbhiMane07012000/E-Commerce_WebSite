import React from 'react'
import accept from '../../Assets/accept.png'

const Success = () => {
  return (
    <div className='p-5 m-5 text-center'><img className='w-25 h-25' src={accept} alt="acceptLogo" /> <p className='p-2 h1'>Payment is Successful</p></div>
  )
}

export default Success  