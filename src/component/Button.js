import React, {useState} from 'react';

function Button() {
    const [showAnotherButton, setShowAnotherButton] = useState(false);
    console.log(showAnotherButton)
  return (
    <div className="button">
        <button
            onClick={() => {
                setShowAnotherButton(true)
            }}
        >
            CLICK HERE
        </button>
        {showAnotherButton && (
            <button>CLICK HERE</button>
        )}
    </div> 
  ) 
}

export default Button;
