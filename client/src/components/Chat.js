import React, { Component } from 'react';
import Message from './Message';
import socketIoClient from 'socket.io-client'

class Chat extends Component {
    
    render() { 
        const {name, message, server, onClick , onChange} = this.props;
        const socket = socketIoClient(server)
        socket.on('message', (message)=>{
            console.log(message)
            const messages = document.getElementById('messages');
            const newdiv = messages.textContent + `${<Message message={message}/>}`
            console.log(newdiv)
            // <Message message={message}/>
        })
        return ( 
            <div className='mx-auto text-center container h-auto w-3/5 mt-16'>
                <div id='messages' className='bg-teal-100 h-auto p-3'>
                    <h1 className='font-semibold'>{name}</h1>
                    <Message/>
                    <Message/>
                </div>
                <div>
                    <input name='message' onChange={onChange} value={message} className='w-4/5 border-2 p-1 focus:outline-none border-solid' placeholder='Enter Your Yessage Here'/>
                    <button onClick={onClick} className='bg-gray-900 px-4 rounded-sm ml-6 py-1 text-white'>Send</button>
                </div>
            </div>
         );
    }
}
 
export default Chat;