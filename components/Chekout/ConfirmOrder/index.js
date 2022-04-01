import { Box, Button, CircularProgress, Divider, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MultyStepForm } from "../../../enums";
import AdittionalInfo from "./AdittionalInfo";
import BillingDetails from "./BillingDetails";
import ContactInfo from "./ContactInfo";
import ShippingDetails from "./ShippingDetails";

import * as OrderService from '../../../services/orderService'
import * as CartService from '../../../services/cart'
import * as CouponeService from '../../../services/couponeService'
import * as OrderClient from '../../../api-client/order'
import { useRouter } from "next/router";

function ConfirmOrder({ styles }) {

    const [isLoading, setLoading] = useState(false)
    const activeStep = useSelector(state => state.checkoutForm.activeStep)

    const router = useRouter()

    const dispatch = useDispatch();

    const [orderInfo, setOrderInfo] = useState({
        shippingDetails: {
            fullName: '',
            country: '',
            city: '',
            zipCode: '',
            streetAddress: ''
        },
        billingDetails: {
            fullName: '',
            streetAddress: '',
        },
        contactInformation: {
            email: '',
            phoneNumber: '',
        },
        additionalInfo: {
            note: '',
        }
    })

    useEffect(() => {
        updateShippingDetails()
        updateBillingDetails()
        updateContactInfo()
        updateAdittionalInfo()

    }, [activeStep])

    const updateShippingDetails = () => {
        const { fullName, country, city, zipCode, streetAddress } = OrderService.getShippingDetails();
        const shippingDetails = { fullName, country, city, zipCode, streetAddress }

        setOrderInfo(prev => ({ ...prev, shippingDetails }))
    }

    const updateBillingDetails = () => {
        const { fullName, streetAddress } = OrderService.getBillingDetails();
        const billingDetails = { fullName, streetAddress }


        setOrderInfo(prev => ({ ...prev, billingDetails }))
    }

    const updateContactInfo = () => {
        const { email, phoneNumber } = OrderService.getContactInfo();
        const contactInformation = { email, phoneNumber }

        setOrderInfo(prev => ({ ...prev, contactInformation }))
    }

    const updateAdittionalInfo = () => {
        const { note } = OrderService.getAdditionalInfo();
        const additionalInfo = { note }

        setOrderInfo(prev => ({ ...prev, additionalInfo }))
    }

    const handleNext = async () => {
        if (isLoading) return

        setLoading(true)

        const apiOrder = OrderService.storageToApiOrder()
        const apiCart = CartService.storageToApiCart()
        const apiCoupone = CouponeService.storageToApiCoupone()

        const data =
        {
            order: { ...apiOrder.order, ...apiCart },
            customer: { ...apiOrder.customer }, couponeId: apiCoupone
        }

        try {
            const responeData = await OrderClient.createOrder(data)

            handleSuccess(responeData)
        } catch (e) {
            setLoading(false)
        }
    }

    const handleSuccess = (responeData) => {
        const orderSku = responeData.order.order_SKU;

        OrderService.deleteOrderFromStorage()

        OrderService.setOrderSku(orderSku)

        router.push("/payment-method")

        setLoading(false)
    }

    const handleEdit = () => {
        dispatch({ type: 'CHANGE_ACTIVE_STEP', payload: MultyStepForm.SHIPPING_DETAILS })
        //  OrderService.setActiveStep(MultyStepForm.CONTACT_INFO)
    }

    return (
        <>
            <div className={`${styles.formRow} row-wrap`}>
                <Box sx={{ flex: '1' }}>
                    <ShippingDetails
                        details={orderInfo.shippingDetails}
                        styles={styles}
                    />
                </Box>
                <Box sx={{ flex: '1' }}>
                    <BillingDetails
                        details={orderInfo.billingDetails}
                        styles={styles}
                    />
                </Box>
            </div>
            <Divider />
            <div className={`${styles.formRow} row-wrap`}>
                <Box sx={{ flex: '1' }}>
                    <ContactInfo
                        details={orderInfo.contactInformation}
                        styles={styles}
                    />
                </Box>
                <Box sx={{ flex: '1' }}>
                    <AdittionalInfo
                        details={orderInfo.additionalInfo}
                        styles={styles}
                    />
                </Box>
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
                    onClick={handleEdit}
                >
                    Edit Details
                </Button>
                <Button
                    color='primary'
                    variant="contained"
                    onClick={handleNext}
                    disabled={isLoading}
                    sx={{ minWidth: '124.69px', maxHeight: '36.5px' }}
                >
                    {isLoading ? <CircularProgress color="success" sx={{ padding: '.5rem' }} /> : "To Payment"}
                </Button>
            </div>
        </>
    );

}

export default ConfirmOrder;