import { TextField } from "@mui/material";
import { useEffect, useState } from "react";

function FullName({ defaultValue, setFullName, setFullNameValid, elementId = 'full-name' }) {
    const [fullNameInputValue, setFullNameInputValue] = useState('');
    const [fullNameInputValid, setFullNameInputValid] = useState(false)
    const [fullNameTouched, setFullTouched] = useState(false)

    const validateFullName = (value) => {
        return value.length >= 2
    }
  
    useEffect(() => {
        setFullNameInputValue(defaultValue)
        const defaultInputIsValid = validateFullName(defaultValue)
        if (defaultInputIsValid) {
            setFullTouched(true)
            setFullNameInputValid(true)
        }
    }, [defaultValue])
    
    useEffect(() => {
        setFullName(fullNameInputValue)
        setFullNameValid(fullNameInputValid)
    }, [fullNameInputValue, fullNameInputValid, fullNameTouched])


    const fullNameChangeHandler = (event) => {
        const fullNameNewValue = event.target.value
        setFullNameInputValue(fullNameNewValue)
        setFullTouched(true)
        setFullNameInputValid(validateFullName(fullNameNewValue))
    }

    const fullNameNotValid = !fullNameInputValid && fullNameTouched

    return (
        <TextField
            value={fullNameInputValue}
            fullWidth
            id={elementId}
            color="primary"
            label="Full Name"
            variant="filled"
            required
            onChange={fullNameChangeHandler}
            error={fullNameNotValid}
            helperText={fullNameNotValid ? 'Full name must be at least 4 chars long' : ''}
        />
    );
}

export default FullName;