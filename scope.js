let globalVar = "global variable" // availiable everywhere

function badFunction() {
  console.log(" I am bad...")
  console.log(globalVar)
  globalVar = "OOps, I broke it"
  console.log(globalVar)
  const functionVar  = "function variable"
  console.log(functionVar)
  }
    console.log(globalVar)
    //console.log(functioVar)
      
    badFunction()
    console.log(globalVar)
    //console.log(functioVar)

    
  


