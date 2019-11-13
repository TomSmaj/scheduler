import React, { Component } from 'react';
import './eventList.css';
import $ from 'jquery';

class EventList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
        }
        
    }

    componentDidMount(){
     
    }

    render() {
        return (
            <div className="eventList">
                <p>this is the event list </p>
            </div>
        )
    }
}

export default EventList;