const express = require('express')
const app = express()
const path = require('path')

app.use(express.static('public'))
app.set('puerto', process.env.PORT || 3000)

app.listen(app.get('puerto'), () => {
    console.log('Servidor funcionando...')
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'))
})

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'))
})