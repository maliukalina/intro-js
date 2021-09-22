const students = [
  "John", "Alina", "Dariel", "Manny", "Amir", "Sebas" , "Dilma",
{instructors: ["Vitoria", "Daniel", "Jonathan"]},
{hours: 400},
]


students.push ("Diana")
students.push("Angie")

students.shift() //removes the first one
students.unshift("Krysstofer") //adds at the beginning


const amount = students.length

function whatever() {
  if(amount<12) {
    console.log("not enough items", amount)
  } else {
    console.log("just enough items" , amount)
  }
}
whatever() // this is how we call a function

function addToArrey(newStudent) {
  students.push(newStudent)
  console.log(students)
}
 addToArrey("Emily")
 