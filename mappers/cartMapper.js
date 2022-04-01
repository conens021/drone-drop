const cartApi = {
    droneColor: 1,
    battery: 1,
    camera: 1
}

const toCartApi = (clientCart) => {
    const { batteryOption, cameraType, droneType } = clientCart

    cartApi.battery = batteryOption
    cartApi.camera = cameraType
    cartApi.droneColor = droneType


    return cartApi;
}

export { toCartApi }