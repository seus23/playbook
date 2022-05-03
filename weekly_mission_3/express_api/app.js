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

//Endpoint que regresa un explorer
app.get('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers GET requests ${new Date()}`)
    console.log(`Getting explorer with id ${req.params.id}`)
    const explorer = {id: 1, name:"seus23"}
    res.status(200).json(explorer)
})

//Endpoint que crea un explorer
app.post('/v1/explorers', (req,res) => {
    console.log(`Api Explorers POST request ${new Date()}`)
    const requestBody = req.body //parametros de un cliente
    res.status(201).json({message: "Created"})
})

//Endpoint que actualiza un explorer
app.put('/v1/explorers/:id', (req,res) => {
    console.log(`Api explorers PUT request ${new Date()}`)
    console.log('Update explorer with id ${req.params.id}')
    const requestBody = req.body //parametro de un cliente
    res.status(200).json({message: "Updated!"})
})

//Endpoint que elimina un explorer
app.delete('/v1/explorers/:id', (req,res) => {
    console.log(`ApiExplorers DELETE request ${new Date()}`)
    console.log(`Dñete explorer with id ${req.params.id}`)
    const requestBody = req.body //parametro de un cliente
    res.status(200).json({message: "Deleted"})
})

//con esto inicializamos esta app
app.listen(port, () => {
    console.log(`Example app listening on por ${port}`)
})