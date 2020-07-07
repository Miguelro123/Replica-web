var cats = [
  {
    color: 'blue',
    name: 'gru',
    age: 5
  },
  {
    color: 'red',
    name: 'chiqui',
    age: 15
  },
  {
    color: 'green',
    name: 'gru',
    age: 25
  }
];

function isOver20(cat){
    return cat.age > 20
}

var someOver20 = cats.some(isOver20);
console.log(someOver20)
