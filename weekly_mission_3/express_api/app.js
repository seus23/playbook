//Usando objeto express
const express = require('express')
//App de Express
const app = express()
app.use(express.json()) //Indicamos que usaremos JSON
//puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

//HTTP METHODs
app.get('/v1/explorers', (req, res) => {
    console.log(`Api Explorers GET ALL requests ${new Date()}`)
    const explorer1 = {id: 1, name:"seus1"}
    const explorer2 = {id: 2, name:"seus2"}
    const explorer3 = {id: 3, name:"seus3"}
    const explorer4 = {id: 4, name:"seus4"}
    const explorers = [explorer1, explorer2, explorer3, explorer4]
    res.status(200).json(explorers)
})
//con esto inicializamos esta app
app.listen(port, () => {
    console.log(`Example app listening on por ${port}`)
})