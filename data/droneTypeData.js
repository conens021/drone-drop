import { droneType,cartType } from "../enums"

export const droneTypeData = [
    {
        id: 1,
        title: "Black Drone",
        type: droneType.BLACK,
        cartType: cartType.DRONE,
        price: 53.26,
        image: {
            src: "black-edited-final.png",
            width: 75,
            minWidth: 32,
            height: 75,
        },
    },
    {
        id: 2,
        title: "White Drone",
        type: droneType.WHITE,
        cartType: cartType.DRONE,
        price: 53.26,
        image: {
            src: "black-edited-final.png",
            width: 75,
            minWidth: 32,
            height: 75,
        },
    }
]