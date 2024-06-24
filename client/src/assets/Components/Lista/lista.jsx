import './lista.css'
import React, { useEffect, useState } from 'react'
import { GrConfigure } from "react-icons/gr";
import Axios from 'axios'
import { RiDeleteBin2Fill } from "react-icons/ri";
import { MdEditSquare } from "react-icons/md";



const Lista = ({ setFormulario, setId }) => {

  const [livros, setLivros] = useState([])
  const [op, setOp] = useState(false)

  useEffect(() => {
    Axios.get('http://localhost:3000/recebeLivros').then((resposta) => {
      setLivros(resposta.data)
    })
  }, [])

  const operacao = () => {
    setOp(true)

  }

  const handleClickDelete = (id) => {
    Axios.delete(`http://localhost:3000/deletaLivro/${id}`).then(response => {
      console.log(response.data)
    }).catch(error => {
      console.error(error)
    })
    window.location.reload()
  }

  return (
    <>
      <table>
        <thead>
          <th>Nome</th>
          <th>Gênero</th>
          <th>Páginas</th>
        </thead>
        <tbody>
          {livros.map((livro, index) => {
            return (
              <tr key={index} className='linha' onClick={() => operacao()}>
                <td>{livro.nomeLivro}</td>
                <td>{livro.generoLivro}</td>
                <td>{livro.paginasLivro}</td>
                {op == true && (
                  <td className='editaExclui'>
                    <button onClick={() => handleClickDelete(livro.id)} className='btn-editaExclui'><RiDeleteBin2Fill className='icon-editaExclui' /></button>
                    <button
                      className='btn-editaExclui'
                      onClick={() => {
                        setId(livro.id);
                        setFormulario('EDITA');
                      }}
                    >
                      <MdEditSquare className='icon-editaExclui' />
                    </button>
                  </td>
                )}
              </tr>
            )
          })}
        </tbody>
      </table>

    </>
  )
}

export default Lista