import React, { useState } from 'react';
import Post from '../Post/post'
const PostList = (props) => {
    return ( 
        <table className='table'>
        <thead>
            <tr>
                <th>Name</th>
                <th>Post</th>
            </tr>
        </thead>
        <tbody>
            {props.parentEntries.map((entry) =>{
                return(
                    <Post post = {entry}></Post>
                   
                );
            })}
        </tbody>            
        </table>
     );
}
 
export default PostList;