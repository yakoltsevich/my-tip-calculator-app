import React, {memo} from "react";
import './CustomTipInput.scss'

const MAX_NUMBER_LENGTH = 6
export const CustomTipInput = memo(({onChange, value}) => {
    const onInputChange = (event) => {
        if (event.target.value.length > MAX_NUMBER_LENGTH) {
            return
        }
        onChange(event)
    }
    return (
        <input
            placeholder='Custom'
            step={1}
            min={0}
            onChange={onInputChange}
            type="number"
            value={value}/>
    );
})

