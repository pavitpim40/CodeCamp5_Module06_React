/* 
ให้เพิ่ม Method defer เข้าไปใน prototypes ของทุกฟังก์ชัน โดย Method 
นี้จะทำหน้าที่ return Function ให้ alert(a+b) เมื่อผ่านไป ms
*/
function f(a, b) {
    alert( a + b );
}

Function.prototype.defer = function(time) {
  let pavit = this; //ปลอมแปลงให้ใช้ this หน้า .apply ได้
  return function(...para) {
    setTimeout(() => pavit.apply(this, para), time);
  }
};


f.defer(1000)(1, 2); // แสดง 3 หลังจากผ่านไป 1 วินาที

//reff 
//https://javascript.info/call-apply-decorators