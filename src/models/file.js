const path = require("path");
const fs = require("fs");
const model = {
    directory: path.resolve(__dirname, "../data", "files.json"),
    storage: path.resolve(__dirname, "../../public/updates/files"),
    all: () => JSON.parse(fs.readFileSync(model.directory)),
    one: id => model.all().find(element => element.id == id),
    filter: (field,value) => model.all().filter(element => element[field] == value),
    search: (field, value) => model.all().find(element => element[field] == value),
    write: data => fs.writeFileSync(model.directory, JSON.stringify(data)),
    nextId: () => model.all().length > 0 ? model.all()[model.all().length - 1].id + 1 : 1,
    check: file => fs.existsSync(path.resolve(model.storage, file)),
    remove: id => {
        const element = model.one(id);
        if (element !== undefined && model.check(element.file)) {
            model.write(model.all().filter(element => element.id != id));
            fs.unlinkSync(path.resolve(model.storage, element.file));
        }
    },
    create: file => {
        let all = model.all();
        if (model.check(file)) {
            let element ={
                id: model.nextId(),
                file: file
            }
            all.push(element);
            model.write(all);
            return element.id;
        }
    }
}


module.exports = model;