
import { useEffect } from 'react'
import { Box, TextField } from "@mui/material";
import { useState } from "react";
import { CcType } from '../../../enums';
import { useDispatch } from 'react-redux';

function CcNumber({ styles }) {
    const dispatch = useDispatch()

    const ccNumberMaxLength = 16
    const numOfSpaces = (ccNumberMaxLength / 4) - 1

    const [ccNumber, setCcNumber] = useState('')
    const [ccNumberValid, setCcNumberValid] = useState(false)
    const [ccNumberTouched, setCcNumberTouched] = useState(false)
    const [ccNumberInputValue, setCcNumberInputValue] = useState('')
    const [ccNumberBlured, setCcNumberBlured] = useState(false)

    const [ccType, setCcType] = useState(0)


    useEffect(() => {
        const data = {
            value: ccNumber,
            isValid: ccNumberValid
        }
        dispatch({ type: 'SET_CC_NUMBER', payload: data })
    }, [ccNumber, ccNumberValid, ccNumberTouched, ccNumberInputValue])

    const ccNumberChangedHandler = (event) => {

        const newValue = event.target.value
        const newInputValue = newValue
        const withoutSpaces = newValue.replaceAll(" ", "")

        if (!isNumeric(withoutSpaces)) {
            return
        }

        if (ccNumberBlured) {
            if (!valid(withoutSpaces)) {
                setCcNumberValid(false)
            } else {
                setCcNumberValid(true)
            }
        }

        if (newValue.length === 1)
            setCcTypeHandler(newValue)

        if (newValue.length > ccNumberInputValue.length) {
            const edited = formatCCNumber(newInputValue)
            setCcNumberInputValue(edited)
            setCcNumber(withoutSpaces)
        } else {
            setCcNumberInputValue(newValue)
            setCcNumber(withoutSpaces)
        }
    }

    const onCCNumberBlurHandler = (event) => {
        setCcNumberBlured(true)
        setCcNumberTouched(true)

        const newValue = event.target.value
        const withoutSpaces = newValue.replaceAll(" ", "")

        if (!valid(withoutSpaces)) {
            setCcNumberValid(false)
        } else {
            setCcNumberValid(true)
        }
    }

    const isNumeric = (value) => {
        const regex = new RegExp('^[0-9]{0,19}$')

        return regex.test(value)
    }

    const valid = (value) => {
        const regex = new RegExp('^[0-9]{0,19}$')

        return regex.test(value) && value.length === ccNumberMaxLength
    }

    const formatCCNumber = (value) => {
        const withoutSpaces = value.replaceAll(" ", "")
        const length = withoutSpaces.length ? withoutSpaces.length : 0

        if (length % 4 === 0 && length < ccNumberMaxLength) {
            console.log(length)
            console.log(ccNumberMaxLength)
            return value.concat(' ')
        }
        return value
    }

    const setCcTypeHandler = (newValue) => {
        if (newValue.startsWith('4')) {
            setCcType(CcType.VISA)
            return
        }
        if (newValue.startsWith('5')) {
            setCcType(CcType.MC)
            return
        }
        if (newValue.startsWith('3')) {
            setCcType(CcType.AE)
            return
        }
        if (newValue.startsWith('6')) {
            setCcType(CcType.DISC)
            return
        }

    }

    const getInputColor = () => {
        return ccNumberIsValid ? 'success' : "primary"
    }

    const ccNumberNotValid = !ccNumberValid && ccNumberTouched
    const ccNumberIsValid = ccNumberValid && ccNumberTouched

    return (
        <TextField
            fullWidth
            id="filled-multiline-flexible"
            label="Credit Card Number"
            variant="outlined"
            value={ccNumberInputValue}
            onChange={ccNumberChangedHandler}
            onBlur={onCCNumberBlurHandler}
            inputProps={{ maxLength: ccNumberMaxLength + numOfSpaces }}
            helperText={ccNumberNotValid ? 'Not valid CC number' : ''}
            error={ccNumberNotValid}
            color={getInputColor()}
        />
    );
}

export default CcNumber;