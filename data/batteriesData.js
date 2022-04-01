import {batteryType,cartType} from '../enums/index'

export const batteriesData = [
  {
    id: 1,
    title: "Single Battery",
    price: 0.00,
    type: batteryType.SINGLE,
    cartType : cartType.BATTERY,
    image: {
      src: "batteries.png",
      width: 174,
      minWidth: 32,
      height: 82,
    },
  },
  {
    id: 2,
    title: "2x Batteries Package",
    price: 8.23,
    type: batteryType.DOUBLE,
    cartType : cartType.BATTERY,
    image: {
      src: "Group 70.png",
      width: 174,
      minWidth: 32,
      height: 82,
    },
  },
  {
    id: 3,
    title: "3x Batteries Package",
    price: 15.59,
    type: batteryType.TRIPLE,
    cartType : cartType.BATTERY,
    image: {
      src: "Group 71.png",
      width: 174,
      minWidth: 32,
      height: 82,
    },
  },
];
