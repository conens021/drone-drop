import { useEffect } from 'react'
import { TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from 'react-redux';

function CcExp() {
    const dispatch = useDispatch()

    const expDateMaxLength = 4
    const numOfSpaces = (expDateMaxLength / 2) - 1

    const [expDate, setexpDate] = useState('')
    const [expDateValid, setexpDateValid] = useState(false)
    const [expDateTouched, setexpDateTouched] = useState(false)
    const [expDateInputValue, setexpDateInputValue] = useState('')
    const [expDateBlured, setexpDateBlured] = useState(false)

    useEffect(() => {
        const data = {
            value: expDateInputValue,
            isValid: expDateValid
        }
        dispatch({ type: 'SET_CC_EXP_DATE', payload: data })
    }, [expDate, expDateValid, expDateTouched, expDateInputValue])

    const expDateChangedHandler = (event) => {

        const newValue = event.target.value
        const newInputValue = newValue
        const withoutSpaces = newValue.replaceAll("/", "")

        if (!isNumeric(withoutSpaces)) {
            return
        }

        if (expDateBlured) {
            if (!valid(withoutSpaces)) {
                setexpDateValid(false)
            } else {
                setexpDateValid(true)
            }
        }

        if (newValue.length > expDateInputValue.length) {
            const edited = formatexpDate(newInputValue)
            setexpDateInputValue(edited)
            setexpDate(withoutSpaces)
        } else {
            setexpDateInputValue(newValue)
            setexpDate(withoutSpaces)
        }
    }

    const onexpDateBlurHandler = (event) => {
        setexpDateBlured(true)
        setexpDateTouched(true)

        const newValue = event.target.value
        const withoutSpaces = newValue.replaceAll("/", "")

        if (!valid(withoutSpaces)) {
            setexpDateValid(false)
        } else {
            setexpDateValid(true)
        }
    }

    const isNumeric = (value) => {
        const regex = new RegExp('^[0-9]{0,19}$')

        return regex.test(value)
    }

    const valid = (value) => {
        const regex = new RegExp('^[0-9]{0,19}$')

        return regex.test(value) && value.length === expDateMaxLength
    }

    const formatexpDate = (value) => {
        const withoutSpaces = value.replaceAll("/", "")
        const length = withoutSpaces.length ? withoutSpaces.length : 0

        if (length % 2 === 0 && length < expDateMaxLength) {
            const concated = value.concat('/')
            console.log(concated)
            return concated
        }
        return value
    }

    const getInputColor = () => {
        return expDateIsValid ? 'success' : "primary"
    }

    const expDateNotValid = !expDateValid && expDateTouched
    const expDateIsValid = expDateValid && expDateTouched

    return (
        <TextField
            value={expDateInputValue}
            sx={{ flex: '1' }}
            id="filled-multiline-flexible"
            label="Exp.Date (MM/YY)"
            variant="outlined"
            onChange={expDateChangedHandler}
            onBlur={onexpDateBlurHandler}
            helperText={expDateNotValid ? 'Exp date not valid' : ''}
            error={expDateNotValid}
            inputProps={{ maxLength: expDateMaxLength + numOfSpaces }}
            color={getInputColor()}
        />
    );
}

export default CcExp;