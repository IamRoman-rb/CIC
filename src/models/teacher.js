const path = require("path");
const fs = require("fs");
const levelModel = require("./level");
const courseModel = require("./course");

const model = {
    directory: path.resolve(__dirname, "../data", "teachers.json"),
    all: () => JSON.parse(fs.readFileSync(model.directory)),
    one: id => model.all().find(element => element.id == id),
    allWidthExtras: () => model.all().map(element => Object.assign(element, {
        levels: element.levels.map(level => levelModel.one(level)),
        courses: element.courses.map(course => courseModel.oneWidthExtra(course))
    })), 
    oneWidthExtra: id => model.allWidthExtras().find(element => element.id == id),
    filterByField: (field, value) => model.allWidthExtras().filter(element => element[field] == value),
    search: (field, value) => model.allWidthExtras().filter(element => element[field].toLowerCase().includes(value.toLowerCase())),
    nextId: () => model.all().length > 0 ? model.all().reduce((max, element) => element.id > max ? element.id : max, 0) + 1 : 1,
    write: data => fs.writeFileSync(model.directory, JSON.stringify(data, null, 4)),
    remove: id =>  model.write(model.all().filter(element => element.id != id)),
    add: data => model.write(model.all().concat({...data,id: model.nextId()})),
    update: (id, data) => model.write(model.all().map(element => element.id == id ? {...element, ...data} : element))
}

console.log(model.oneWidthExtra(1));


module.exports = model;