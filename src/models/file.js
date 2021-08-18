const path = require("path");
const fs = require("fs");
const homework = require("./homewordks");

module.exports = {
    directory: path.resolve(__dirname, "..data", "files.json"),
    all: (req, res) => {
        const file = fs.readFileSync(this.directory);
        return JSON.parse(file);
    },
    // allWithExtra: (req, res) => {
    //     return this.all().map(element => {
    //         element.imagen = element.imagen.map(imageId => imagen)
    //     })
    // }
    one: (id) => {
        return this.all().find(element => element.id == id);
    },
    oneWithExtra: (id) => {
        return this.allWithExtra().find(element => element.id == id)
    }
}