import React, { Component } from 'react';

class Message extends Component {
    state = {  }

    
    render() { 
        const {text, name} = this.props;

        return(
            (name===text.sender) ?
                (               
                <div className='w-3/5 bg-gray-900 mb-4 p-2 mx-56 rounded-lg text-white'>
                    <p className='flex flex-wrap'>
                        {text.message}
                    </p>
                </div>
            ):
             (  
                <div className='w-3/5 bg-teal-500 mb-4 p-2 rounded-lg text-gray-900'>
                    <p className='flex flex-wrap'>
                        {text.message}
                    </p>
                </div>
            ))
    }
}
 
export default Message;