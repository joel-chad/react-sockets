import React, { Component } from 'react';

class Message extends Component {
    state = {  }
    render() { 
        const {message} = this.props;
        return ( 
            <div className='w-3/5 bg-teal-500 mb-4 p-2 rounded-lg text-gray-900'>
                <p className='flex flex-wrap'>
                    {message}
                </p>
            </div>
         );
    }
}
 
export default Message;