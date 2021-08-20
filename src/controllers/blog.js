const blog = {
    index: (req,res) => {
        return res.render("blog/index",{})
    },
    create: (req,res) => {
        return res.render("blog/create",{})
    },
    edit: (req,res) => {
        return res.render("blog/edit",{})
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