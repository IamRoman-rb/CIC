const path = require("path");
const fs = require("fs");
const levelModel = require("./level");
const curseModel = require("./curse");
const subjectModel = require("./subject");
const model = {
    directory: path.resolve(__dirname, "../data", "teachers.json"),
    all: () => JSON.parse(fs.readFileSync(model.directory)),
    one: (id) => model.all().find(element => element.id == id),
    allWidthExtras: () => model.all().map(element => Object.assign(element, {
        levels: levels.map(level => levelModel.one(level)),
        subjects: subjects.map(subject => subjectModel.one(subject)), 
        curses: curses.map(curse => curseModel.one(curse))})), 
    filterByField: (field, value) => model.allWidthExtras().filter(element => element[field] == value),
    search: (field, value) => model.allWidthExtras().filter(element => element[field].toLowerCase().includes(value.toLowerCase())),
    nextId: () => model.all().length > 0 ? model.all().reduce((max, element) => element.id > max ? element.id : max, 0) + 1 : 1,
    write: data => fs.writeFileSync(model.directory, JSON.stringify(data, null, 4)),
    remove: (id) =>  model.write(model.all().filter(element => element.id != id)),
    add: (data) => model.write(model.all().concat({...data,id: model.nextId()})),
    update: (id, data) => model.write(model.all().map(element => element.id == id ? {...element, ...data} : element))
}

module.exports = model;