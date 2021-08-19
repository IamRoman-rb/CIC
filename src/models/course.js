const path = require("path");
const fs = require("fs");
const levelModel = require("./level");

const model = {
    directory: path.resolve(__dirname, "../data", "courses.json"),
    all:  () => JSON.parse(fs.readFileSync(model.directory)),

    allWidthExtra:() => model.all().map(course => Object.assign(course,{
        level: levelModel.one(course.level)
    })),
    one: id => model.all().find(element => element.id == id),
    oneWidthExtra: id => model.allWidthExtra().find(element => element.id == id),
    filterByField: (prop,value) => model.allWidthExtra().filter(course => course[prop] == value), 
    searchByField: (field,value) => model.allWidthExtra().find(course => course[field] == value)
}

module.export = model