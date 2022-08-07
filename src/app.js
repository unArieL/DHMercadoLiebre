const express = require('express')
const path = require('path')
const app = express()
const mainRoutes = require('./routes/mainRoutes')

app.use(express.static('../public'))
app.set('puerto', process.env.PORT || 3000)
app.set('view engine', 'ejs')

app.listen(app.get('puerto'), () => {
    console.log(`Servidor funcionando ${app.get('puerto')}`)
})

app.use('/', mainRoutes)