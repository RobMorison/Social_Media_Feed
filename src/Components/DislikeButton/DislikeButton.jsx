import React, { useState } from 'react';
import './DislikeButton.css';



const DislikeButton = (props) => {

    const [buttonClass, setButtonClass] = useState('off');

    function handleClick(){
        if(buttonClass === 'off'){
            setButtonClass('on');
        }
        else{
            setButtonClass('off');
        }

    }
    return (
        <div>
            <div className='row'>
                <div className='col-md-6'>
            <button className={buttonClass} onClick={handleClick}>👎Thumbs Down</button>
                </div>
            </div>
        </div>
      );
}
 
export default DislikeButton;