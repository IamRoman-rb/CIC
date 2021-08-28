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
    filterByLevel: level => model.allWithExtras().filter(subject => subject.level.find(element => element.id === level) != null),
}
/*

subject{
    level = [
        {
            level: 'secundaria',
            ID: '2'
        } 
    ]
}

subject{
    level = [2]
}

filter(subject => subject.level.includes(id))
 */


console.log(model.filterByLevel(1));

module.exports = model;