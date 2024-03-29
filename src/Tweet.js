import React from 'react';

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

export default Tweet;