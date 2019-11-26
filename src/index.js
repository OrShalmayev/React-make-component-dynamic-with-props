import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

// Cpomponents
import Avatar from './Avatar'; 
import Author from './Author'; 
import Time from './Time'; 
import Message from './Message'; 
import ReplyButton from './ReplyButton'; 
import RetweetButton from './RetweetButton'; 
import LikeButton from './LikeButton'; 
import MoreOptionsButton from './MoreOptionsButton'; 

function Tweet({tweet}){
    // const {tweet} = props;
    return (
        <>
            <div className="tweet">
                <Avatar hash={tweet.gravatar} />
                <div className="content">
                    <Author author={tweet.author}/> <Time time={tweet.timestamp}/>
                    <Message text={tweet.message}/>
                    <div className="buttons">
                        <ReplyButton />
                        <RetweetButton count={tweet.retweets}/>
                        <LikeButton count={tweet.likes} />
                        <MoreOptionsButton />
                    </div>
                </div>
            </div>
        </>
    );
}


const data = {
    message: 'A tweet about somthing cool',
    gravatar:'3j2h3hj1jhj2h13hj21h3kjh21kjkj2h13jkh21kjh',
    author: {
        handle: '@oshalm',
        name: 'Or Shalmayev'
    },
    likes: 17,
    retweets: 10,
    timestamp: '2019-11-26 11:36:32'
};


ReactDOM.render(<Tweet tweet={data} />, document.querySelector('#root'));