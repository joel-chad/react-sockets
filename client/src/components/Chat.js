import React, { Component } from 'react';
import Message from './Message';
import {socket} from "../service/socket";

class Chat extends Component {
    state={
        texts: [
            {id: 1, sender: "Joe", message: 'sup'}, {id: 2, sender: "John", message:'you good'}
        ]
    }

    componentWillMount(){
        socket.on('message', (message, sender)=>{
            const {texts} = this.state
            const details = {
                id: texts.length + 1,
                message,
                sender
            }
            this.setState({texts: [...this.state.texts, details]})
            console.log(this.state.texts)
            
        })
    }
    
    render() { 
        const {name, message,  onClick , onChange} = this.props;
        const {texts} = this.state;
        const messages = texts.map(text=>{
            return <Message key={text.id} name={this.props.name} text={text}/>
        })
        
        return ( 
            <div className='md:mx-auto mx-2 container h-auto md:w-3/5 mt-16'>
            <h1 className='font-semibold text-center'>{name}</h1>
                <div id='messages' className='bg-teal-100 h-auto p-3 flex flex-wrap'>
                    {messages}
                </div>
                <div>
                    <input name='message' onChange={onChange} value={message} className='md:w-4/5 w-full border-2 p-1 focus:outline-none border-solid' placeholder='Enter Your Yessage Here'/>
                    <button onClick={onClick} className='bg-gray-900 px-4 rounded-sm ml-6 py-1 text-white'>Send</button>
                </div>
            </div>
         );
    }
}
 
export default Chat;