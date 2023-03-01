const students = [
  {
    name: "Jill",
    lastname: "Doe",
    age: 24,
    year: 3,
    absences: 5,
    average: 7,
  },
  {
    name: "John",
    lastname: "Doe",
    age: 22,
    year: 1,
    absences: 6,
    average: 8,
  },
  {
    name: "Jack",
    lastname: "Doe",
    age: 20,
    year: 2,
    absences: 7,
    average: 6,
  },
  {
    name: "Ryan Jhon",
    lastname: "Ray",
    age: 23,
    year: 2,
    absences: 5,
    average: 7,
  },
  {
    name: "Jane",
    lastname: "Doe",
    age: 20,
    year: 1,
    absences: 3,
    average: 5,
  },
  {
    name: "Jose",
    lastname: "wik",
    age: 21,
    year: 1,
    absences: 2,
    average: 9,
  },
  {
    name: "Dani",
    lastname: "kile",
    age: 19,
    year: 2,
    absences: 3,
    average: 10,
  },
  {
    name: "kevi",
    lastname: "Das",
    age: 25,
    year: 3,
    absences: 10,
    average: 5,
  },
];
/*students.forEach(function (student){
    console.log(student)
});

console.log(students);*/

//students.forEach((student) => {
//console.log(student.name+" "+student.lastname)});

/*students.forEach((student) => {
fullnames.push(student.name+" "+student.lastname)}),

console.log(fullnames),*/

/*students.map(function (student){
    console.log(student)
})*/
/*const names = students.map(student=>student.name+" "+student.lastname)
console.log(names)*/

/*const names = students.map((student) => {
  return {
    fullname: student.name + " " + student.lastname,
    age: student.age,
    year: student.year,
    pass: student.average
  };
});
console.log(names);*/

/*const names = students.map((student) => {
    return {
      name: student.name,
      lastname: student.lastname,
      age:student.age,
      year:student.year,
      title:student.name +" "+student.year
    }
  })
  console.log(names)*/

/*const names = students.map((student) => {
    return {
      name: student.name,
      lastname: student.lastname,
      age:student.age,
      year:student.year,
      title:student.name +" "+student.lastname+" de "+student.year+" es un gil "
    }
  })
  console.log(names)*/

//ES LO MISMO Q://////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*const names = students.map((student) => {
    return {
     ...student,
      title:student.name +" "+student.lastname+" de "+student.year+" es un gil "
    }
  })
  console.log(names)*/

//puedo cambiar los datos

/*const names = students.map((student) => {
    return {
    ...student,
    year: 'Todos REpiten'
}
  })
  console.log(names)*/

//arreglo modificador agregador de datos
/*
const cambio = students.map((student) => {
  return {
    ...student,
    year: 4,
  }
})*/

//const dobleedad = cambio.map((student) => student.age * 2)
///el mismo agreglo metido dentro de todo el arreglo llamado cambio
//seria
/*const dobleedad= cambio.map(student=> ({...student, 
    age: student.age *2 }))

console.log(cambio)
console.log(dobleedad)
*/
//filter//

/*students.filter(function(student){
    console.log(student)
})*/

/*const result = students.filter(function(student){
    console.log(result)
})
no retornaria nada porq no cree ninguna condicion a cumplir
soloun arreglo vacio*/
//filtrar alumnos del curso 3
/*const result = students.filter(student=>student.year===3)
console.log(result)*/
//alumnosmenores a 22 años
/*const result = students.filter(student=>student.age < 22)
console.log(result)*/

const result = students.filter(student=>student.year===3 )
console.log(result)
