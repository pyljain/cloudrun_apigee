const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080

const run = () => app.listen(PORT, () => console.log('Server running'))

app.get('/', (req, res) => {
  res.end("Response from Cloud Run")
})

run()