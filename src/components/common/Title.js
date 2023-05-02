import React, {memo} from "react";
import './Title.scss'

export const Title = memo(({text, error}) => (
    <div className='title'>
        <div className='title__label'>{text}</div>
        {error && <div className='title__error'>Can't be zero</div>}
    </div>
))

