let array = ["mango", "dorian", "jackFruit", "spanish lime", "water melon", "coton candy grapes", 123]
const fruit = "dorian"


function findFruitIndex (arr,item) {
  let indexNumber = -1
  for (i=0; i<arr.length; i++) {
   
    if (arr[i] === item) {
      indexNumber = i
    }
  }
  return indexNumber
}

console.log("Index of fruit dorian is ", findFruitIndex(array,fruit))

//let newarray =a rray.unshift("kiwi")
//onsole.log(newarray)

//let remove = array.pop()
//console.log(remove)
 
//const fruit1 = "jackFruit"

//function removeJack(arr,item) {
//for (i=0; i<arr.length; i++) {

  //if (arr[i] === item) {
  //  remarr = arr.splice(i)
 // }
//}
//return arr
//}

console.log(array.splice(2,1))
console.log(array)



   