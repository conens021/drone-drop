const paymentMethod = 0

const getStoragePayment = () => {
    if (typeof window !== 'undefined') {
        const paymentMethodFromStorage = localStorage.getItem('payment');
        if (!paymentMethodFromStorage) {
            localStorage.setItem('payment', paymentMethod)

            return paymentMethod
        }
        return paymentMethodFromStorage
    } else {
        return paymentMethod
    }
}

const setPaymentMethod = (method) => {
    const paymentFromStorage = getStoragePayment()

    if (!paymentFromStorage) return paymentMethod

    localStorage.setItem('payment', method);

    return method
}

const getPaymentMethod = () => {
    const paymentFromStorage = getStoragePayment()
    if (!paymentFromStorage) return paymentMethod

    return paymentFromStorage
}

export { setPaymentMethod, getPaymentMethod }