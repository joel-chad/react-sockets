import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Illustrator from '../Illustrator.svg'

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <nav className="relative select-none lg:h-16 bg-gray-900 lg:flex lg:items-stretch w-full">
                <div className="flex flex-no-shrink items-stretch ">
                <div className='pt-2'>
                <Link to='/'><span> <img className="h-8 w-10" src={Illustrator} alt="Workflow logo" /></span></Link> 
                </div>
                    <Link to="/" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-gray-700">Home</Link>
                    <button className="block lg:hidden cursor-pointer ml-auto relative w-12 h-12 p-4">
                    </button>
                </div>
                <div className="lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow pr-6">
                    <div className="lg:flex lg:items-stretch lg:justify-end ml-auto">
                    <Link to="/chat" className="flex-no-grow flex-no-shrink relative  py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-gray-700">Chat</Link>
                    <Link to="/friends" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-gray-700">Friends</Link>
                    <Link to="/notifications" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-gray-700">Notifications</Link>
                    </div>
                </div>
            </nav>
         );
    }
}
 
export default Navbar;