//let instructor = {firstName:"Jonathan", lastName:"Sanchez", city:"Boca Raton"}

//console.log(instructor)
let instructor = {
  firstName: "Jonathan",
  lastName: "Sanchez",
  city: "Boca Raton",
  family: {
    wife: "Claudia",
    d1: "Mia",
    d2: "AnnaLee",
    pets: ["cat","fish","cow"]
  },
  education: {
    university: "fiu" ,
    bootcamp: "Boca Code",
  },
  
}
console.log("firstName", instructor.firstName)
console.log("Full name", instructor.firstName + " " + instructor.lastName)
console.log( instructor.education.university.toUpperCase())
