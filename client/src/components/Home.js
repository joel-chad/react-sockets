import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Illustrator from '../Illustrator.svg'

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='md:mt-56 mt-32 text-lg text-center'>
                <img className='h-32 m-auto' src={Illustrator} alt=''/>
                Welcome to my Chat Application<br></br>
                <span>Click here to <Link className='text-teal-600' to='/chat'>Start Chatting</Link></span>
            </div>
         );
    }
}
 
export default Home;