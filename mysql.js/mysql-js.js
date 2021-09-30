import mysql from "mysql"
import dotenv from "dotenv"

dotenv.config()


const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
})


/*const getStudents =  (lastName) => {
  const query = `SELECT*
                  FROM students 
                  WHERE last_nam LIKE "${lastName}"`

const escapedQuery =  `SELECT*
                      FROM students 
                      WHERE last_name = ?
                      OR last_name =?`

//let escapedLastName = connection.escape(lastName)

connection.query(query, (error,results) => {
  if(error) {
    console.log(error)
  }  
    console.log(results)

})

}

getStudents("Toribio")*/


const createstudent = (student_id,first_name,last_name,email,phone,admission_date) => {
 const query = ` INSERT INTO students (student_id,first_name,last_name,email,phone,admission_date)
 VALUES (${student_id},"${first_name}"","${last_name}","${email}","${phone}"","${admission_date}") `

connection.query(query, (error,results) => {
  if(error) {
    console.log(error)
  }  
    console.log(results)
})
}
createstudent("899", "John", "Silver", "john@gmail.com", "4556789876","2021-09-29" )

connection.end()
