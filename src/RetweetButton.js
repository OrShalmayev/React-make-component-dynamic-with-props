import React from 'react';


function getRetweetsCount(count){
    if(count > 0 ){
        return <span className="retweet-count">{count}</span>;
    } 
    return null;
}

const RetweetButton = ({count}) => (
    <>  
        <i className="fas fa-retweet retweet-button"></i>
        {getRetweetsCount(count)}
    </> 
);

export default RetweetButton;