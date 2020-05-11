///home/pika/mongodb/bin/mongod --dbpath=/home/pika/mongodb-data
const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

app = express()
port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up and running at port', port)
})

