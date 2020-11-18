import React,{ Component } from 'react'
const ChildFuncComponent = (props) => {
    //props ที่รับมี data และ color อยู่ในรูปของ obj {data: “...”, color: “...”}
    let {data, color} = props
        return (<div> this is props from parent component 
    <span style={{color: color}}>{data} </span> </div>)
        
    }
    
    export default ChildFuncComponent;
    