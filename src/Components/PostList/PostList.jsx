import React, { useState } from 'react';
import Post from '../Post/post';
import LikeButton from '../LikeButton/LikeButton.jsx';
import DislikeButton from '../DislikeButton/DislikeButton.jsx';

const PostList = (props) => {
    return ( 
        <table className='table'>
        <thead>
        </thead>
        <tbody>
            {props.parentEntries.map((entry) =>{
                return(
                    <><Post post={entry}></Post><LikeButton /><DislikeButton /></>

                   
                );
            })}
        </tbody>            
        </table>
     );
}
 
export default PostList;