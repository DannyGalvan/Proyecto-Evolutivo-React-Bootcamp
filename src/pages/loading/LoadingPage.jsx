import React from 'react'
import { Spinner } from '../../components/pure/Spinner'

const LoadingPage = () => {
  return (
    <div className='vh-100 d-flex justify-content-center align-items-center'>
      <Spinner />
    </div>
  )
}

export default LoadingPage
