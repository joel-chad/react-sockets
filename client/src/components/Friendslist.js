import React, { Component } from 'react';
import Friends from './Friends';

class Friendslist extends Component {
    state = { 
        friends: [
            {'id': 1, name: "Joel", status: "online" },
            {'id': 2, name: "John", status: "offline" },
            {'id': 3, name: "James", status: "online" },
            {'id': 4, name: "Del", status: "offline" },
            {'id': 5, name: "Bonnie", status: "online" },
        ]
     }
    render() { 
        const {friends} = this.state;
        const list = friends.length ? friends.map(friend=>{
            return <Friends key={friend.id} friend={friend}/>
        })
        :<div>Oops mate. Seems like your pals are offline</div>
        return(
            <div>
            {list}
            </div>
        )
    }
}
 
export default Friendslist;