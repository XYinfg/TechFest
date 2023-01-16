const express = require('express')
const app = express()
const routesHandler = require('./routes/handler.js')

app.use('/', routesHandler)

app.get('/api', (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree"]})
    })

app.listen(5000, () => { // backend server with express
    console.log("Server is running on port 5000") 
})