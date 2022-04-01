import { TextField } from "@mui/material";
import { useEffect, useState } from "react";

function StreetAddress({ defaultValue, setStreetAddress, setValid, elementId = 'street-address' }) {

    const [streetAddresValue, setStreetAddressValue] = useState('');
    const [streetAddressValid, setStreetAddressValid] = useState(false)
    const [streetAddressTouched, setStreetAddressTouched] = useState(false)
    const streetAddressNotValid = !streetAddressValid && streetAddressTouched

    useEffect(() => {
        setStreetAddressValue(defaultValue)
        const defaultInputIsValid = validate(defaultValue)
        if (defaultInputIsValid) {
            setStreetAddressTouched(true)
            setStreetAddressValid(true)
        }
    }, [defaultValue])


    useEffect(() => {
        setStreetAddress(streetAddresValue)
        setValid(streetAddressValid)
    }, [streetAddresValue, streetAddressValid, streetAddressTouched])

    const streetAddressChangeHandler = (event) => {
        const newValue = event.target.value
        const valid = validate(newValue)

        setStreetAddressValue(newValue)
        setStreetAddressValid(valid)
        setStreetAddressTouched(true)
    }

    const validate = (value) => {

        const streetUs = new RegExp(/^(\d{3,})\s?(\w{0,5})\s([a-zA-Z]{2,30})\s([a-zA-Z]{2,15})\.?\s?(\w{0,5})$/)
        const streetEu = new RegExp(/^([A-ZÄÖÜ][a-zäöüß]+(([.] )|( )|([-])))+[1-9][0-9]{0,3}[a-z]?$/)

        return streetUs.test(value) || streetEu.test(value)
    }

    return (
        <TextField
            value={streetAddresValue}
            sx={{ flex: '1' }}
            id={elementId}
            color="primary"
            label="Street Address"
            variant="filled"
            onChange={streetAddressChangeHandler}
            error={streetAddressNotValid}
            helperText={streetAddressNotValid ? 'Not valid street address' : ''}
        />
    );
}

export default StreetAddress;