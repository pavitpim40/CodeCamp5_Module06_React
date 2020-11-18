let head = {
    glasses: 1
};

let table = {
    pen: 3 , 
    __proto__ : head
};
  
let bed = {
    sheet: 1,
    pillow: 2 ,
    __proto__ : table
};
  
let pockets = {
    money: 2000 ,
    __proto__ : bed
};
  
console.log(`${pockets.money}`) // expect 2000 

console.log(`${pockets.sheet}`) // expect 1 
console.log(`${pockets.pillow}`) // expect 2 

console.log(`${pockets.pen}`) // expect 3 

console.log(`${pockets.glasses}`) //expect 1