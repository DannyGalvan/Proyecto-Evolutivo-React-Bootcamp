import React, { useState } from 'react'

export const Greeting = () => {
  
  const [edad, setEdad] = useState(22);

  const cumplrAños = () => {
    setEdad(prev => prev + 1)
  }

  return (
    <div>
      <p>Hola Danny</p>
      <p>Tu edad es: {edad}</p>
      <button onClick={cumplrAños}>Cumplir años</button>
    </div>
  )
}

