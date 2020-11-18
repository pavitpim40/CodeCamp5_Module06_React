import React, { useState } from "react";

export default function Chat_Function() {
  const [text, setText] = useState("");
  const [chatLog, setChatLog] = useState([]);

   let add = () => {
    setChatLog([...chatLog, text])
    setText("")
  }

  return (
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
        <ul style={{ listStyle: "none"  , textAlign : "right"}}>
           {chatLog.map((element,index) => <li key={index} style={{backgroundColor:"red"}}>{element}</li>)}
        </ul>
      </div>

      {/* Section 3 - ส่วนพิมพ์ข้อความ */}
      <div>
        <input
          type="text"
          placeholder="message"
          style={{ width: "80%" }}
          onChange={(e) =>{ 
            setText(e.target.value)
            console.log(e.target.value)
          }}
          value={text}
        />
        <button
        onClick ={add}
        >Send</button>
      </div>
    </div>
  );
}
