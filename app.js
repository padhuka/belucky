const express = require('express')
const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()
const logFile = path.join(__dirname, 'myLogFile.log')
app.use(bodyParser.json())
// Middleware to log requests
// app.use((req, res, next) => {
//   const log = `${new Date().toISOString()} - ${req.method} ${req.url} ${req.body}\n`
//   fs.appendFile(logFile, log, (err) => {
//     if (err) {
//       console.error('Error writing to log file', err)
//     }
//   })
//   next()
// })

// Sample endpoint
app.get('/', (req, res) => {
  res.send('Hello World')
})

// Define a POST route
app.post('/generate-log', (req, res) => {
  //   res.setHeader('Access-Control-Allow-Credentials', 'true')
  //   if (req.headers.origin && ['http://localhost:3000', 'http://localhost:3001'].includes(req.headers.origin)) {
  //     res.setHeader('Access-Control-Allow-Origin', req.headers.origin)
  //   }
  const logContent = req.body.logContent // Access the data sent in the request body
  console.log(logContent)
  const dataLog = logContent

  // Process the data as needed
  // ...
  const log = `${new Date().toISOString()} - ${req.method} ${req.url} ${dataLog}\n`
  fs.appendFile(logFile, log, (err) => {
    if (err) {
      console.error('Error writing to log file', err)
    }
  })
  //   next()

  res.send('Data received successfully!')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
