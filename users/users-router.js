const router = require("express").Router()

const Users = require("./users-model")
const {restricted} = require("../middlewear/restricted")
const {verifyDepart} = require("../middlewear/verify-department")

router.get('/', restricted, async (req, res, next) => {
    try {
const users = await Users.find()

const { department } = req.token
console.log(department)
const vDepart = users.filter(user => 
    user.department === department
)
res.json(vDepart) 
    } catch (err){
            next(err)
    }
})
// router.get('/', restricted, (req, res, next) => {
//     // console.log(restricted, "restricted")
//     Users.find()
//         .then(users => {
//             res.json(users);
//         })
//     .catch(err => res.send(err));
// }, [])

// function checkRole(department) {
//     return function(req, res, next) {
//         if (req.token && department === req.token.department) {
//             next()
//         } else {
//             res.status(403).json({ message: "poopoo"})
//         }
//     }
// }

module.exports = router