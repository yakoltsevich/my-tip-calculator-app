import React, {memo} from "react";
import './ResultRow.scss'

export const ResultRow = memo(({text, number}) => {
    return (
        <div className='results-row'>
            <div className='results-row__left-part'>
                <div className='results-row__label'>{text}</div>
                <div className='results-row__sub-label'>/person</div>
            </div>
            <div className='results-row__number'>${number}</div>
        </div>
    );
})

