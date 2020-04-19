const fs = require('fs');
let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    // console.log(data);
    // console.log(listadoPorHacer);
    
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar')
    })
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json')
    } catch (error) {
        listadoPorHacer = [];
    }
}

const listar = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (description, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.description === description)
    if (index >=0 ) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (description) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.description === description)
    console.log(index);
    console.log(description);
    
    if (index >= 0) {
        listadoPorHacer.splice(index, 1)
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const crear = (description) => {
    cargarDB();
    let porHacer = {
        description,
        completado: false
    }
    listadoPorHacer.push(porHacer);
    guardarDB(); 
    return porHacer;
    // cargarDB();
}

module.exports = { crear, listar, actualizar, borrar }