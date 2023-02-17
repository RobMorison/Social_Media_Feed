import React, { useState } from 'react';
import Post from '../Post/post';
import LikeButton from '../CustomButton/LikeButton';

const PostList = (props) => {
    return ( 
        <table className='table'>
        <thead>
        </thead>
        <tbody>
            {props.parentEntries.map((entry) =>{
                return(
                    <><Post post={entry}></Post><LikeButton></LikeButton></>

                   
                );
            })}
        </tbody>            
        </table>
     );
}
 
export default PostList;