const express = require('express')
const app = express()
const productRoutes = require('./routes/product');

require('./db')

app.use(productRoutes)
app.listen(3000)

console.log('Server on port', 3000)