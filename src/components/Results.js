import React, {memo} from "react";
import {ResultRow} from "./common/ResultRow";
import './Results.scss'

export const Results = memo(({tipAmount, total, onResetClick, resetDisabled}) => (
    <div className='results'>
        <ResultRow number={tipAmount || '0.00'} text='Tip Amount'/>
        <ResultRow number={total || '0.00'} text='Total'/>
        <div className='flex'></div>
        <button disabled={resetDisabled} onClick={onResetClick}>RESET</button>
    </div>
))

