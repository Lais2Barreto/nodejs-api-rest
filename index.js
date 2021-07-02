const express = require('express') //modo como chamamos os módulos do express; como string pq é uma biblioteca

//criando app do servidor
const app = express()

//subir pro servidor na porta 3000
app.listen(3000, () => console.log('servidor rodando na porta 3000'))

//cannot get / = pq não criamos rota ainda (no caso a rota /)
//express devolve 2 coisas: requisição que enviamos, e response que estaremos renderizando na tela
app.get('/atendimentos', (req, res) => res.send('Você está na rota de atendimentos e está realizando um GET'))