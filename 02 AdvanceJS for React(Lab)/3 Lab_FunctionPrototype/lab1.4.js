//------------------- 1.จากโค๊ดต่อไปนี้มีการสร้าง new Rabbit() ขึ้นมา ------------------//
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

//delete Rabbit.prototype.eats; // ลบตัวแม่ก่อน new มีผล ตัวลูก log  มาแล้ว undefined
//delete Rabbit.prototype //สั่งลบ Prototype ไม่ได้แฮะ

let rabbit = new Rabbit();
//alert( rabbit.eats ); // true

//----------------- 2.สั่งลบ key eat ใน rabbit------------------------------//


delete Rabbit.prototype.eats; // ลบตัวแม่ทีหลัง new มีผลด้วยจ้าา เพราะเหมือนลบ reference ไป
//console.log(`${Rabbit.prototype.eats}`); // undefined


//----------------- 3.ถ้ามีการ alert ในบรรทัดดังกล่าวจะได้อะไรออกมา --------------------//

//alert( rabbit.eats ); // undefined
console.log(`${rabbit.eats}`); // undefined เพราะถูกตัวแม่สั่งลบ reference ไป





