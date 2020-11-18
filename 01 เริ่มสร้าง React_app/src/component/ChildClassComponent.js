import React,{ Component } from 'react'
export default class ChildClassComponent extends Component {
    constructor(props){
        super(props)// props ที่รับมามี data และ color อยู่ในรูปของ obj {data: “...”, color: “...”}
    }
    render() {
        let {data, color} = this.props
        const size = "30px"
        const style = {
            color : color,
            fontSize : size
        }
        return (
            <div>
                this is props from parent element <span style={style}> {data} </span> 
            </div>
        )
    }
}
