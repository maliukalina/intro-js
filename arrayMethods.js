const fruits = [ "kiwi", "lime", "apple", "banana", "orange", "grapes"]

function getNextFruit() {
const nextFruit = fruits.shift()  //FIFO(queve)  .pop LIFO(stack)
console.log(" you get a ", nextFruit)
console.log("there are", fruits.length, "fruits left")

}
const numloops = fruits.length
for(i =0; i<numloops; i++) {
  
  getNextFruit()
}
