function getRandom() {
  return Math.floor(Math.random() * 100);
}
var randomNumber = getRandom();
var x = 0;
while(randomNumber <= 50){
    randomNumber++
    x ++
}

console.log("getRandom se repite" + " " + x)
