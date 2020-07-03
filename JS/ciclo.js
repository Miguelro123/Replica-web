function getRandom() {
  return Math.floor(Math.random() * 100);
}

var randomNumber = getRandom();
var x = 1;

while(randomNumber != 50){
    randomNumber = getRandom();
    x ++;
}

console.log("EL numero 50 lo encontro despues de " + x + " veces")
