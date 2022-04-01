import { cameraType, cartType } from '../enums/index'

export const cameraData = [
  {
    id: 1,
    title: "1080p Single Camera",
    price: 0.00,
    type: cameraType.HD,
    cartType: cartType.CAMERA,
    image: {
      src: "objektiv-edited-1.png",
      width: 75,
      minWidth: 32,
      height: 75,
    },
    cardType: {
      color: "#3C9FB8",
      title: "1080p",
      thin: "FULL",
      bold: "HD",
    },
  },
  {
    id: 2,
    title: "4K Single Camera",
    price: 6.61,
    type: cameraType.ULTRA,
    cartType: cartType.CAMERA,
    image: {
      src: "objektiv-edited-1.png",
      width: 75,
      minWidth: 32,
      height: 75,
    },
    cardType: {
      color: "#3CB850",
      title: "4K",
      thin: "Ultra",
      bold: "HD",
    },
  },
  {
    id: 3,
    title: "4K Double Camera",
    price: 16.5,
    type: cameraType.ULTRA_DOUBLE,
    cartType: cartType.CAMERA,
    image: {
      src: "objetkivdouble-edited.png",
      width: 75,
      minWidth: 32,
      height: 75,
    },
    cardType: {
      color: "#F8B737",
      title: "4K",
      thin: "Ultra",
      bold: "HD",
      additionallInfo: "x2",
    },
  },
];
