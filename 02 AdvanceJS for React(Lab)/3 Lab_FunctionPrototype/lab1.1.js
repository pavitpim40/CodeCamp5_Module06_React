//------------------- 1.จากโค๊ดต่อไปนี้มีการสร้าง new Rabbit() ขึ้นมา ------------------//
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

//Rabbit.prototype = {eats : "carrot before"}; // ทดสอบตั้งค่า prototype ใหม่ก่อนที่จะใช้ new

let rabbit = new Rabbit();
//alert( rabbit.eats ); // true

//----------------- 2.ทำการ assign ค่า prototype ของ Rabbit ใหม่ ------------------------------//

Rabbit.prototype = {}; //บรรทัดนี้เป็นการ assign ค่าใหม่ให้ prototype ของ Rabbit หลังใช้ new
//console.log(`${Rabbit.prototype.eats}`); // undefined เข้าใจว่าเหมือน Rabbit.prototype ย้าย reference ไปแล้ว



//-----------------3.ถ้ามีการ alert ในบรรทัดดังกล่าวจะได้อะไรออกมา --------------------//

//alert( rabbit.eats ); // true
console.log(`${rabbit.eats}`); // true

// ยังคงแสดงผลเป็น true เพราะ rabbit ถูกสร้างขึ้นมาก่อน Rabbit.prototype()={}
// ทำให้ยังคงใช้ prototype เก่าของ Rabbit









