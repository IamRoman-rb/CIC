const path = require("path");
const fs = require("fs");
const modelRole = require("./role");
const modelLevel = require("./level");
const model = {
    directory: path.resolve(__dirname, "../data", "managers.json"),
    all: () => JSON.parse(fs.readFileSync(model.directory)),
    one: id =>  model.all().find(element => element.id == id),
    allWidthExtras: () => model.all().map(element => Object.assign(element,{
        role: modelRole.one(element.role),
        level: element.level.map(l => modelLevel.one(l))
    })),
    oneWidthExtra: id => model.allWidthExtras().find(element => element.id === id),
    search: (field, value) => model.allWidthExtras().find(element => element[field].toLowerCase().includes(value.toLowerCase())),
    nextId: () => model.all().length > 0 ? model.all().reduce((max, element) => element.id > max ? element.id : max, 0) + 1 : 1,
    write: data => fs.writeFileSync(model.directory, JSON.stringify(data, null, 4)),
    remove: id =>  model.write(model.all().filter(element => element.id != id)),
    add: data => model.write(model.all().concat({...data,id: model.nextId()})),
    update: (id, data) => model.write(model.all().map(element => element.id == id ? {...element, ...data} : element)),
}

module.exports = model