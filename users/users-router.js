const router = require("express").Router()

const Users = require("./users-model")
const restricted = require("../middlewear/restricted")

router.get('/', restricted, (req, res) => {
    // console.log(restricted, "restricted")
    Users.find()
        .then(users => {
            res.json(users);
        })
    .catch(err => res.send(err));
})

module.exports = router