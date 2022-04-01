
import { createStore } from 'redux'
import { MultyStepForm } from '../enums'

const initialState = {
    sideBarOpen: false,
    coupone: {},
    deliveryState: {},
    checkoutForm: {
        activeStep: MultyStepForm.SHIPPING_DETAILS,
        shippingDetails: {
            fullName: '',
            country: '',
            city: '',
            zipCode: '',
            streetAddress: '',
            completed: false
        },
        billingDetails: {
            fullName: '',
            streetAddress: '',
            sameAsShipping: true,
            completed: false
        },
        contactInformation: {
            email: '',
            phoneNumber: '',
            completed: false
        },
        paymentMethod: {

        },
        additionalInfo: {
            note: '',
            coupone: {}
        }
    },
    ccPayment: {
        ccNumber: {
            value: '',
            isValid: false
        },
        expDate: {
            value: '',
            isValid: false
        },
        cvc: {
            value: '',
            isValid: false
        }
    }
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_SIDEBAR':
            console.log('changing state')
            const newSideBarState = {
                ...state, sideBarOpen: action.sideBarOpen
            }
            return newSideBarState
        case 'APPLY_COUPONE':
            const newCouponeState = { ...state, coupone: action.payload }
            return newCouponeState
        case 'SET_SHIPPING_DETAILS':
            const checkoutForm = { ...state.checkoutForm, shippingDetails: action.payload }
            const newShippingDetails = { ...state, checkoutForm }
            return newShippingDetails

        case 'SET_BILLING_DETAILS':
            const billingForm = { ...state.checkoutForm, billingDetails: action.payload }
            const newBillingDetails = { ...state, billingForm }
            return newBillingDetails

        case 'SET_CONTACT_INFO':
            const contactInfo = { ...state.checkoutForm, contactInformation: action.payload }
            return { ...state, contactInfo }

        case 'SET_ADDITIONAL_INFO':
            const additionalInfo = { ...state.checkoutForm, additionalInfo: action.payload }
            return { ...state, additionalInfo }

        case 'CHANGE_ACTIVE_STEP':
            return {
                ...state, checkoutForm:
                    { ...state.checkoutForm, activeStep: action.payload }
            }

        case 'SET_CC_NUMBER':
            return {
                ...state, ccPayment:
                    { ...state.ccPayment, ccNumber: action.payload }
            }

        case 'SET_CC_EXP_DATE':
            return {
                ...state, ccPayment:
                    { ...state.ccPayment, expDate: action.payload }
            }
        case 'SET_CC_CVC':
            return {
                ...state, ccPayment:
                    { ...state.ccPayment, cvc: action.payload }
            }

        default:
            return { ...state }
    }
}

const store = createStore(rootReducer)

export default store