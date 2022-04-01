import { Divider, Paper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { MultyStepForm } from "../../enums";
import styles from '../../styles/CheckoutComponent.module.css'
import { FormSection } from "../UI/FormSection";
import AdditionalInfo from "./AdditionalInfo";
import BillingDetails from "./BillingDetails";
import ContactInfo from "./ContactInfo";
import FormSteps from "./FormSteps";
import ConfirmOrder from "./ConfirmOrder";
import ShippingDetails from "./ShippingDetails";

import * as OrderService from '../../services/orderService'
import { useEffect, useState } from "react";

function CheckoutComponent() {


    const activeStepRedux = useSelector(state => state.checkoutForm.activeStep)

    const [activeStep, setActiveStep] = useState(MultyStepForm.SHIPPING_DETAILS)

    const dispatch = useDispatch();

    useEffect(() => {
        const savedActiveStep = OrderService.getActiveStep()
        if (savedActiveStep !== activeStep) {
            dispatch({ type: 'CHANGE_ACTIVE_STEP', payload: savedActiveStep })
        }
        setActiveStep(activeStepRedux)
    }, [activeStepRedux])


    return (
        <Paper elevation={3} className={styles.checkout}>
            <h3>Checkout</h3>
            <FormSteps styles={styles} />
            <Divider />
            <article className={styles.form} style={{ minHeight: '460px' }}>
                <FormSection active={activeStep === MultyStepForm.SHIPPING_DETAILS}>
                    <ShippingDetails styles={styles} />
                </FormSection>
                <FormSection active={activeStep === MultyStepForm.BILLING_DETAILS}>
                    <BillingDetails styles={styles} />
                </FormSection>
                <FormSection active={activeStep === MultyStepForm.CONTACT_INFO}>
                    <ContactInfo styles={styles} />
                </FormSection>
                <FormSection active={activeStep === MultyStepForm.ADDITIONAL_INFO}>
                    <AdditionalInfo styles={styles} />
                </FormSection>
                <FormSection active={activeStep === MultyStepForm.CONFIRM_ORDER}>
                    <ConfirmOrder styles={styles} />
                </FormSection>
            </article>
        </Paper>
    );
}

export default CheckoutComponent;