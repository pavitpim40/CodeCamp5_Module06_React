import React, { Component} from "react";

export default class Chat extends Component {
  state = {
    text: "",
    list: [],
  };

  add = () => {
    const currentList = [...this.state.list, this.state.text];
    this.setState({ list: currentList });
    this.setState({ text: "" }); //ทำให้ข้อความในช่องพิมพ์หายไป
  };
  render() {
    return (
      //  Seection1 - ส่วนกำหนด Frame
      <div
        style={{
          height: "300px",
          margin: "40px auto",
          width: "300px",
          backgroundColor: "whitesmoke",
        }}
      >
        {/* Section2 - ส่วนแสดงข้อความ */}
        <div style={{ height: "250px" }}>
          <ul style={{ listStyle: "none" }}>
            {this.state.list.map((ArrayElement, index, FullArray) => (
              <li key={index} style={{backgroundColor:"red" }} >{index+1} : {ArrayElement} : {FullArray}</li>
            ))}
          </ul>
          
        </div>

        {/* Section 3 - ส่วนพิมพ์ข้อความ */}
        <div>
          <input
            type="text"
            placeholder="message"
            style={{ width: "80%" }}
            onChange={(e) => {
                this.setState({ text: e.target.value })
                console.log(e.target.value.length) //อยากรู้ว่ากด spacebar แล้วยาวเพิ่มไหม
            }}
            value={this.state.text}
          />
          <button onClick={this.state.text.trim().length !== 0 ? this.add : null  }>send</button>
        </div>
       
      </div>
    );
  }
}

//-------------------- ลำดับการคิด -----------------------//
// 1.วางโครง div ก่อน

// ส่่วนพิมพ์และส่งข้อความ ด้านล่าง
// 1.ทำส่วน input ให้เปลี่ยน state ตามเมื่อพิมพ์เพิ่มเข้าไปทุกครั้ง
// 2.ทำให้ปุ่มกด กดแล้วข้อความหายไป --> set State แล้วแสดงผลใหม่

// ทำให้การกดส่งมาแสดงผลในส่วนแสดงข้อความ
// 1. mock ข้ออมูลเป็นแบบ list ก่อน ตกแต่งให้ไม่มี bullet

// 2. สร้าง state ใหม่เป็น array  รู้ได้ไง ?
// 2.1 ข้อความที่จะนำมาแสดงมีการเปลี่ยนแปลง --> ใช้ state
// 2.2 มีการไล่เรียงจากข้อความแรกยันข้อความสุดท้าย -->จะใช้ .map ใน array

// 3 ทำให้การกด add มีการอัพเดท State ที่เป็น array
// 3.1 clone array เดิมเป็น array ใหม่
// 3.2 เอา text ปัจจุบันไปต่อท้าย
// 3.3 อัพเดท array ปัจจุบันเป็น State ใหม่
// ** ส่วนที่เป็น setState ที่ทำให้ text = "" ต้องย้ายไปอยู่หลังการ set array

// 4.1 ทำให้เกิดการแสดงผลโดยใช้ array.map
// 4.2 ทดสอบการพิมพ์ค่าว่าง -- ตัว array มีการอัพเดทตัวเพิ่ม ---> เขียนดักไม่ให้ใส่ค่าว่างได้