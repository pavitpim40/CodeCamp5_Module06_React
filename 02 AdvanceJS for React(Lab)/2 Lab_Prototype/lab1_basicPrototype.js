let animal = {
    jumps: null
  };
  
  let rabbit = {
    __proto__: animal,
    jumps: true
  };


 // alert( rabbit.jumps ); // ? (1)  == ได้ค่าออกมาเป็น true
  console.log(`${rabbit.jumps}`);
  
  delete rabbit.jumps;
  
  //alert( rabbit.jumps ); // ? (2)  == ได้ค่าออกมาเป็น null 
  console.log(`${rabbit.jumps}`);
  
  
  delete animal.jumps;
  
  // alert( rabbit.jumps ); // ? (3) == ได้ค่าออกมาเป็น undefine
  console.log(`${rabbit.jumps}`);
  
  
