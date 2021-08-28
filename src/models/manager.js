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

}

module.exports = model