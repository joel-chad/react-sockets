import React, { Component } from 'react';

class Name extends Component {

    render() { 
        const {next, onChange, name} = this.props;
        return ( 
            <div className='mt-16 text-center'>
                <h1 className='font-semibold'>Enter Your Name</h1>
                <input className='w-3/5 border-2 p-1 focus:outline-none border-solid' onChange={onChange} name='name' value={name}/>
                <button onClick={next} className='bg-gray-900 px-4 rounded-sm ml-6 py-1 text-white'>Next</button>
            </div>
         );
    }
}
 
export default Name;