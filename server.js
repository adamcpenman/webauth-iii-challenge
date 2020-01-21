const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const UsersRouter = require("./users/users-router")
const AuthRouter = require("./auth/auth-router")


const server = express()
server.use(helmet())
server.use(express.json())
server.use(cors())

server.use("/api/users", UsersRouter);
server.use("/api/auth", AuthRouter)

server.get("/", (req, res) => {
    res.send("WEBAUTH III CHALLENGE")
})

module.exports = server