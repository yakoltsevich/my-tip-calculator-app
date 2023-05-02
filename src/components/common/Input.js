import React, {memo} from "react";
import './Input.scss'

const MAX_NUMBER_LENGTH = 10
export const Input = memo(({Icon, onChange, error, value}) => {
    const onInputChange = (event) => {
        if (event.target.value.length > MAX_NUMBER_LENGTH) {
            return
        }
        onChange(event)
    }
    return (
        <div className='input'>
            <div className={`input__wrapper ${error ? 'input__wrapper--error' : ''}`} tabIndex='1'>
                {Icon && <Icon/>}
                <input step={1} min={0} onChange={onInputChange} type="number" value={value || ''}/>
            </div>
        </div>
    );
})

