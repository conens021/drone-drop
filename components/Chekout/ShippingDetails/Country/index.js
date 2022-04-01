import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { countries } from '../../../../data/countries'

function CountrySelect({ defaultValue = '', setCountry, setCountryValid }) {

    const [selectedCountry, setSelectedCountry] = React.useState('')
    const [countryIsValid, setCountryIsValid] = React.useState(false)
    const [countryIsTouched, setCountryIsTouched] = React.useState(false)

    useEffect(() => {
        setSelectedCountry(defaultValue)
        const defaultInputIsValid = validateCountry(defaultValue)
        if (defaultInputIsValid) {
            setCountryIsValid(true)
            setCountryIsTouched(true)
        }
    }, [defaultValue])

    useEffect(() => {
        setCountry(selectedCountry)
        setCountryValid(countryIsValid)
    }, [selectedCountry, countryIsTouched, countryIsValid])

    const stateChangedHandler = (event) => {
        const countryValue = event.target.value
        setSelectedCountry(countryValue)
        setCountryIsTouched(true)
        setCountryIsValid(validateCountry(countryValue))
    }

    const selectChangeHandler = (event, newValue) => {

        const country = newValue ? newValue.label : ''

        console.log(country)

        setSelectedCountry(country)
        setCountryIsTouched(true)
        setCountryIsValid(validateCountry(country))
    }


    const validateCountry = (value) => {
        const valueEdited = value.toLocaleLowerCase().trim();
        return countries.some(country =>
            country.label.toLocaleLowerCase() === valueEdited)
    }

    const countryNotValid = !countryIsValid && countryIsTouched

    return (
        <Autocomplete
            id="country-select-demo"
            inputValue={selectedCountry}
            onChange={selectChangeHandler}
            sx={{ flex: '1' }}
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
                    {option.label}
                </Box>
            )}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Choose a country"
                    variant="filled"
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                    error={countryNotValid}
                    helperText={countryNotValid ? 'Country is not valid' : ''}
                    onChange={stateChangedHandler}
                />
            )}
        />
    );
}

export default CountrySelect;