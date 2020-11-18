/* 
ให้เพิ่ม Method defer เข้าไปใน prototypes ของทุกฟังก์ชัน โดย Method นี้
จะทำหน้าที่ alert ข้อความออกมาหลังจากผ่านไป ms
*/

function f() {
    alert("Hello!");
  }

Function.prototype.defer = function(time){
    setTimeout(this,time) // this ตัวนี้จะกลายเป็นเรีียก f()
}
  
f.defer(1000); // แสดง "Hello!" หลังจากผ่านไป 1 วินาที
  
  