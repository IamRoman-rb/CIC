const path = require ('path');
const fs = require ('fs');

module.exports = (req,res,next) => {

    const styles = [];
    let elements = req.url.split('/') // toma la url que pasa como string y con split lo que hace es pasar a array el string. 
    elements = elements.filter(element => String(element).trim().length > 0 && !String(element).trim().includes("css")) // filtra el resultado de split y elimina aquellos elementos que lleguen vacios
    if(elements.length > 0){
        elements.forEach(element => {
            let file = path.resolve(__dirname,"../../public/css",element+".css");
            if(fs.existsSync(file)){
                styles.push(element)
            }
        })
    } else{
        styles.push("index")
    }
    console.log("styles", styles)
    res.locals.styles = styles

    next()
}