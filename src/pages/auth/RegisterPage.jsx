import React from 'react'
import { Link } from 'react-router-dom'
import { RegisterFormik } from '../../components/pure/forms/RegisterFormik'

const RegisterPage = () => {
  return (
    <div className='container'>
      <h1 className='text-center fw-bold'>Pagina de Registro</h1>
      <RegisterFormik />
      <div className="text-center my-4">
        <Link to="/login">Ya Tienes Cuenta?</Link>
      </div>
    </div>
  )
}

export default RegisterPage
