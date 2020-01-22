const router = require("express").Router()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const Users = require("../users/users-model")

router.post('/register', (req, res) => {
    let user = req.body
    //hasing the password 2 ^ 10
    const hash = bcrypt.hashSync(user.password, 10)
    user.password = hash

    Users.add(user) 
        .then(saved => {
            res.status(201).json(saved)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

router.post('/login', (req, res) => {
    let { username, password } = req.body

    Users.findBy({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                //assign the token
                const token = assignToken(user)

                //sent the token
                res.status(200).json({
                    token,
                    message: `Welcome to the Magic of Ministry, ${user.username}`
                })
            } else {
                res.status(401).json({ message: 'Wingardium Leviosa, You shall not pass'})
            }
        })
        .catch(error => {
            res.status(500).json(error)
        })
    })

//creates and assign the token
function assignToken(user) {
    const payload = {
        username: user.username,
        department: user.department,
    }

    const secret = process.env.JWT_SECRET || "It's hidden in the Chamber of Secrets";

    const options = {
        expiresIn: "1h"
    }

    return jwt.sign(payload, secret, options)
}

module.exports = router