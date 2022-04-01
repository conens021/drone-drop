import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { MultyStepForm } from "../../../enums";
import City from "./City";
import CountrySelect from "./Country";
import FullName from "./FullName";
import StreetAddress from "./StreetAddress";
import ZipCode from "./ZipCode";

import * as OrderService from '../../../services/orderService'

function ShippingDetails({ styles }) {

    const [formIsValid, setFormIsValid] = useState(false)
    const [fullNameValue, setFullNameValue] = useState('')
    const [fullNameValid, setFullNameValid] = useState(false)
    const [countryValue, setCountryValue] = useState('')
    const [countryValid, setCountryValid] = useState(false)
    const [cityValue, setCityValue] = useState('')
    const [cityValid, setCityValid] = useState(false)
    const [zipCodeValue, setZipCodeValue] = useState('')
    const [zipCodeValid, setZipCodeValid] = useState(false)
    const [streetAddressValue, setStreetAddressValue] = useState('')
    const [streetAddressValid, setStreetAddressValid] = useState(false)

    const dispatch = useDispatch()

    //in case of preffiled data
    useEffect(() => {
        const { fullName, country, city, zipCode, streetAddress } = OrderService.getShippingDetails();
        setFullNameValue(fullName)
        setCountryValue(country)
        setCityValue(city)
        setZipCodeValue(zipCode)
        setStreetAddressValue(streetAddress)
    }, [])

    const setCountryHandler = (value) => {
        setCountryValue(value)
    }

    const setCountryValidHandler = (value) => {
        setCountryValid(value)
    }

    const setFullNameHandler = (value) => {
        setFullNameValue(value)
    }

    const fullNameValidHandler = (value) => {
        setFullNameValid(value)
    }
    const setCityHandler = (value) => {
        setCityValue(value)
    }

    const setCityValidHandler = (value) => {
        setCityValid(value)
    }

    const zipCodeChangeHandler = (value) => {
        setZipCodeValue(value)
    }

    const zipCodeValidHandler = (value) => {
        setZipCodeValid(value)
    }

    const streetAddressChanheHandler = (value) => {
        setStreetAddressValue(value)
    }

    const streetAddressValidHandler = (value) => {
        setStreetAddressValid(value)
    }

    const handleNext = () => {
        if (formIsValid) {
            const shippingDetails = {
                fullName: fullNameValue,
                country: countryValue,
                city: cityValue,
                zipCode: zipCodeValue,
                streetAddress: streetAddressValue,
                completed: true
            }
            //Local Storage
            OrderService.setShippingDetails(shippingDetails)
            OrderService.setActiveStep(MultyStepForm.BILLING_DETAILS)

            //Redux
            dispatch({ type: 'SET_SHIPPING_DETAILS', payload: shippingDetails })
            dispatch({ type: 'CHANGE_ACTIVE_STEP', payload: MultyStepForm.BILLING_DETAILS })
        } else {
            alert('Form is not valid')
        }
    }

    useEffect(() => {
        const valid =
            fullNameValid && countryValid && cityValid && zipCodeValid && streetAddressValid

        setFormIsValid(valid)
    },
        [
            fullNameValue, fullNameValid, countryValue,
            countryValid, cityValue, cityValid, zipCodeValue,
            zipCodeValid, streetAddressValue, streetAddressValid
        ]
    )

    return (
        <>
            <h4>SHIPPING DETAILS</h4>
            <div className={`${styles.formRow} row-wrap`}>
                <FullName
                    setFullNameValid={fullNameValidHandler}
                    setFullName={setFullNameHandler}
                    defaultValue={fullNameValue}
                />
            </div>
            <div className={`${styles.formRow} row-wrap`}>
                <CountrySelect
                    setCountryValid={setCountryValidHandler}
                    setCountry={setCountryHandler}
                    defaultValue={countryValue}
                />
                <ZipCode
                    setZipCode={zipCodeChangeHandler}
                    setZipCodeValid={zipCodeValidHandler}
                    defaultValue={zipCodeValue}
                />
            </div>
            <div className={`${styles.formRow} row-wrap`}>
                <City
                    setCity={setCityHandler}
                    setCityValid={setCityValidHandler}
                    defaultValue={cityValue}
                />
                <StreetAddress
                    setStreetAddress={streetAddressChanheHandler}
                    setValid={streetAddressValidHandler}
                    defaultValue={streetAddressValue}
                />
            </div>
            <div className="formRow"
                style={{
                    width: '100%',
                    position: 'absolute',
                    bottom: '-100px',
                    display: 'flex', justifyContent: 'center', columnGap: '1rem'
                }}>
                <Button
                    color='secondary'
                    variant='contained'
                >
                    Exit
                </Button>
                <Button
                    color='primary'
                    variant="contained"
                    onClick={handleNext}
                    disabled={!formIsValid}
                >
                    Next
                </Button>
            </div>
        </>
    );
}

export default ShippingDetails;