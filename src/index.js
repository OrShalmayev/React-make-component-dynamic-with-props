import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import './index.css';

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
function Time({time}){
    return (
        <>
            <span className="time">{
                moment(time).fromNow()
            }</span>
        </>
    );
}
const ReplyButton = () => (
    <>  
        <i className="fas fa-reply reply-button"></i>
    </> 
);
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
const LikeButton = ({count}) => (
    <>  
        <i className="fas fa-heart heart-button"></i>
        {count > 0 && <span className="like-count">{count}</span> }
    </> 
);
const MoreOptionsButton = () => (
    <>  
        <i className="fas fa-ellipsis-h ellipsis-button"></i>
    </> 
);

function Message({text}){
    return (
        <>
            <div className="message">{text}</div>
        </>
    );
}




function Author({author}){
    return (
        <>
            <span className="author">
                <span className="name">{author.name}</span>
                <span className="handle">{author.handle}</span>
            </span>
        </>
    );
}

function Avatar({hash}){
    return (
        <>
            <img
                alt="avatar"
                className="avatar"
                src={`https://www.gravatar.com/avatar/${hash}`}
            />
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