import React, {useState, useEffect} from "react";
import {DataControls} from "./DataControls";
import {Results} from "./Results";
import './Table.scss'

export const Table = () => {
    const [tip, setTip] = useState(null)
    const [customTip, setCustomTip] = useState(null)
    const [bill, setBill] = useState(null)
    const [people, setPeople] = useState(null)
    const [tipAmount, setTipAmount] = useState(null)
    const [total, setTotal] = useState(null)
    const [inputPeopleError, setInputPeopleError] = useState(null)
    const [resetDisabled, setResetDisabled] = useState(null)

    useEffect(() => {
        const selectedTip = customTip || tip || null
        if (![selectedTip, bill, people].includes(null) && people > 0) {
            const fullTips = +bill * +selectedTip / 100
            const totalPerPerson = (fullTips + +bill) / +people
            const tipAmountPerPerson = fullTips / +people
            setTipAmount(tipAmountPerPerson.toFixed(2))
            setTotal(totalPerPerson.toFixed(2))
        }
        if ([selectedTip, bill, people].some(el => el !== null)) {
            setResetDisabled(false)
        } else setResetDisabled(true)

    }, [tip, customTip, bill, people]);

    useEffect(() => {
        setInputPeopleError(people <= 0 && people !== null)
    }, [people]);

    const resetClick = () => {
        setTip(null)
        setCustomTip(null)
        setBill(null)
        setPeople(null)
        setTipAmount(null)
        setTotal(null)
        setResetDisabled(true)
    }

    return (
        <div className='table'>
            <DataControls
                setTip={setTip}
                setCustomTip={setCustomTip}
                setBill={setBill}
                setPeople={setPeople}
                tip={tip}
                customTip={customTip}
                bill={bill}
                people={people}
                inputPeopleError={inputPeopleError}
            />
            <Results resetDisabled={resetDisabled}
                     tipAmount={tipAmount}
                     total={total}
                     onResetClick={resetClick}/>
        </div>
    );
}

