import React, { useState } from 'react'
import Form from './Form/form'
import Filtrar from './Filtrar/filtrar'
import Lista from './Lista/lista'

import './display.css'

const display = () => {
  const [formulario, setFormulario] = useState('RECEBE')
  const [id, setId] = useState(0);

  
  return (
    <div className='display'>
      <div className='formulario'>
        <Form setFormulario={setFormulario} formulario = {formulario} id = {id}/>
        <Filtrar className = 'filtrar' />
      </div>
      <div className="lista">
        <Lista setFormulario = {setFormulario} setId = {setId}/>
      </div>

    </div>
  )
}

export default display