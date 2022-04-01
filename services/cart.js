
import * as DroneService from '../services/droneType'
import * as CameraService from '../services/cameraType'
import * as BatteryService from '../services/batteryType'

import { cartType } from '../enums'

import * as CartMapper from '../mappers/cartMapper'

const cart = {
    droneType: 0,
    cameraType: 0,
    batteryOption: 0,
    items: [],
    subtotal: 0.00,
    totalAmount: 0.00,
    coupone: false,
    couponeValue: 0.00,
    couponeText: ''
}

const getCart = () => {
    if (typeof window !== 'undefined') {
        const cartFromStorage = JSON.parse(localStorage.getItem('cart'));
        if (!cartFromStorage) {
            localStorage.setItem('cart', JSON.stringify(cart))
            return cart
        }
        return cartFromStorage
    } else {
        return null
    }
}

const getTotal = () => {
    const cartFromStorage = getCart()
    if (!cartFromStorage) return

    return cartFromStorage.totalAmount
}

const setDroneType = (droneType) => {
    const cartFromStorage = getCart()

    if (!cartFromStorage) return

    const item = DroneService.getByType(droneType);

    if (cartFromStorage.droneType == 0) {

        cartFromStorage.droneType = droneType

        const editedCart = addTocart(item, cartFromStorage)

        console.log('inserting first time')


        console.log(editedCart)
        return editedCart
    }
    else {
        cartFromStorage.droneType = droneType
        const filteredItems = cartFromStorage.items.filter(i => i.cartType !== cartType.DRONE)
        filteredItems[0] = item

        cartFromStorage.items = filteredItems

        updateCart(cartFromStorage)

        return cartFromStorage
    }
}

const setCameraType = (cameraType) => {
    const cartFromStorage = getCart()

    if (!cartFromStorage) return

    const item = CameraService.getByType(cameraType);

    if (cartFromStorage.cameraType == 0) {

        cartFromStorage.cameraType = cameraType

        const editedCart = addTocart(item, cartFromStorage)

        return editedCart
    }
    else {
        cartFromStorage.cameraType = cameraType
        const filteredItems = cartFromStorage.items.filter(i => i.cartType !== cartType.CAMERA)

        filteredItems[1] = item

        cartFromStorage.items = filteredItems

        console.log('changing cart')
        updateCart(cartFromStorage)

        return cartFromStorage
    }
}

const setBatteryOption = (batteryOption) => {

    const cartFromStorage = getCart()

    if (!cartFromStorage) return

    const item = BatteryService.getByType(batteryOption);

    if (cartFromStorage.batteryOption == 0) {

        cartFromStorage.batteryOption = batteryOption

        const editedCart = addTocart(item, cartFromStorage)

        return editedCart
    }
    else {
        cartFromStorage.batteryOption = batteryOption

        const filteredItems = cartFromStorage.items.filter(i => i.cartType !== cartType.BATTERY)

        filteredItems[2] = item

        cartFromStorage.items = filteredItems

        console.log('changing cart')

        updateCart(cartFromStorage)

        return cartFromStorage
    }
}

const applyCoupone = (coupone) => {

    const cartFromStorage = getCart()

    if (!cartFromStorage) return

    cartFromStorage.coupone = true
    cartFromStorage.couponeValue = coupone.value
    cartFromStorage.couponeText = coupone.title


    return updateCart(cartFromStorage)
}


const addTocart = (item, cartFromStorage) => {

    cartFromStorage.items.push(item)
    cartFromStorage.subtotal += item.price

    updateCart(cartFromStorage)

    return cartFromStorage
}


const updateCart = (newState) => {
    const subtotal = recalculateSubtotal(newState)
    const total = recalculateTotal(newState)

    newState.subtotal = subtotal
    newState.totalAmount = total

    localStorage.setItem('cart', JSON.stringify(newState))

    return newState
}

const recalculateSubtotal = (cart) => {
    const items = cart.items
    const subtotal = 0
    items.forEach(i => subtotal += i.price)
    return subtotal
}

const recalculateTotal = (cart) => {
    const subtotal = cart.subtotal
    const coupone = cart.couponeValue

    if (coupone <= 0) return subtotal

    return calculateDiscount(subtotal, coupone)
}

const getCouponeValue = () => {
    const cartFromStorage = getCart()

    const subtotal = cartFromStorage.subtotal
    const couponeValue = cartFromStorage.couponeValue

    return (subtotal * couponeValue) / 100
}

const getDroneType = () => {
    const cartFromStorage = getCart()
    if (!cartFromStorage) return 0

    return cartFromStorage.droneType
}

const getCameraType = () => {
    const cartFromStorage = getCart()
    if (!cartFromStorage) return 0

    return cartFromStorage.cameraType
}

const getBatteryOption = () => {
    const cartFromStorage = getCart()
    if (!cartFromStorage) return 0

    return cartFromStorage.batteryOption
}

const storageToApiCart = () => {
    const storageCart = getCart()
    const cartApi = CartMapper.toCartApi(storageCart)

    return cartApi
}

const calculateDiscount = (subtotal, couponeValue) => {
    const discount = (subtotal * couponeValue) / 100


    return subtotal - discount
}

export {
    getCart, setDroneType,
    getDroneType, setCameraType,
    getCameraType, setBatteryOption,
    getBatteryOption, applyCoupone,
    storageToApiCart, getTotal,
    getCouponeValue
}