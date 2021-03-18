import React, {useState} from 'react';

const ButtonHooks = () => {
    const [buttonText, setButtonText] = useState("Click me")
    return (
        <div>
            <button onClick={()=> setButtonText("Ok")}>
                {buttonText}
            </button>
        </div>
    );
};

export default ButtonHooks;

