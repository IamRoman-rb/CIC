const path = require("path");
const fs = require("fs");
const levelModel = require("./level");

const model = {
    directory: path.resolve(__dirname, "../data", "courses.json"),
    all: function () {
        const file = fs.readFileSync(this.directory);
        return JSON.parse(file);
    },
    allWidthExtra: function (id) {
        return this.all().map(course => {
            course.level = levelModel.one(course.level);
            return course
        })
    },
    one: function (id) {this.all().find(element => element.id == id)},
    oneWidthExtra: function (id) {this.allWidthExtra().find(element => element.id == id)},
    filter: function (prop,value) {
        return this.allWidthExtra().filter(course => course[prop] == value)
    }, 
    search: function (prop,value) {
        return this.allWidthExtra().find(course => course[prop] == value)
    }
}

console.log(model.all());

module.export = model