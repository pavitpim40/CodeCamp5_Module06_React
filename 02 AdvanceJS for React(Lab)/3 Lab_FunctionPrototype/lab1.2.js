//------------------- 1.จากโค๊ดต่อไปนี้มีการสร้าง new Rabbit() ขึ้นมา ------------------//
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

//Rabbit.prototype = {eats : "carrot before"}; // ทดสอบตั้งค่า prototype ใหม่ก่อนที่จะใช้ new

let rabbit = new Rabbit();
//alert( rabbit.eats ); // true

//----------------- 2.ทำการ แก้ไข value ใน prototype (key eats) ใหม่ ------------------------------//

Rabbit.prototype.eats = false; // assign ค่าใหม่ให้ prototype ใน key eats ของ Rabbit (หลังใช้ new)
//console.log(`${Rabbit.prototype.eats}`);

//Rabbit.prototype = {eats : "carrot before"}; // ทดสอบตั้งค่า prototype ใหม่หลังใช้ new
//console.log(`${Rabbit.prototype.eats}`);

//----------------- 3.ถ้ามีการ alert ในบรรทัดดังกล่าวจะได้อะไรออกมา --------------------//

//alert( rabbit.eats ); // false
console.log(`${rabbit.eats}`); // false

// แสดงผลเป็น true เพราะ Rabbit ทำการแก้ไข key value ใน prototype โดยตรง 
// ไม่ได้กำหนดค่าขึ้นมาใหม่แบบข้อ  1.1


//--------------------- ข้อสรุปที่ตรงกันทั้ง 1.1 1.2 --------------------------------//

//1.1การAssign ค่าใหม่ให้ prototype ของฟังก์ชันต้นแบบ หลังจาก new keyword ไม่มีผลต่อ object ที่ถูกสร้างไปแล้ว 
//(อารมณ์ว่าฟังก์ชันต้นแบบย้าย ref ใหม่ แต่ objectลูกใช้ ref เดิม)

//1.2 การAssign ค่าใหม่ให้ prototype ของฟังก์ชันต้นแบบ ก่อนจาก new keyword จะมีผลต่อ object ที่ถูกสร้าง 
//(อารมณ์ว่าฟังก์ชันต้นแบบย้าย ref ใหม่ก่อนที่ object ลูกจะถูกสร้าง)

//2.แต่การแก้ไขค่า key value ใน prototype เดิมของฟังก์ชันต้นแบบ จะส่งผลต่อ object ที่ถูกสร้างมาด้วย 
//(อารมณ์ว่าแก้ ref เดิมทั้งฟังก์ชันต้นแบบ และ objectลูก)


