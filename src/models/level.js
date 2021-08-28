const path = require("path");
const fs = require("fs");

const modelLevel = {
    directory: path.resolve(__dirname, "../data", "levels.json"),
    levelStorage: path.resolve(__dirname, "../../public/updates/levels"),
    all: () => JSON.parse(fs.readFileSync(modelLevel.directory)),
    one: id => modelLevel.all().find(element => element.id == id),
    filter: (field,value) => modelLevel.all().filter(element => element[field] == value),  //metodo search y exist
    search: (field,value) => modelLevel.all().find(element =>element[field] == value),
    exist: (field,value) => modelLevel.search(field,value) != undefined,
}

module.exports = modelLevel
