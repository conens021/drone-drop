import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import * as CouponeApi from '../../../api-client/coupone'
import * as CartService from '../../../services/cart'
import * as CouponeService from '../../../services/couponeService'

function Coupone({ defaultValue = '', setCouponeApplied }) {

    const [couponeInputValue, setCouponeInputValue] = useState('')
    const [couponeValid, setCouponeValid] = useState(false)
    const [couponeTouched, setCouponeTouched] = useState(false)
    const [couponeError, setCouponeError] = useState('')

    const dispatch = useDispatch()

    useEffect(() => {
        setCouponeInputValue(defaultValue)
    }, [defaultValue])

    const couponeChangedHandler = (event) => {
        setCouponeInputValue(event.target.value)
        setCouponeValid(true)
    }

    const couponeAppliedHandler = async () => {
        setCouponeTouched(true)
        try {
            const couponeData = await getCouponeCode()
            setCouponeValid(true)
            setCouponeApplied(couponeData)
            CartService.applyCoupone(couponeData)
            CouponeService.setCoupone(couponeData)
            dispatch({ type: 'APPLY_COUPONE', payload: couponeData })
        } catch (e) {
            setCouponeError(e.response.data.title)
            setCouponeValid(false)
        }
    }

    const getCouponeCode = async () => {
        const data = await CouponeApi.getByCode(couponeInputValue)

        const couponeFromDb = {
            id : data.id,
            title: data.title,
            value: data.value,
            isPresent: true
        }

        return couponeFromDb
    }

    const couponeNotValid = couponeTouched && !couponeValid

    return (
        <>
            <TextField
                sx={{ flex: '1' }}
                type='tel'
                id="filled-basic"
                color="primary"
                label="Coupone Code"
                onChange={couponeChangedHandler}
                variant="filled"
                helperText={couponeNotValid ? couponeError : ''}
                error={couponeNotValid}
            />
            <Button
                variant="contained" color='secondary'
                size='large'
                onClick={couponeAppliedHandler}
            >
                Apply
            </Button>
        </>
    );
}

export default Coupone;