

const verifyDepart = (department) => {
    return function (req, res, next) {
        if (req.token && department === req.token.department) {
            next()
        } else {
            res.status(403).json({
                message: "Riddikulus - you do not belong here"
            })
        }
    }
}

module.exports = {
    verifyDepart
}

