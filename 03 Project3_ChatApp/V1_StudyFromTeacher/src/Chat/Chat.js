import React, { Component } from 'react'

export default class Chat extends Component {
    state = {
        list : [],
        text : ""
    }
    add = () => {
        let list = [...this.state.list, this.state.text]
        this.setState({list : list})
        this.setState({text: ""})
    }


    render() {
        return (
            <div style={{height:"300px" , margin: "40px auto" , width : "300px" , backgroundColor : "whitesmoke"}}>
                <div style={{height: "250px"}}>
                    <ul style={{listStyle : "none"}}>
                        {this.state.list.map((str,i) => <li style={{backgroundColor: "red"}}>{i+1} : {str}</li>)}
                    </ul>
                </div>    
                <div>
                    <input 
                    type="text" 
                    placeholder="message" 
                    onChange={(e)=>this.setState({text : e.target.value})}
                    value={this.state.text} 
                    />
                    <button onClick={this.state.text.length > 0 ? this.add : null}>Send</button>
                </div>
            </div>
        )
    }
}
