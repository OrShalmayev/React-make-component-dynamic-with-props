import React from 'react';

const LikeButton = ({count}) => (
    <>  
        <i className="fas fa-heart heart-button"></i>
        {count > 0 && <span className="like-count">{count}</span> }
    </> 
);

export default LikeButton;