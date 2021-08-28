const path = require("path");
const fs = require("fs");

const model = {
    directory: path.resolve(__dirname, "../data", "roles.json"),
    all: () => JSON.parse(fs.readFileSync(model.directory)),
    one: id => model.all().find(element => element.id == id)
}

module.exports = model