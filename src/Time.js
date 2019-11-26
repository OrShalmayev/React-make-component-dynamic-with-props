import React from 'react';
import moment from 'moment';

function Time({time}){
    return (
        <>
            <span className="time">{
                moment(time).fromNow()
            }</span>
        </>
    );
}

export default Time;