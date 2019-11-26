import React from 'react';

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

export default Author;