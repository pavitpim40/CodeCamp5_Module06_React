function Rabbit(leg) {
    this.legs = 4
}
Rabbit.prototype.eats = "carrot"

let obj = new Rabbit(); // ตอนนี้ obj เป็น object แล้ว
console.log(`${obj}`);
console.log(`${obj.legs}`); // 4
console.log(`${obj.eats}`); // true
console.log(`${obj.constructor}`); // obj.constructor มีค่าเท่ากับ function Rabbit();   

//ถ้าเราต้องการสร้างใช้ constructor ของ obj เราสามารถเขียนแบบนี้ได้ไหม ?
let obj2 = new obj.constructor(); // เขียนได้ (เหตุผลจาก line 5)          

console.log(`${obj2}`); // object 
console.log(`${obj2.legs}`); // 4 
console.log(`${obj2.eats}`); // carrot
console.log(`${obj2.constructor}`); // obj2.constructor มีค่าเท่ากับ function Rabbit();   

// obj2 = new obj.constructor()  ได้ค่าเหมือน obj1 ทุกอย่าง
// obj2 = new obj; รันไม่ผ่าน
// obj2 = obj.constructor()


// เข้าถึง eats ไม่ได้แล้ว ถ้าสร้างด้วย let obj2 = obj.constructor();       #######
// เข้าถึง eats ได้ถ้าสร้างด้วย let obj2 = new obj.constructor();   ######
// เข้าถึง eats ได้ถ้าสร้างด้วย let obj2 = new Rabbit();                  ######











