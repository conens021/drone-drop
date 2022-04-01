import { Autocomplete, Box, TextField } from "@mui/material";
import { useEffect, useState } from "react";

import { countries } from '../../../../data/countries'

function PhonePrefix({ defaultValue = '', setPhonePrefix, setPhonePrefixValid,styles }) {

    const [PhonePrefixInputValue, setPhonePrefixInputValue] = useState('');
    const [PhonePrefixInputValid, setPhonePrefixInputValid] = useState(false)
    const [PhonePrefixTouched, setPhonePrefixTouched] = useState(false)

    useEffect(() => {
        setPhonePrefixInputValue(defaultValue)
        const defaultInputIsValid = validatePhonePrefix(defaultValue)
        if (defaultInputIsValid) {
            setPhonePrefixTouched(true)
            setPhonePrefixInputValid(true)
        }
    }, [defaultValue])

    useEffect(() => {
        setPhonePrefix(PhonePrefixInputValue)
        setPhonePrefixValid(PhonePrefixInputValid)
    }, [PhonePrefixInputValue, PhonePrefixInputValid, PhonePrefixTouched])

    const PhonePrefixChangeHandler = (event) => {
        const PhonePrefixNewValue = event.target.value
        setPhonePrefixInputValue(PhonePrefixNewValue)
        setPhonePrefixTouched(true)
        setPhonePrefixInputValid(validatePhonePrefix(PhonePrefixNewValue))
    }

    const selectChangeHandler = (event, newValue) => {
        const phone = newValue ? newValue.phone : ''

        setPhonePrefixInputValue(phone)
        setPhonePrefixTouched(true)
        setPhonePrefixInputValid(validatePhonePrefix(phone))
    }

    const validatePhonePrefix = (value) => {
        return countries.some(country => country.phone === value)
    }

    const PhonePrefixNotValid = !PhonePrefixInputValid && PhonePrefixTouched

    return (
        <Autocomplete
            className={styles.phonePrefix}
            id="phone-prefix"
            inputValue={PhonePrefixInputValue}
            onChange={selectChangeHandler}
            options={countries}
            autoHighlight
            getOptionLabel={(option) => option.label}
            renderOption={(props, option) => (
                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                    <img
                        loading="lazy"
                        width="20"
                        src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                        srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                        alt=""
                    />
                    {option.code} {" "} {option.phone}
                </Box>
            )}
            renderInput={(params) => (
                <TextField

                    {...params}
                    label="Country Code"
                    variant="filled"
                    inputProps={{
                        ...params.inputProps,
                    }}
                    error={PhonePrefixNotValid}
                    helperText={PhonePrefixNotValid ? 'Phone prefix is not valid' : 'Search By Country Name'}
                    onChange={PhonePrefixChangeHandler}
                />
            )}
        />
    );
}

export default PhonePrefix;