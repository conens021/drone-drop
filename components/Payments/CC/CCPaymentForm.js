import { useEffect, useState } from 'react'
import { Box } from "@mui/material";
import CcNumber from './CcNumber';
import CcExp from './CcExp';
import CcCvc from './CcCvc';
import { useSelector } from 'react-redux';

function CCPaymentForm({ styles, setCcIsValid, setPaymentData }) {
    const paymentFormData = useSelector(state => state.ccPayment)

    const [ccNumber, setCcNumber] = useState(null)
    const [ccExpDate, setCcExpDate] = useState(null)
    const [cvc, setCvc] = useState(null)


    useEffect(() => {
        if (paymentFormData) {
            setCcNumber(paymentFormData.ccNumber)
            setCcExpDate(paymentFormData.expDate)
            setCvc(paymentFormData.cvc)
        }
    }, [paymentFormData])

    useEffect(() => {
        if (ccNumber && ccExpDate && cvc) {
            const ccNumberValid = ccNumber.isValid
            const expDateValid = ccExpDate.isValid
            const cvcValid = cvc.isValid

            const allFieldsValid = ccNumberValid && expDateValid && cvcValid

            if (allFieldsValid) {
                setCcIsValid(true)

                const paymentData = {
                    ccNumber,
                    ccExpDate,
                    cvc
                }

                setPaymentData(paymentData)
            } else {
                setCcIsValid(false)
            }
        }
    }, [ccNumber, ccExpDate, cvc])


    useEffect(() => { }, [])


    return (
        <Box className={styles.formContainer}>
            <div className={styles.formRow}>
                <CcNumber styles={styles} />
            </div>
            <div className={styles.formRow}>
                <CcExp />
                <CcCvc />
            </div>
        </Box>
    );
}

export default CCPaymentForm;