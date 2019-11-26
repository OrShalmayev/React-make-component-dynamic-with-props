import React from 'react';
// even though we dont use this class we need it to use JSX
// because the JSX will tunr it to react.createElementn calls 
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

export default Avatar;