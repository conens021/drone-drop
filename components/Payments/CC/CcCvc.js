import { useEffect } from 'react'
import { TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from 'react-redux';

function CcCvc() {
    const [cvc, setCvc] = useState('')
    const [cvcValid, setCvcValid] = useState(false)
    const [cvcTouched, setCvcTouched] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        const data = {
            value: cvc,
            isValid: cvcValid
        }
        dispatch({ type: 'SET_CC_CVC', payload: data })
    }, [cvc, cvcValid, cvcTouched])

    const cvcChangedHandler = (event) => {
        const newValue = event.target.value

        setCvcTouched(true)

        setCvc(newValue)

        setCvcValid(validate(newValue))
    }

    const validate = (value) => {
        const numericRegex = new RegExp('^[0-9]{0,19}$')

        return value.length >= 1 && numericRegex.test(value)
    }

    const cvcNotValid = !cvcValid && cvcTouched
    const cvcIsValid = cvcValid && cvcTouched


    const getInputColor = () => {
        return cvcIsValid ? 'success' : 'primary'
    }

    return (
        <TextField
            value={cvc}
            sx={{ flex: '1' }}
            id="filled-multiline-flexible"
            label="CVC"
            variant="outlined"
            onChange={cvcChangedHandler}
            error={cvcNotValid}
            helperText={cvcNotValid ? 'Cvc not valid' : ''}
            color={getInputColor()}
        />
    );
}

export default CcCvc;