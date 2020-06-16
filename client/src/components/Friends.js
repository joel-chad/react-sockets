import React, { Component } from 'react';

class Friends extends Component {
    state = {  }
    render() { 
        const {friend} = this.props; 
        const statusdiv = friend.status==='online' ? 
         {backgroundColor: 'green'} :
         {backgroundColor: 'red'}
        return ( 
            <div className='container m-auto w-4/5 pb-4 md:w-2/5 rounded shadow-md p-4 mt-16 text-center '>
                <h1 className='font-semibold'>{friend.name}</h1>
                <div className='flex p-4 mb-1'>
                <p className='text-center ml-10'>{friend.status}</p>
                <div style={statusdiv} className='rounded-full w-4 h-4 ml-10'></div>
                </div>
            </div>
         );
    }
}
 
export default Friends;