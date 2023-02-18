import React, { useState } from 'react';
import './DislikeButton.css';



const DislikeButton = (props) => {

    const [buttonClass, setButtonClass] = useState('inactive');

    function handleClick(){
        if(buttonClass === 'inactive'){
            setButtonClass('active');
        }
        else{
            setButtonClass('inactive');
        }

    }
    return (
        <div>
            <button className={buttonClass} onClick={handleClick}>Thumbs Down</button>
        </div>
      );
}
 
export default DislikeButton;