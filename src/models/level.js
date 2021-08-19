const path = require("path");
const fs = require("fs");

const modelLevel = {
    directory: path.resolve(__dirname, "..data", "levels.json"),
    levelStorage: path.resolve(__dirname, "../../public/updates/leves"),
    all: () => {
        const file = fs.readFileSync(modelLevel.directory);
        return JSON.parse(file);
    },
    one: (id) => {
        return modelLevel.all().find(element => element.id == id);
    },
    filter: (id) => modelLevel.all().filter(element => element.id == id),  //metodo search y exist
    search: (id) => modelLevel.all().find(element => element.id == id),
    exist: () => modelLevel.all().exist(element => element.id == id)
    // checked: (id) => fs.existsSync(path.resolve(modelLevel.levelStorage, id)),
}
module.exports = modelLevel
