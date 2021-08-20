const path = require("path");
const fs = require("fs");

const model = module.exports = {
    directory: path.resolve(__dirname, "../data", "homeworks.json"),
    all: () => {
        const file = fs.readFileSync(model.directory);
        return JSON.parse(file);
    },
    one: (id) => {
        return model.all().find(element => element.id == id);
    }
}