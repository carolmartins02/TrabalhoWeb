//Servidor rodando
const express = require('express')
const app = express()
const cors = require('cors')

app.listen(3000, (err) => {
    if (err) {
        console.log('Erro ao criar servidor !')
        return
    } else {
        console.log('Servidor rodando na porta (3000) !')
    }
})

app.use(express.json())
app.use(cors())


//Conexão bd
const mysql2 = require("mysql2")

const bancoDeDados = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'trabalhoweb',
    port: 3001
})


//Requisicoes

app.get('/recebeLivros', (req, res) => {
    const SQL = 'SELECT * FROM livros'

    bancoDeDados.query(SQL, (err, result) => {
        if (err) {
            console.log(err)

        } else {
            res.send(result)
        }
    })

})

app.post('/adicionaLivro', (req, res) => {
    const { nomeLivro } = req.body;
    const { generoLivro } = req.body;
    const { quantidadePaginas } = req.body;

    const SQL = 'INSERT INTO livros (nomeLivro, generoLivro, paginasLivro) VALUES (?, ?, ?)'

    bancoDeDados.query(SQL, [nomeLivro, generoLivro, quantidadePaginas], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log(result)
        }

    })
})

app.put('/editaLivro', (req, res) => {
    const { id } = req.body;
    const { nomeLivroEdita } = req.body;
    const { generoLivroEdita } = req.body;
    const { quantidadePaginasEdita } = req.body;

    const SQL = 'UPDATE livros SET nomeLivro = ?, generoLivro = ?, paginasLivro = ? WHERE id = ?'

    bancoDeDados.query(SQL, [nomeLivroEdita, generoLivroEdita, quantidadePaginasEdita, id], (err, result) =>{
        if (err) {
            console.log(err)
        } else {
            console.log(result)           
        }
    })

})

app.delete('/deletaLivro/:id', (req, res) => {
    const {id} = req.params;

    const SQL = ' DELETE FROM livros WHERE id = ?'

    bancoDeDados.query(SQL, [id], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log(result)            
        }
    })

})