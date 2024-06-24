import './filtrar.css'
import { FaSearch } from "react-icons/fa";


import React, { useState } from 'react'

const filtrar = () => {

  const [filtrar, setFiltrar] = useState('')

  const handleChangeFiltrar = (e) => {
    e.preventDefault()
      const{name, value} = e.target
      setFiltrar(prevFiltraItens => ({
        ...prevFiltraItens, [name]:value,

      }))
  }


  return (
    <div className='filtrar'>
      <input className='filtra' 
      type="text"  
      placeholder='Buscar por nome'
      name='nomeFiltra'
      value={filtrar.nomeFiltra || '' }
      onChange={handleChangeFiltrar}/>
      <FaSearch className='iconeLupa'/>
    </div>
  )
}

export default filtrar