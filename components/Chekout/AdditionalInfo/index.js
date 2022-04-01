import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { MultyStepForm } from "../../../enums";
import Coupone from '../Coupone/index'

import * as OrderService from '../../../services/orderService'
import { useDispatch } from "react-redux";

function AdditionalInfo({ styles }) {

    const [orderNoteValue, setOrderNoteValue] = useState('')
    const [couponeCodeInputValue, setCouponeCodeInputValue] = useState('')
    const [couponeCode, setCouponeCode] = useState({})

    const dispatch = useDispatch();

    //in case of preffiled data
    useEffect(() => {
        const { note, couponeCode } = OrderService.getAdditionalInfo();
        setOrderNoteValue(note)
        setCouponeCodeInputValue(couponeCode)
    }, [])

    const couponeAppliedHandler = (couponeData) => {
        setCouponeCode(couponeData)
    }

    const handleNext = () => {
        const additionalInfo = {
            note: orderNoteValue,
            coupone: couponeCode
        }

        dispatch({ type: 'SET_ADDITIONAL_INFO', payload: additionalInfo })
        dispatch({ type: 'CHANGE_ACTIVE_STEP', payload: MultyStepForm.CONFIRM_ORDER })
        
        OrderService.setAdditionalInfo(getForStorage())
        OrderService.setActiveStep(MultyStepForm.CONFIRM_ORDER)
    }

    const handleBack = () => {
        dispatch({ type: 'CHANGE_ACTIVE_STEP', payload: MultyStepForm.CONTACT_INFO })
        OrderService.setActiveStep(MultyStepForm.CONTACT_INFO)
    }

    const getForStorage = () => {
        return {
            note: orderNoteValue,
            couponeCode: couponeCodeInputValue
        }
    }

    return (
        <>
            <h4>additional info</h4>
            <div className={styles.formRow}>
                <TextField
                    color='primary'
                    fullWidth
                    id="filled-multiline-flexible"
                    label="Add Note (optional)"
                    multiline
                    minRows={5}
                    maxRows={7}
                    variant="filled"
                    defaultValue={orderNoteValue}
                />
            </div>
            <div className={styles.formRow} style={{ alignItems: 'stretch' }}>
                <Coupone
                    defaultValue={couponeCodeInputValue}
                    setCouponeApplied={couponeAppliedHandler} />
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
                >
                    Next
                </Button>
            </div>
        </>
    );
}

export default AdditionalInfo;