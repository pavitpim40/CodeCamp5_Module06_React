let animal = {
    eat() {
      this.full = true;
    }
  };
  
  let rabbit = {
    __proto__: animal
  };
  
rabbit.eat(); //rabit ได้ property full ไป

console.log(`${rabbit.full}`); // ได้ true แสดงว่า rabbit มี property ที่ชื่อว่า full 
  