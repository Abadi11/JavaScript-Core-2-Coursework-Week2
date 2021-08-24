function splitTheBill(x) {
    //code away...
  let objectKey = Object.keys(x);
x[objectKey[0]] = x[objectKey[0]] - x[objectKey[1]];
 x[objectKey[2]] = x[objectKey[2]] - x[objectKey[1]];
x[objectKey[1]] = x[objectKey[1]] - x[objectKey[1]];

//console.log(objectKey)
  //objectKey.forEach((key) => {
    //x[key] = x[key] - x[objectKey[1]];
  //})
 return x
 
}

console.log(splitTheBill({A: 20, B: 15, C: 10}))
