const controller = {
    index: (req,res) => {
        return res.render("homeworks/index",{})
    },
    create: (req,res) => {
        return res.render("homeworks/create",{})
    },
    edit: (req,res) => {
        return res.render("homeworks/edit",{})
    },
    store: (req,res) => {
        return res.send({data:req.body})
    },
    update: (req,res) => {
        return res.send({data:req.body})
    },
    remove: (req,res) => {
        return res.send({data:req.body})
    }
}

module.exports = controller
