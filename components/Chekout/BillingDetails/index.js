import { Button, Checkbox, FormControlLabel } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MultyStepForm } from "../../../enums";
import FullName from "../ShippingDetails/FullName";
import StreetAddress from "../ShippingDetails/StreetAddress";

import * as OrderService from '../../../services/orderService'

function BillingDetails({ styles }) {

    const shippingDetails = useSelector(state => state.checkoutForm.shippingDetails)

    const [sameAsShipping, setSamAsShpiing] = useState(false)
    const [formIsValid, setFormIsValid] = useState(true)
    const [fullNameValue, setFullNameValue] = useState('')
    const [fullNameValid, setFullNameValid] = useState(true)
    const [streetAddressValue, setStreetAddressValue] = useState('')
    const [streetAddressValid, setStreetAddressValid] = useState(true)

    const dispatch = useDispatch()

    //in case of preffiled data
    useEffect(() => {
        const { fullName: fn, streetAddress: sa, sameAsShipping: sameAsSh } = OrderService.getBillingDetails();
        if (!sameAsSh) {
            setFullNameValue(fn)
            setStreetAddressValue(sa)
            setSamAsShpiing(sameAsSh)
        }
    }, [])

    useEffect(() => {
        if (sameAsShipping) {
            setFullNameValue(shippingDetails.fullName)
            setStreetAddressValue(shippingDetails.streetAddress)
        }
    }, [shippingDetails])

    useEffect(() => {
        const valid = fullNameValid && streetAddressValid
        setFormIsValid(valid)
    }, [fullNameValue, fullNameValid, streetAddressValue, streetAddressValid])

    const setFullNameHandler = (value) => {
        setFullNameValue(value)
    }

    const fullNameValidHandler = (value) => {
        setFullNameValid(value)
    }

    const streetAddressChanheHandler = (value) => {
        setStreetAddressValue(value)
    }

    const streetAddressValidHandler = (value) => {
        setStreetAddressValid(value)
    }

    const checkBoxChangeHandler = (event) => {
        const check = event.target.checked
        setSamAsShpiing(check)
        setFormIsValid(check)
        if (check) {
            setFullNameValue(shippingDetails.fullName)
            setFullNameValid(true)
            setStreetAddressValue(shippingDetails.streetAddress)
            setStreetAddressValid(true)
        } else {
            setFullNameValue('')
            setFullNameValid(false)
            setStreetAddressValue('')
            setStreetAddressValid(false)
        }
    }

    const handleNext = () => {
        if (formIsValid) {
            const billingDetails = {
                fullName: fullNameValue,
                streetAddress: streetAddressValue,
                sameAsShipping,
                completed: true,
            }

            OrderService.setBillingDetails(billingDetails)
            OrderService.setActiveStep(MultyStepForm.CONTACT_INFO)

            dispatch({ type: 'SET_BILLING_DETAILS', payload: billingDetails })
            dispatch({ type: 'CHANGE_ACTIVE_STEP', payload: MultyStepForm.CONTACT_INFO })
        } else {
            alert('Form is not valid')
        }
    }

    const handleBack = () => {
        dispatch({ type: 'CHANGE_ACTIVE_STEP', payload: MultyStepForm.SHIPPING_DETAILS })
        OrderService.setActiveStep(MultyStepForm.SHIPPING_DETAILS)

    }

    return (
        <>
            <h4>BILLING DETAILS</h4>
            <div className={styles.formRow} style={{ justifyContent: 'center' }}>
                <FormControlLabel
                    control=
                    {
                        <Checkbox checked={sameAsShipping}
                            onChange={checkBoxChangeHandler}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                    }
                    label="Same as shipping" />
            </div>
            {!sameAsShipping &&
                <>
                    <div className={styles.formRow}>
                        <FullName
                            elementId="billing-name"
                            setFullNameValid={fullNameValidHandler}
                            setFullName={setFullNameHandler}
                            defaultValue={fullNameValue}
                        />
                    </div>
                    <div className={styles.formRow}>
                        <StreetAddress
                            elementId="billing-address"
                            setStreetAddress={streetAddressChanheHandler}
                            setValid={streetAddressValidHandler}
                            defaultValue={streetAddressValue}
                        />
                    </div>
                </>
            }
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
                    onClick={handleBack}
                >
                    Back
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

export default BillingDetails;