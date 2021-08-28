const path = require("path");
const fs = require("fs");

const modelLevel = require("./level");
const modelCourse = require ("./course");
const modelTeacher = require("./teacher");

const model = {
    directory: path.resolve(__dirname, "../data", "subjects.json"),
    all: () => {
        const file = fs.readFileSync(model.directory);
        return JSON.parse(file);
    },
    one: id => {
        return model.all().find(element => element.id == id);
    },
    allWithExtras: () => model.all().map(element => Object.assign(element,{
        level: element.level.map(level => modelLevel.one(level)),
        courses: element.courses.map(course => modelCourse.one(course))
    })),
    oneWithExtras: id => model.allWithExtras().find(element => element.id === id),
    filterByLevel: level => model.allWithExtras().filter(subject => subject.level.find(element => element.id === level) != null),
    filterByCourse: course => model.allWithExtras().filter(subject => subject.courses.find(element => element.id === course) != null),
    filterByTeacher: subject => modelTeacher.allWithExtras().filter( teacher => teacher.subjects.filter(element => element.id === subject).length != 0),
}


console.log(model.filterByTeacher(2));

module.exports = model;