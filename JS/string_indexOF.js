var one = "es una prueba";
var two = "es otra prueba";
var three = "prueba";

if (one.indexOf(two) != -1) {
  console.log("'" + two + "'está contenido dentro de'" + one + "'");
}

if (one.indexOf(three) != -1) {
  console.log("'" + three + "'está contenido dentro de'" + one + "'");
}

if (two.indexOf(one) != -1) {
  console.log("'" + one + "'está contenido dentro de'" + two + "'");
}

if (two.indexOf(three) != -1) {
  console.log("'" + three + "'está contenido dentro de'" + two + "'");
}

if (three.indexOf(one) != -1) {
  console.log("'" + one + "'está contenido dentro de'" + three + "'");
}

if (three.indexOf(two) != -1) {
  console.log("'" + two + "'está contenido dentro de'" + three + "'");
}
