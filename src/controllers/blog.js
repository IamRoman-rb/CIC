const blog = {
    index: (req,res) => {
        return res.render("blogs/index",{})
    },
    show: (req,res) => {
        return res.render("blogs/detail",{})
    },
    create: (req,res) => {
        return res.render("blogs/create",{})
    },
    edit: (req,res) => {
        return res.render("blogs/edit",{})
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

module.exports = blog