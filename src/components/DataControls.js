import React from "react";
import {Title} from "./common/Title";
import {Input} from "./common/Input";
import {Button} from "./common/Button";
import {ReactComponent as IconDollarSvg} from '../images/icon-dollar.svg';
import {ReactComponent as IconPerson} from '../images/icon-person.svg';
import './DataControls.scss'
import {CustomTipInput} from "./common/CustomTipInput";

const LIST_OF_TIPS_PERCENTAGE = [5, 10, 15, 25, 50]
export const DataControls = ({
                                 setTip,
                                 setCustomTip,
                                 setBill,
                                 setPeople,
                                 tip,
                                 customTip,
                                 bill,
                                 people,
                                 inputPeopleError,
                             }) => {

    const renderListOfTips = (el) => (
        <Button
            key={el}
            text={el + '%'}
            active={tip === el}
            onClick={() => {
                setTip(el)
                setCustomTip(null)
            }}/>
    )
    return (
        <div className='data-controls'>
            <div>
                <Title text='Bill'/>
                <Input value={bill}
                       onChange={(e) => setBill(e.target.value)}
                       Icon={IconDollarSvg}/>
            </div>
            <div>
                <Title text='Select tip %'/>
                <div className="data-controls__buttons-list">
                    {LIST_OF_TIPS_PERCENTAGE.map(renderListOfTips)}
                    <CustomTipInput
                        onChange={(e) => {
                            setCustomTip(e.target.value)
                            setTip(null)
                        }}
                        value={customTip || ''}
                    />
                </div>
            </div>
            <div>
                <Title error={inputPeopleError} text='Number Of People'/>
                <Input value={people}
                       error={inputPeopleError}
                       onChange={(e) => setPeople(e.target.value)}
                       Icon={IconPerson}/>
            </div>
        </div>
    );
}

