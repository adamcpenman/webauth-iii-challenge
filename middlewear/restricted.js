const jwt = require("jsonwebtoken")

const restricted = (req, res, next) => {
    const {authorization} = req.headers
    console.log(authorization, "auth")

    if (authorization) {
        const secret = process.env.JWT_SECRET || "It's hidden in the Chamber of Secrets";
        jwt.verify(authorization, secret, function (err, decodeToken){
            if (err) {
                res.status(401).json({ message: "Stupify, Invalid Token"})
            } else {
                req.token = decodeToken
                next()
            }
        })
    } else {
        res.status(400).json({ message: "Reducto! Try again muggle"})
    }
}

module.exports = {
    restricted
}