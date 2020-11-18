import React, { Component } from 'react'
import './App.css'
import next from './arrow.png'
export default class App extends Component {
  state = {
    
  }
  addTodo = ()=>{
    
  }
  move = () =>{
    
  }
  reverse = () => {
   
  }
  delete = () =>{
    
  }
  edit = () =>{
   
  }
  render() {
    return (
      <div style={{margin : "50px auto", display: "grid", gridTemplateColumns: "50% 50%", width: "600px", justifyContent: "center", gridColumnGap: "10px" , height: "400px"}}>
        
        {/* กล่องซ้าย */}
        <div style={{display: "flex", justifyContent: "space-between", flexDirection : "column", width:"100%", backgroundColor: "whitesmoke"}}>
         
          <div>
            {/* ซ้าย - ส่วน head */}
            <h3 style={{width: "100%", backgroundColor: "gray"}}>todoList</h3>
             {/* ซ้าย - ส่วนแสดงlist */}
            <ul style={{listStyle:"none"}} className="todolist">
                
            </ul>
          </div>
          {/* ซ้าย - ส่วนล่าง - ส่วนเพิ่ม list */}
          <div>
            
          </div>
        </div> 
        {/* กล่องขวา */}
        <div style={{backgroundColor:"wheat", height: "100%", width: "100%"}}>
          {/* กล่องขวา - ส่วนhead */}
          <h3 style={{width: "100%", backgroundColor: "gray"}}>complete</h3>
          {/* กล่องขวา - ส่วนแสดง list */}
          <ul style={{listStyle:"none"}} className="todolist">
            
          </ul>
        </div>

      </div>
    )
  }
}
