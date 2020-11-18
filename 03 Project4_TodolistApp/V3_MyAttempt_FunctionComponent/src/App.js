import React, { useState } from "react";
import moveIcon from "./arrow.png";
export default function App() {
  const [textBox, setTextBox] = useState("");
  const [mainTodo, setMainTodo] = useState([]);
  const [mainComplete , setMainComplete] = useState([]);

  const add = () => {
    setMainTodo([...mainTodo, textBox]);
    setTextBox("");
  };
  const emptyAdd = () => {
    setTextBox("")
  }
  const edit = (index) => {
    const newTodo = [...mainTodo];
    let newTask = prompt("edit your task");
    if( newTask !== null && newTask.trim().length !== 0) newTodo.splice(index, 1, newTask);
    setMainTodo(newTodo);
  };

  const move = (index) => {
    setMainComplete([...mainComplete , mainTodo.splice(index,1)])
  }
  const moveBack = (index) => {
    setMainTodo([...mainTodo, mainComplete.splice(index,1)])
  }
  const done = (index) => {
    const newMainComplete = [...mainComplete]
    newMainComplete.splice(index,1)
    setMainComplete([...newMainComplete])
  }
  return (
    <div
      style={{
        margin: "50px auto",
        display: "grid",
        gridTemplateColumns: "50% 50%",
        width: "600px",
        justifyContent: "center",
        gridColumnGap: "10px",
        height: "400px",
      }}
    >
      {/* กล่องซ้าย */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          width: "100%",
          backgroundColor: "whitesmoke",
        }}
      >
        <div>
          {/* ซ้าย - ส่วน head */}
          <h3
            style={{
              width: "100%",
              backgroundColor: "gray",
              textAlign: "center",
            }}
          >
            todoList
          </h3>
          {/* ซ้าย - ส่วนแสดงlist */}
          <ul style={{ listStyle: "none" }} className="todolist">
            {mainTodo.map((element, index) => 
              
                <li key={index}>
                  <span onClick={() => edit(index)}>
                    {" "}
                    {index + 1} : {element}
                  </span>
                  <img 
                  alt = "moveLogo" 
                  src={moveIcon} 
                  style={{width:"20px" , position: "relative", top:"5px"}}
                  onClick={()=>move(index)}
                  />
                </li>
              
            )}
          </ul>
        </div>
        {/* ซ้าย - ส่วนล่าง - ส่วนเพิ่ม list */}
        <div>
          <input
            type="text"
            placeholder="งานการที่ต้องทำ"
            style={{ width: "80%" }}
            onChange={(e) => setTextBox(e.target.value)}
            value={textBox}
          ></input>
          <button style={{ width: "17%" }} onClick={ textBox.trim().length > 0 ? add : emptyAdd }>
            Add
          </button>
        </div>
      </div>

      {/* กล่องขวา */}
      <div style={{ backgroundColor: "wheat", height: "100%", width: "100%" }}>
        {/* กล่องขวา - ส่วนhead */}
        <h3
          style={{
            width: "100%",
            backgroundColor: "gray",
            textAlign: "center",
          }}
        >
          complete
        </h3>
        {/* กล่องขวา - ส่วนแสดง list */}
        <ul style={{ listStyle: "none" }} className="todolist">
          {mainComplete.map((element,index)=> 
             
          <li key = {index}> {index+1} : {element} 
          <button onClick={()=>moveBack(index)}> {"<"} </button>
          <button onClick={()=>done(index)}> Done </button>
          </li>   
        )}

        </ul>
      </div>
    </div>
  );
}

// 1.ทำตัวรับ input และปุ่ม
// 2.ทำให้การพิมพ์มีการ Track state ปัจจุบัน -- อัพเดท State -- แสดงผลเป็น value

// 3.ทำให้การกดปุ่มมีการเคลียร์ค่า Value
// 3.1 เพิ่มความสามารถให้การกดปุ่มเอาค่าไปบันทึกเก็บไว้ได้ --> ตั้ง State ใหม่
// 3.2 Refractor code ให้อัพเดทพร้อมกันได้
// 3.3 Refractor เอาไปไว้ข้างนอกเป็นฟังก์ชัน add

// 4. ทำให้มีการแสดงผลเป็น list ซ้อนกัน

// 5.ทำฟังก์ชัน edit
// 5.1 ใส่ span เข้าไปใน list ให้ดักจับonClick
// 5.2 สร้างฟังก์ชัน edit ที่จะทำงานหลังกด click ** ต้อง clone Array

// 6 ใส่ feature move
// 6.1 ใส่ GUI ก่อน
// 6.2 ดัก onclick บน Move logo
// 6.3 สร้าง state สำหรับ complete list เป็น array **
// 6.4 ใช้ splice ช่วย set state
// 6.5 นำมาแสดงผล

// 7.ใส่ feature reverve
// 7.1 ทำปุ่ม reverse
