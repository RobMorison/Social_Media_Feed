import React, { useState } from 'react';



const Post = (props) => {
    return (
        <><tr>
            <td>{props.post.name}</td>
        </tr><tr>
                <td>{props.post.post}</td>
            </tr></>
    );
}

export default Post;