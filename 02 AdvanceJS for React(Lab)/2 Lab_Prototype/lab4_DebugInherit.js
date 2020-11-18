// ----------------- code 1 ----------------- //
let hamster = {
 stomach: [],
  
 eat(food) {
      this.stomach.push(food);
 }
};

// ----------------- code 2 ----------------- //
let speedy = {
    stomach: [],  // add speedy stomach
  __proto__: hamster
};
  
let lazy = {
    stomach: [],  // add lazy stomach
  __proto__: hamster
};

// ----------------- code 3 ----------------- //

// This one found the food
speedy.eat("apple");

console.log(`${speedy.stomach}`); // apple
//console.log(Object.keys(speedy))

// This one also has it, why? fix please.
// เพิ่ม stomach ของตัวเองให้กับ speedy และ lazy
console.log(`${lazy.stomach}`); // apple
//console.log(Object.keys(lazy))

console.log(`${hamster.stomach}`); // ไม่มีค่าให้แสดง

/* อธิบาย code 
1. speedy เรียกฟังก์ชัน eat ป้อนค่าเป็น apple
2. ฟังก์ชัน eat ทำการ push "apple" เข้าไปใน array stomach 
3. แต่ speedy ไม่มี array ของตัวเองจึง push ไม่ได้
4. จึงทำการ push ให้ stomach ของ prototype แทน ซึ่งก็คือ hamster
5. ตอนนี้ทั้ง speedy และ lazy ไม่มี stomach ของตัวเอง ยกเว้น hamster
6. พอกด get ค่า stomach ของ speedy กับ lazy จึงไม่เจออะไรในตอนแรก แต่ย้อนกลับไปหาของ hamster 
7. ส่งผลให้แสดงผลเป็น apple ทั้งคู่

วิธีแก้คือเพิ่ม stomach ให้ของใครของมัน เพื่อให้การ set ค่าตรงกับชนิดของสัตว์ที่กิน 
*/