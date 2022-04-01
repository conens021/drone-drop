import { MultyStepForm } from "../enums";

import * as OrderMapper from '../mappers/orderMapper'
import * as OrderClient from '../api-client/order'

const order = {
    orderSku: null,
    activeStep: MultyStepForm.SHIPPING_DETAILS,
    completedSteps: [],
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
        phonePrefix: '',
        phoneNumber: '',
        completed: false
    },
    paymentMethod: {

    },
    additionalInfo: {
        note: '',
        couponeCode: ''
    }
}

const getStorageOrder = () => {
    if (typeof window !== 'undefined') {
        const orderFromStorage = JSON.parse(localStorage.getItem('order'));
        if (!orderFromStorage) {
            localStorage.setItem('order', JSON.stringify(order))
            return order
        }
        return orderFromStorage
    } else {
        return null
    }
}

const getShippingDetails = () => {
    const orderStorage = getStorageOrder();

    return orderStorage.shippingDetails;
}

const getBillingDetails = () => {
    const orderStorage = getStorageOrder();

    return orderStorage.billingDetails;
}

const getContactInfo = () => {
    const orderStorage = getStorageOrder();

    return orderStorage.contactInformation;
}

const getAdditionalInfo = () => {
    const orderStorage = getStorageOrder();

    return orderStorage.additionalInfo;
}

const getActiveStep = () => {
    const orderStorage = getStorageOrder();

    if (!orderStorage) return order

    return orderStorage.activeStep;
}


const setShippingDetails = (shippingDetails) => {
    const orderFromStorage = getStorageOrder()

    if (!orderFromStorage) return

    const newOrderState = { ...orderFromStorage, shippingDetails }

    localStorage.setItem('order', JSON.stringify(newOrderState));


    return newOrderState
}

const setBillingDetails = (billingDetails) => {
    const orderFromStorage = getStorageOrder()

    if (!orderFromStorage) return

    const newOrderState = { ...orderFromStorage, billingDetails }

    localStorage.setItem('order', JSON.stringify(newOrderState));


    return newOrderState
}

const setContactInfo = (contactInformation) => {
    const orderFromStorage = getStorageOrder()

    if (!orderFromStorage) return

    const newOrderState = { ...orderFromStorage, contactInformation }

    localStorage.setItem('order', JSON.stringify(newOrderState));


    return newOrderState
}

const setAdditionalInfo = (additionalInfo) => {
    const orderFromStorage = getStorageOrder()

    if (!orderFromStorage) return

    const newOrderState = { ...orderFromStorage, additionalInfo }

    localStorage.setItem('order', JSON.stringify(newOrderState));


    return newOrderState
}

const setActiveStep = (activeStep) => {
    const orderFromStorage = getStorageOrder()

    if (!orderFromStorage) return

    const newOrderState = { ...orderFromStorage, activeStep }

    localStorage.setItem('order', JSON.stringify(newOrderState));


    return newOrderState
}

const setOrderSku = (sku) => {
    localStorage.setItem('order_sku', sku);


    return sku
}

const addCompleteStep = (step) => {
    const orderFromStorage = getStorageOrder()

    if (!orderFromStorage) return

    const oldSteps = [...orderFromStorage.completedSteps]

    if (oldSteps.some(s => s === step)) return oldSteps

    oldSteps.push(step)

    const newState = { ...orderFromStorage, completedSteps: oldSteps }

    localStorage.setItem('order', JSON.stringify(newState))

    return oldSteps
}

const getOrderSku = () => {
    if (typeof window !== 'undefined') {
        const sku = localStorage.getItem('order_sku');


        return sku
    } else {
        return null
    }
}

const getCompletedSteps = () => {
    const orderFromStorage = getStorageOrder()

    if (!orderFromStorage) return {}


    return orderFromStorage.completedSteps
}

const storageToApiOrder = () => {
    const storageOrder = getStorageOrder();
    const orderApi = OrderMapper.toOrderApi(storageOrder)

    return orderApi
}

const getOrderBySku = async (sku) => {
    const order = await OrderClient.getOrderBySku(sku)


    return order
}


const deleteOrderFromStorage = () => {
    localStorage.removeItem('order')
}


export {
    getStorageOrder, setShippingDetails,
    getShippingDetails, setBillingDetails,
    getBillingDetails,
    getContactInfo, setContactInfo,
    getAdditionalInfo, setAdditionalInfo,
    getActiveStep, setActiveStep,
    addCompleteStep, getCompletedSteps,
    storageToApiOrder,
    getOrderSku, setOrderSku,
    getOrderBySku, deleteOrderFromStorage
}
