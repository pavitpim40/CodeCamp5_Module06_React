//มี Object Dictionary ที่สร้างจาก Object.create(null) เพื่อเก็บ key/value pairs
//ให้เพิ่ม Method dictionary.toString() และคืนค่าเป็น key ทั้งหมดออกมาที่คั้นด้วย comma


//ทำการเพิ่ม key ที่มีชื่อว่า toString เข้าไป
//พร้อมกำหนดให้ value เป็นฟังก์ชันที่คืนค่าเป็น Object key ที่เอามาต่อๆกัน
let dictionary = Object.create(null, {
    toString: { 
    value() { 
        return Object.keys(this).join();
    }
}
});
// your code to add dictionary.toString method
  
dictionary.apple = "Apple";
dictionary.__proto__ = "test";

//console.log(Object.keys(dictionary));

//apple and __proto__ is in the loop
for(let key in dictionary) {
 alert(key); // "apple", then "__proto__"
}
  
// comma-separated list of properties by toString
alert(dictionary); // "apple,__proto__"