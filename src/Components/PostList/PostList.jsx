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
            <div className='flex-box'>
            {props.parentEntries.map((entry) =>{
                return(
                    <><Post post={entry}></Post>
                    <div className='button_container'><LikeButton /><DislikeButton /></div></>
                    

                   
                );
            })}
            </div>
        </tbody>            
        </table>
     );
}
 
export default PostList;

// return(
//     <ul>
//         {Array.map( el => <li> <Post post={el} /> </li>)}
//     </ul>
// )