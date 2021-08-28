const controller = {
    
    login: (req, res) => {
        return res.render("users/login")
    },
    register: (req, res) => {
        return res.render("users/register")
    },
    profile: (req, res) => {
        return res.render("users/profile")
    }
}

module.exports = (controller);