import React, { useState } from 'react';

const PostList = (props) => {
    return ( 
        <table className='table'>
        <thead>
            <tr>
                <th>Date</th>
                <th>Name</th>
                <th>Post</th>
            </tr>
        </thead>
        <tbody>
            {props.parentEntries.map((entry, date) =>{
                return(
                    <tr key= {date}>
                    <td>{date}</td>
                    <td>{entry.name}</td>
                    <td>{entry.post}</td>
                    </tr>
                );
            })}
        </tbody>            
        </table>
     );
}
 
export default PostList;