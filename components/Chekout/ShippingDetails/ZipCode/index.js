import { TextField } from "@mui/material";
import { useEffect, useState } from "react";


function ZipCode({ defaultValue,setZipCode, setZipCodeValid }) {

    const [ZipCodeInputValue, setZipCodeInputValue] = useState('');
    const [ZipCodeInputValid, setZipCodeInputValid] = useState(false)
    const [ZipCodeTouched, setZipCodeTouched] = useState(false)

    useEffect(() => {
        setZipCodeInputValue(defaultValue)
        const defaultInputIsValid = validateZipCode(defaultValue)
        if (defaultInputIsValid) {
            setZipCodeTouched(true)
            setZipCodeInputValid(true)
        }
    }, [defaultValue])

    const validateZipCode = (value) => {
        const regex = new RegExp(/^\d{5}(-\d{4})?$/)
        return regex.test(value)
    }

    const ZipCodeChangeHandler = (event) => {
        const ZipCodeNewValue = event.target.value
        setZipCodeInputValue(ZipCodeNewValue)
        setZipCodeTouched(true)
        setZipCodeInputValid(validateZipCode(ZipCodeNewValue))
    }

    useEffect(() => {
        setZipCode(ZipCodeInputValue)
        setZipCodeValid(ZipCodeInputValid)
    }, [ZipCodeInputValue, ZipCodeInputValid, ZipCodeTouched])


    const ZipCodeNotValid = !ZipCodeInputValid && ZipCodeTouched

    return (
        <TextField
            value={ZipCodeInputValue}
            color="primary"
            sx={{ flex: '1' }}
            id="zip-code"
            label="ZIP Code"
            variant="filled"
            required
            onChange={ZipCodeChangeHandler}
            error={ZipCodeNotValid}
            helperText={ZipCodeNotValid ? 'Zip Code not valid' : ''}
        />
    );
}

export default ZipCode;