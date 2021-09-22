const students = [
  {
    firstName: "Alina",
    lastName: "Maliuk",
    age: 33,
    gender: "female",
  },
  {
    firstName: "Dariel",
    lastName: "Mera",
    age: 32,
    gender: "male",
  },
  {
    firstName: "Krystofer",
    lastName: "Gil",
    age: 30,
    gender: "male",
  },
  {
    firstName: "Gabby",
    lastName: "Taylor",
    age: 22,
    gender: "female",
  },
]

function returnsFullName(person) {
  const fullName = `${person.firstName} ${person.lastName} `
  //const fullName = person.firstName + " " + person.lastName
  console.log(fullName)
}

for(let i=0; i< students.length; i++) {
  returnsFullName(students[i])

}


