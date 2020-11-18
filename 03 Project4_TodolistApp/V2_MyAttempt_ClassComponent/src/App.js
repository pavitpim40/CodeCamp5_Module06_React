import React, { Component } from "react";
import "./App.css";
import next from "./arrow.png";
export default class App extends Component {
  state = {
    inputSlot: "",
    todoList: [],
    completeList: [],
  };
  addTodo = () => {
    this.setState({
      todoList: [...this.state.todoList, this.state.inputSlot],
      inputSlot: "",
    });
    console.log(this.state.todoList);
  };
  edit = (index) => {
    // ทำไมต้องห่อ edit ก่อนมาถึงตรงนี้ด้วย 1 รอบ  ?? เหมือนส่ง index มาแล้วต้องห่อ
    const newTodoList = [...this.state.todoList];
    let editTask = prompt("edit your task");

    if (editTask.trim().length !== 0 ) newTodoList.splice(index, 1, editTask);
    this.setState({ todoList: newTodoList });

    
    // ลองแบบแก้ไข state โดยตรง
    // let editTask = prompt("edit your task")
    // if(editTask.trim().length !== 0)  this.setState({todoList : [...this.state.todoList.splice(index,1,editTask)]})
  };
  move = (index) => {
    alert("moving");
    const afterMoveTodoList = [...this.state.todoList];
    this.setState({
      completeList: [
        ...this.state.completeList,
        afterMoveTodoList.splice(index, 1),
      ],
      todoList: afterMoveTodoList,
    });
  };

  reverse = (index) => {
    this.setState({
      todoList : [...this.state.todoList , this.state.completeList.splice(index,1)],
      completeList : [...this.state.completeList]
    })
  };
  delete = (index) => {
    const newCompleteList = [...this.state.completeList]
    newCompleteList.splice(index,1)
    this.setState({
      completeList : newCompleteList
    })
  };
  render() {
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
              {this.state.todoList.map((element, index) => {
                return (
                  <li key={index}>
                    <span onClick={() => this.edit(index)}>
                      {index + 1} : {element}
                    </span>
                    <img
                      src={next}
                      alt="move logo"
                      style={{ width: 20, position: "relative", top: 5 }}
                      onClick={() => this.move(index)}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
          {/* ซ้าย - ส่วนล่าง - ส่วนเพิ่ม list */}
          <div>
            <input
              type="text"
              placeholder="งานการที่ต้องทำ"
              style={{ width: "80%" }}
              value={this.state.inputSlot}
              onChange={(e) => {
                this.setState({ inputSlot: e.target.value });
                // console.log(this.state.inputSlot);
              }}
            ></input>
            <button style={{ width: "17%" }} onClick={this.addTodo}>
              Add
            </button>
          </div>
        </div>

        {/* กล่องขวา */}
        <div
          style={{ backgroundColor: "wheat", height: "100%", width: "100%" }}
        >
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
            {this.state.completeList.map((element, index) => {
              return <li key={index}>
              <button onClick={()=> this.reverse(index)}>{"<"}</button>
              {index+1} : {element}
              <button onClick={()=> this.delete(index)}>Done</button>
              </li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
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