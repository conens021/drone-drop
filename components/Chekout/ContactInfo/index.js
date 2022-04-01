import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { MultyStepForm } from "../../../enums";
import EmailAddress from "./Email";
import PhoneNumber from "./PhoneNumber";
import PhonePrefix from "./PhoneNumber/PhonePrefix";

import * as OrderService from '../../../services/orderService'

function ContactInfo({ styles }) {

    const [formIsValid, setFormIsValid] = useState()
    const [emailValue, setEmailValue] = useState()
    const [emailValid, setEmailValid] = useState()
    const [phoneNumberValue, setPhoneNumberValue] = useState()
    const [phoneNumberValid, setPhoneNumberValid] = useState()
    const [phonePrefixValue, setPhonePrefixValue] = useState()
    const [phonePrefixValid, setPhonePrefixValid] = useState()

    const dispatch = useDispatch();

    //in case of preffiled data
    useEffect(() => {
        const { email, phonePrefix, phoneNumber } = OrderService.getContactInfo();
        setEmailValue(email)
        setPhoneNumberValue(phoneNumber)
        setPhonePrefixValue(phonePrefix)
    }, [])

    useEffect(() => {
        const valid = emailValid && phoneNumberValid && phonePrefixValid
        setFormIsValid(valid)
    }, [emailValue, emailValid, phoneNumberValue, phoneNumberValid,phonePrefixValue,phonePrefixValid])


    const setEmailHandler = (value) => {
        setEmailValue(value)
    }

    const setEmailValidHandler = (value) => {
        setEmailValid(value)
    }
    const setPhonePrefixHandler = (value) => {
        setPhonePrefixValue(value)
    }

    const setPhonePrefixValidHandler = (value) => {
        setPhonePrefixValid(value)
    }
    const setPhoneNumberlHandler = (value) => {
        setPhoneNumberValue(value)
    }

    const setPhoneNumberlValidHandler = (value) => {
        setPhoneNumberValid(value)
    }

    const handleNext = () => {
        if (formIsValid) {
            const contactInfo = {
                email: emailValue,
                phoneNumber: phonePrefixValue.concat(phoneNumberValue),
                completed: true,
            }

            dispatch({ type: 'SET_CONTACT_INFO', payload: contactInfo })
            dispatch({ type: 'CHANGE_ACTIVE_STEP', payload: MultyStepForm.ADDITIONAL_INFO })
            
            OrderService.setContactInfo(getForStorage())
            OrderService.setActiveStep(MultyStepForm.ADDITIONAL_INFO)
        } else {
            alert('Form is not valid')
        }
    }


    const getForStorage = () => {
        const info = {
            email: emailValue,
            phoneNumber: phoneNumberValue,
            phonePrefix : phonePrefixValue
        }

        return info;
    }

    const handleBack = () => {
        dispatch({ type: 'CHANGE_ACTIVE_STEP', payload: MultyStepForm.BILLING_DETAILS })
        OrderService.setActiveStep(MultyStepForm.BILLING_DETAILS)
    }

    return (
        <>
            <h4>CONTACT INFORMATION</h4>
            <div className={styles.formRow}>
                <EmailAddress
                    setEmail={setEmailHandler}
                    setEmailValid={setEmailValidHandler}
                    defaultValue={emailValue}
                />
            </div>
            <div className={`${styles.formRow} row-wrap`}>
                <PhonePrefix
                    styles={styles}
                    setPhonePrefix={setPhonePrefixHandler}
                    setPhonePrefixValid={setPhonePrefixValidHandler}
                    defaultValue={phonePrefixValue}
                />
                <PhoneNumber
                    setPhoneNumber={setPhoneNumberlHandler}
                    setPhoneNumberValid={setPhoneNumberlValidHandler}
                    defaultValue={phoneNumberValue} />
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

export default ContactInfo;