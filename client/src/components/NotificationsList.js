import React, { Component } from 'react';
import Notification from './Notification';

class NotificationsList extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='p-4'>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
            </div>
         );
    }
}
 
export default NotificationsList;