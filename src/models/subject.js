const path = require("path");
const fs = require("fs");

const modelLevel = require("./level");
const modelCourse = require ("./course");

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
    /* filterByLevel: level => model.allWithExtras().filter(subject => subject.level == level) */
    /* findOne: (field, value) => model.allWithExtras().filter(element => element[field] === value) */
}
/* 
subjects = [{
    level: 'secundaria',
    ID: '2'
  } 
]

filter(subjects => subjects.level.includes(id))
 */


console.log(model.filterByLevel(2));

module.exports = model;