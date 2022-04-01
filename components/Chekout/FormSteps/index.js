import { Box, Step, StepButton, Stepper, } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import * as OrderService from '../../../services/orderService'


const FormSteps = ({ styles }) => {

    const activeStepRedux = useSelector(state => state.checkoutForm.activeStep)

    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});

    useEffect(() => {
        if (activeStepRedux > activeStep)
            handleComplete()

        setActiveStep(activeStepRedux)
    }, [activeStepRedux])


    useEffect(() => {
        const alreadyCompleted = OrderService.getCompletedSteps();

        if(!alreadyCompleted) setCompleted({})

        setCompleted(alreadyCompleted)
    }, [])

    const steps = [
        'Shipping Details',
        'Billing Details',
        'Contact Information',
        'Addtional Info',
        'Confirm Order',
        'Make Payment',
    ];

    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? // It's the last step, but not all steps have been completed,
                // find the first step that has been completed
                steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        OrderService.addCompleteStep(activeStep)
        handleNext();
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };

    return (
        <Box className={styles.steper}>
            <Stepper alternativeLabel nonLinear activeStep={activeStep}>
                {steps.map((label, index) => (
                    <Step key={label} completed={completed[index]}>
                        <StepButton color="inherit">
                            {label}
                        </StepButton>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
}

export default FormSteps;