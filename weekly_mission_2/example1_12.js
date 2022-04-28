const scores12 = [
    { name: 'A', score: 15 },
    { name: 'M', score: 80 },
    { name: 'E', score: 30 },
    { name: 'M', score: 85 },
    { name: 'J', score: 100 },
  ];
const menor = scores12.find((sc)=>sc.score<40);
console.log('Este numero es el primero menor a 40: ',menor)