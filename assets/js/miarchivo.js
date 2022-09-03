function Division() {
    
}
let nroAlumno = parseInt(prompt (`Ingrese cantidad de alumnos`))
let agregarMas = ``

do{
    for (let index= 1; index <= nroAlumno; index++){
        let apellidoYnombre = prompt (`Ingrese nombre y apellido del alumno`)
        let notaAlumno = parseInt(prompt(`Ingrese nota del alumno`))
        /* if (notaAlumno >= 7) {
            alert(`El alumno ` + index + ` de nombre ${apellidoYnombre} esta aprobado`)
        }else{
            alert(`El alumno ` + index + ` de nombre ${apellidoYnombre} esta desaprobado`)
        } */
        console.log(aprobados(apellidoYnombre, notaAlumno))
    }
    agregarMas = prompt(`Desea agregar otros cursos? Responder con si o no`)
    if(agregarMas.toLowerCase() == `si`){
        nroAlumno = prompt(`Ingrese nueva cantidad de alumnos`)
    }
} while (agregarMas == `si`);
if (agregarMas.toLowerCase() == `no`) {
    alert(`Hasta la proxima.`)
}

function aprobados(apellidoYnombre, notaAlumno) {
    if (notaAlumno >10) {
        return `Nota no existente`
    }else if (notaAlumno >=7){
        return `El/La alumno/a `+ apellidoYnombre + ` esta aprobada`
    }else{
        return `El/La alumno/a `+ apellidoYnombre + ` esta desaprobada`
    }
}