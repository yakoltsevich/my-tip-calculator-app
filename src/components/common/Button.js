import React, {memo} from "react";
import './Button.scss'

export const Button = memo(({text, onClick, active}) => {
    return (
        <button className={`button ${active ? 'button--active' : ''}`}
                onClick={onClick}>
            {text}
        </button>
    );
})

