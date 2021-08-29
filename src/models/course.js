const path = require("path");
const fs = require("fs");
const levelModel = require("./level");

const model = {
    directory: path.resolve(__dirname, "../data", "courses.json"),
    all:  () => JSON.parse(fs.readFileSync(model.directory)),

    allWithExtras:() => model.all().map(course => Object.assign(course,{
        level: levelModel.one(course.level)
    })),
    one: id => model.all().find(element => element.id == id),
    oneWithExtras: id => model.allWithExtras().find(element => element.id == id),
    filterByField: (prop,value) => model.allWithExtras().filter(course => course[prop] == value), 
    searchByField: (field,value) => model.allWithExtras().find(course => course[field] == value)
}

module.exports = model