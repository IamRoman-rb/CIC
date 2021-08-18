const path = require("path");
const fs = require("fs");
// const files = require("./file");

module.exports = {
    directory: path.resolve(__dirname, "../data", "homewordks.json"), // en el modelos no hace arrow function EDUARDO VIRGILIO TE AMO 8/8/21
    all: function (req, res){
        const file = fs.readFileSync(this.directory);
        return JSON.parse(file);
    },
    one: function (id) {
        return this.all().find(element.id == id);
    },
    oneWithExtra: function (id) {
        return this.allWithExtra().find(element => element.id == id);
    }
}