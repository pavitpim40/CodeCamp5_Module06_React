import React,{ Component } from 'react'
import ChildClassComponent from './ChildClassComponent' 
import ChildFuncComponent from './ChildFuncComponent' 


export default class ParentComponent extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <ChildClassComponent data="Data send to class component" color="blue"/>
                <ChildFuncComponent data="Data send to function component" color="green"/>
            </div>
        )
    }
}
