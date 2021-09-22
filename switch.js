const fruit = "kiwi"

switch(fruit) {
  case "kiwi" :
    console.log(fruit, "is green")
    break
  case "orange" :
  case "mango" :
    console.log(fruit, "is orange") 
    break
  case "lemon" :
  case "banana" :
    console.log(fruit, "is yellow") 
    break
  case "apple" :
    console.log(fruit, "is red") 
    break
    default:
      console.log("I have no idea what that fruit look like")
}