import React, { Component } from 'react';
import Name from './Name'
import Chat from './Chat'
import socketIoClient from 'socket.io-client'

class Activity extends Component {
    state = { 
        name: '',
        stage: 1,
        message: '',
        server: 'localhost:5000'
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
        if(message.length){
            const socket = socketIoClient(this.state.server)
            socket.emit('message', this.state.message)
         }
         this.setState({message: ''})
    }

    render() { 
        const {stage} = this.state;
        switch(stage){
            case 1:
                return <Name onChange={this.onChange} next={this.next}/>;
            case 2: 
                return <Chat onClick={this.onClick} server={this.state.server} message={this.state.message} name={this.state.name} onChange={this.onChange} next={this.next}/>;
            default:
                return <Name onChange={this.onChange} next={this.next}/>;
        }
    }
}
 
export default Activity;