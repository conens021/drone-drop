import { TextField } from "@mui/material";
import { useEffect, useState } from "react";

function EmailAddress({ defaultValue = '', setEmail, setEmailValid }) {

    const [emailInputValue, setEmailInputValue] = useState('');
    const [emailInputValid, setEmailInputValid] = useState(false)
    const [emailTouched, setEmailTouched] = useState(false)

    useEffect(() => {
        setEmailInputValue(defaultValue)
        const defaultInputIsValid = validateEmail(defaultValue)
        console.log(`${defaultValue} is valid : ${defaultInputIsValid}`)
        if (defaultInputIsValid) {
            setEmailTouched(true)
            setEmailInputValid(true)
        }
    }, [defaultValue])

    useEffect(() => {
        setEmail(emailInputValue)
        setEmailValid(emailInputValid)
    }, [emailInputValue, emailInputValid, emailTouched])

    const validateEmail = (value) => {
        const regex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
        return regex.test(value);
    }

    const emailChangeHandler = (event) => {
        const emailNewValue = event.target.value
        setEmailInputValue(emailNewValue)
        setEmailTouched(true)
        setEmailInputValid(validateEmail(emailNewValue))
    }

    const emailNotValid = !emailInputValid && emailTouched

    return (
        <TextField
            value={emailInputValue}
            type='email'
            fullWidth
            id="email"
            color="primary"
            label="Email Address"
            variant="filled"
            onChange={emailChangeHandler}
            error={emailNotValid}
            helperText={emailNotValid ? 'Email not valid' : ''}
        />
    );
}

export default EmailAddress;