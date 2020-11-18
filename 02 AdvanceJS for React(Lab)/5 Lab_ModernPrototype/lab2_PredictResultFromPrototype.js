//สร้าง object rabbit ด้วย new keyword
function Rabbit(name) {
    this.name = name;

}
Rabbit.prototype.sayHi = function() {
  alert(this.name);
};
  
let rabbit = new Rabbit("Rabbit");
console.log(Object.keys(rabbit)); // ใน  rabbit มีแค่ 1 key ชื่อ name
console.log(rabbit.name)
console.log(Object.keys(Rabbit)); // ใน  Rabbit ไม่มี key ใดๆ

//คำสั่งทั้งหมดนี้ทำงานเหมือนกันหรือไม่   // ไม่เหมือน 

rabbit.sayHi();
//คาดการณ์ Rabbit  -- ที่ถูกต้องคือ Rabbit -- เรียกใช้ sayHi จาก prototype ที่มีร่วมกัน 

Rabbit.prototype.sayHi(); 
//คาดการณ์ Rabbit -- ที่ถูกต้องคือ undefined -- เพราะ this ไม่มี object ให้เรียก ,Rabbit เป็นเพียงฟังก์ชันที่ใช้สร้าง object

Object.getPrototypeOf(rabbit).sayHi(); 
//คาดการณ์ rabbit -- ที่ถูกต้องคือ undefined -- เพราะ Object.getPrototypeOf(rabbit) === Rabbit.prototype
//console.log(Object.getPrototypeOf(rabbit) === Rabbit.prototype); // true

rabbit.__proto__.sayHi(); //
//คาดการณ์ rabbit  --ที่ถูกต้องคือ undefined --เพราะตัว prototype ไม่มี object ให้ this เรียกใช้

// ตอนคิดข้อนี้มึนคิดว่ามันจะแสดงชื่อ object ที่เป็น rabbit จริงๆแล้วมันแสดง Rabbit ที่เป็น value ของ key name