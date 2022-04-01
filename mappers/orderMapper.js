const apiOrder = {
    order: {
        shippingDetails: {
            to: "",
            country: "",
            city: "",
            zipCode: "",
            address: ""
        },
        additionallNote: ""
    },
    customer: {
        fullName: "",
        country: "",
        city: "",
        zipCode: "",
        streetAddress: "",
        phoneNumber: "",
        email: ""
    }
}

const toOrderApi = (clientOrder) => {
    const { shippingDetails, additionallNote } = apiOrder.order
    const customer = apiOrder.customer
    const {
        shippingDetails: clientShippingDetails,
        additionalInfo, billingDetails,
        contactInformation
    } = clientOrder

    shippingDetails.to = clientShippingDetails.fullName
    shippingDetails.country = clientShippingDetails.country
    shippingDetails.city = clientShippingDetails.city
    shippingDetails.zipCode = clientShippingDetails.zipCode
    shippingDetails.address = clientShippingDetails.streetAddress

    additionallNote = additionalInfo.note

    customer.city = shippingDetails.city
    customer.fullName = billingDetails.fullName
    customer.country = shippingDetails.country
    customer.zipCode = shippingDetails.zipCode
    customer.streetAddress = billingDetails.streetAddress
    customer.phoneNumber = contactInformation.phoneNumber
    customer.email = contactInformation.email

    return {
        order: {
            shippingDetails,
            additionallNote
        },
        customer
    }
}


export { toOrderApi }

