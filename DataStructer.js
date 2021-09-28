 let activities = [
  ["work", 8],
  ["eat", 2],
  ["sleep", 7]
 ]

function firstElementOfArray(arr) {

  console.log("first element of array", arr[0][1] + " of " + arr[0][0])  
}
 firstElementOfArray(activities)

function lastElementOfArray(arr) {
  let lastrow = arr.length -1 
  let lastvalue = arr [lastrow].length -1
  console.log("last element of array", arr[lastrow] ) 
}
 lastElementOfArray(activities)

 /*function indexElementOfArray(arr) {
  for (i=0; i<activities.length; i++) {

    var innerArrayLength = activities[i].length
    for (let j = 0; j < innerArrayLength; j++) {
      console.log('[' + i + ',' + j + '] = ' + activities[i][j]
  }
}
 }
  
  console.log(" index element of array", arr[0][1] + " of " + arr[0][0])  
}
 indexElementOfArray(activities)
 

 
 /*function lastElementOfArray(arr) {
  let last = arr[arr.length -1]
  console.log("last element of array", last )  
}
 lastElementOfArray(array)

 function givenElementOfArray(arr) {

  for (i=0; i<arr.length; i++) {

  console.log("given element of array", arr[i])  
}
 }
 givenElementOfArray(array)

 function indexElementOfArray(arr) {
  let inde = indexOf
  console.log("first element of array", arr[0])  
}
 indexElementOfArray(arr)*/