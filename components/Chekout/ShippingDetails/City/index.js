import { TextField } from "@mui/material";
import { useEffect, useState } from "react";

function City({ defaultValue,setCity, setCityValid }) {

    const [cityInputValue, setCityInputValue] = useState('');
    const [cityInputValid, setCityInputValid] = useState(false)
    const [cityTouched, setCityTouched] = useState(false)

    useEffect(() => {
        setCityInputValue(defaultValue)
        const defaultInputIsValid = validatecity(defaultValue)
        if (defaultInputIsValid) {
            setCityTouched(true)
            setCityInputValid(true)
        }
    }, [defaultValue])

    const validatecity = (value) => {
        return value.length >= 2
    }

    const cityChangeHandler = (event) => {
        const cityNewValue = event.target.value
        setCityInputValue(cityNewValue)
        setCityTouched(true)
        setCityInputValid(validatecity(cityNewValue))
    }

    useEffect(() => {
        setCity(cityInputValue)
        setCityValid(cityInputValid)
    }, [cityInputValue, cityInputValid, cityTouched])


    const cityNotValid = !cityInputValid && cityTouched

    return (
        <TextField
            value={cityInputValue}
            sx={{ flex: '1' }}
            id="city"
            color="primary"
            label="City"
            variant="filled"
            required
            onChange={cityChangeHandler}
            error={cityNotValid}
            helperText={cityNotValid ? 'Input not valid' : ''}
        />
    );
}

export default City;