const path = require("path");
const fs = require("fs");

const model = {
    directory: path.resolve(__dirname, "../data", "students.json"),
    all: () =>JSON.parse(fs.readFileSync(model.directory)),
    one: (id) => model.all().find(element => element.id == id),
    search: (field, value) => model.all().filter(element => element[field].toLowerCase().includes(value.toLowerCase())),
    count: () => model.all().length > 0 ? model.all().length : 0,
    generate: () => model.count() > 0 ? model.one(model.count() - 1).id + 1 : 1,
    write: data => fs.writeFileSync(model.directory, JSON.stringify(data, null,2)),
    create: data => {
        let students = model.all()
        let student = {
            id: model.generate(),
            ...data,
            role: 6,
            active: true
        }
        students.push(student)
        model.write(students)
        return student;
    },
    modify: (id,data) => {
        let students = model.all();
        let studentSelected = model.one(id);
        model.write(students.map(student => student.id === studentSelected.id ? Object.assign(student,{...data}): student))
    },
    disabled: id => {
        let students = model.all();
        let studentSelected = model.one(id);
        model.write(students.map(student => student.id === studentSelected.id ? Object.assign(student,{active:false}): student))
    }

}

module.exports = model