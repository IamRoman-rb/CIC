const path = require("path");
const fs = require("fs");

module.exports = {
    directory: path.resolve(__dirname, "..data", "teachers.json"),
    all: () => {
        const file = fs.readFileSync(this.directory);
        return JSON.parse(file);
    },
    one: (id) => {
        return this.all().find(element => element.id == id);
    }
}