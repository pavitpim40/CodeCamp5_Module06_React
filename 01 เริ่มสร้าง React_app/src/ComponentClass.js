import React, { Component } from 'react'

export default class ComponentClass extends Component {
    constructor(props){
        super(props)
        this.state = {
            name : "Peter",
            lastName: "Pan",
            age: "16",
            color: true,
            //list : ["list 1","list 2","list 3","list4","list5"]
            list : [{content:"aaaaaa" , score : 1},
            {content:"bbbbbb" , score : 2},
            {content:"cccccc" , score : 3},
            {content:"dddddd" , score : 4},
            {content:"eeeeee" , score : 5},
        ]
        }

    }    
    
    render() {
        return (
            <div>
                this is component for reuse
                <p onClick={() => this.state.color?this.setState({color: false}):this.setState({color:true})} 
                    style={{color: this.state.color?"inherit": "blue"}}>My name is {this.state.name} {this.state.lateName} I'm {this.state.age} </p> 
                    <button onClick={()=> this.setState({name: prompt("add your name")})}>edit name</button>
                <ul>
                    {this.state.list.map(obj=> <li>{obj.content} score : {obj.score}</li>)}
                    {/* <li>{this.state.list[0]}</li>
                    <li>{this.state.list[1]}</li>
                    <li>{this.state.list[2]}</li>
                    <li>{this.state.list[3]}</li>
                    <li>{this.state.list[4]}</li> */}
                </ul>   
               
            </div>
        )
    }
}
