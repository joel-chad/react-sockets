import React, { Component } from 'react';

class Notification extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='border-b border-gray-500 w-4/5 md:w-2/5 m-auto p-4 bg-gray-100 hover:bg-white'>
                <p className='flex flex-wrap'>Ben has sent you a message</p>
            </div>
         );
    }
}
 
export default Notification;