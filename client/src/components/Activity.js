import React, { Component } from 'react';
import Name from './Name'
import Chat from './Chat'
import {socket} from "../service/socket";

class Activity extends Component {
    state = { 
        name: '',
        stage: 1,
        message: ''
     }

     onChange=(e)=>{
        this.setState({[e.target.name]: e.target.value})
    }

    next=()=>{
        const {name} = this.state;
        if(name.length){
        this.setState({stage: this.state.stage + 1})
        }
    } 

    onClick = ()=>{
        const {message} = this.state;
        const sender = this.state.name
        if(message.length){
            socket.emit('message', message, sender)
            console.log(message)
         }
         this.setState({message: ''})
    }

    render() { 
        const {stage} = this.state;
        switch(stage){
            case 1:
                return <Name onChange={this.onChange} next={this.next}/>;
            case 2: 
                return <Chat onClick={this.onClick} message={this.state.message} name={this.state.name} onChange={this.onChange} next={this.next}/>;
            default:
                return <Name onChange={this.onChange} next={this.next}/>;
        }
    }
}
 
export default Activity;