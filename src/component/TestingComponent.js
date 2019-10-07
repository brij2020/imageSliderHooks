import React, { Component } from 'react'
import Profile from './Profile'
export default class TestingComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            data:{}
        }
    }
    handleAPI = () =>{
        fetch('https://randomuser.me/api/')
        .then(response=>response.json())
        .then(result=>this.setState({data:result}))
        .catch(error=>console.log("error",error))
    }
    
    render() {
        return (
            <div>
                <button onClick={()=>{this.handleAPI()}}>API CALL </button>
                {
                    Object.keys(this.state.data).length > 0 ? <Profile data={this.state.data}  /> : void 0
                }
                
            </div>
        )
    }
}
