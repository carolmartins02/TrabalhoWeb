import  Axios  from 'axios'
import './form.css'

import React, { useState } from 'react'

const form = ({formulario, id, setFormulario}) => {
    
    const [livro, setLivro] = useState({
        nomeLivro: '',
        generoLivro: '',
        quantidadePaginas: 0 
    })
    const [editaLivro, setEditaLivro] = useState({
        nomeLivroEdita: '',
        generoLivroEdita: '',
        quantidadePaginasEdita: 0
    })

    const handleChangeLivro = (e) => { 
        e.preventDefault()
        const {name, value} = e.target
        setLivro(prevLivro => ({
            ...prevLivro, 
            [name]:value
        }))

    }
    const handleChangeLivroEdita = (e) => {
        e.preventDefault()
        const {name, value} = e.target
        setEditaLivro(prevLivroEdita => ({
            ...prevLivroEdita, 
            [name]:value
        }))
    }
    const handleSubmitCadastra = (e) => {
        e.preventDefault()
        Axios.post('http://localhost:3000/adicionaLivro', {
            nomeLivro: livro.nomeLivro,
            generoLivro: livro.generoLivro,
            quantidadePaginas: livro.quantidadePaginas
        }).then((resp) => {
            console.log(resp.data)
        })
        window.location.reload()

    }

    const handleSubmitEdita = (e) => {
        e.preventDefault()
        Axios.put('http://localhost:3000/editaLivro', {
            id: id,
            nomeLivroEdita: editaLivro.nomeLivroEdita,
            generoLivroEdita: editaLivro.generoLivroEdita,
            quantidadePaginasEdita: editaLivro.quantidadePaginasEdita
        }).then((resp) => {
            console.log(resp.data)
        })
        window.location.reload()
    }
    


    return (
        <>
            {formulario == 'RECEBE' && (
                <div className='recebe'>
                    <h2>Cadastro</h2>
                    <div className="form">
                        <input type="text"
                            placeholder='Nome do livro'
                            name='nomeLivro'
                            value={livro.nomeLivro}
                            onChange={handleChangeLivro}
                        />
                       <div className="gender-pag">
                            <input className='input-gender' type="text"
                                placeholder='Gênero'
                                name='generoLivro'
                                value={livro.generoLivro}
                                onChange={handleChangeLivro}
                            />
                            <input className='input-number' type="number"
                                placeholder='Páginas'
                                name='quantidadePaginas'
                                value={livro.quantidadePaginas}
                                onChange={handleChangeLivro}
                            />

                        </div>

                        <button className='btn-cadastra'onClick={handleSubmitCadastra}>Cadastrar</button>
                    </div>
                </div>
            )}
            {formulario == 'EDITA' && (
                <div className="edita">
                    <h2>Editar</h2>
                    <div className="form">
                        <input type="text"
                            placeholder='Nome do livro'
                            name='nomeLivroEdita'
                            value={editaLivro.nomeLivroEdita}
                            onChange={handleChangeLivroEdita}
                            
                        />
                       <div className="gender-pag">
                            <input className='input-gender' type="text"
                                placeholder='Genero'
                                name='generoLivroEdita'
                                value={editaLivro.generoLivroEdita}
                                onChange={handleChangeLivroEdita}
                            />
                            <input className='input-number' type="number"
                                placeholder='Páginas'
                                name='quantidadePaginasEdita'
                                value={editaLivro.quantidadePaginasEdita}
                                onChange={handleChangeLivroEdita}
                            />

                        </div>

                        <button className='btn-edita'onClick={handleSubmitEdita} >Editar</button>
                        <button onClick={() => setFormulario('RECEBE')} className='btn-cancela'>Cancela</button>
                    </div>
                </div>

            )}

        </>
    )
}

export default form