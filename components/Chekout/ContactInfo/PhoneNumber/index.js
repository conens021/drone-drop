import { TextField } from "@mui/material";
import { useEffect, useState } from "react";

function PhoneNumber({ defaultValue = '',setPhoneNumber, setPhoneNumberValid }) {

    const [phoneNumberInputValue, setPhoneNumberInputValue] = useState('');
    const [phoneNumberInputValid, setPhoneNumberInputValid] = useState(false)
    const [phoneNumberTouched, setPhoneNumberTouched] = useState(false)

    useEffect(() => {
        setPhoneNumberInputValue(defaultValue)
        const defaultInputIsValid = validatephoneNumber(defaultValue)
        if (defaultInputIsValid) {
            setPhoneNumberTouched(true)
            setPhoneNumberInputValid(true)
        }
    }, [defaultValue])

    useEffect(() => {
        setPhoneNumber(phoneNumberInputValue)
        setPhoneNumberValid(phoneNumberInputValid)
    }, [phoneNumberInputValue, phoneNumberInputValid, phoneNumberTouched])

    const phoneNumberChangeHandler = (event) => {
        const phoneNumberNewValue = event.target.value
        setPhoneNumberInputValue(phoneNumberNewValue)
        setPhoneNumberTouched(true)
        setPhoneNumberInputValid(validatephoneNumber(phoneNumberNewValue))
    }

    const validatephoneNumber = (value) => {
        return value.length >= 7
    }

    const phoneNumberNotValid = !phoneNumberInputValid && phoneNumberTouched

    return (
        <TextField
            value={phoneNumberInputValue}
            sx={{ flex: '1' }}
            id="city"
            color="primary"
            label="Phone Number"
            variant="filled"
            required
            onChange={phoneNumberChangeHandler}
            error={phoneNumberNotValid}
            helperText={phoneNumberNotValid ? 'Phone number not valid' : ''}
        />
    );
}

export default PhoneNumber;