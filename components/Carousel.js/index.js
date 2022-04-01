import React, { useEffect, useState } from "react";
import styles from "../../styles/Carousel.module.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CheckIcon from "@mui/icons-material/Check";
import { Card } from "../../components/UI/Card";
import Image from "next/image";
import { CardImage } from "../UI/CardImage";
import * as CartService from '../../services/cart'
import { cartType, cameraType, batteryType } from "../../enums";
import { DisabledOverlay } from "../UI/DisabledOverlay";
import { Button } from "@mui/material";
import Link from "next/link";

export default function Carousel({
  cards,
  minHeight,
  width,
  responsiveWidth,
  columnMr,
  preSelected,
  optionType
}) {
  const [selected, setSelected] = useState(null);
  const [left, setLeft] = useState(0);
  const [leftArrowVisible, setLeftArrowVisible] = useState(true);
  const [rightArrowVisible, setRightArrowVisible] = useState(true);

  const [cart, setCart] = useState(CartService.getCart())

  const cardWidth = width;
  const cardWidthResponsive = responsiveWidth;
  const cardMinHeight = minHeight;

  const goLeft = () => {
    setLeft((prev) => prev + cardWidth);
  };

  const goRight = () => {
    setLeft((prev) => prev - cardWidth);
  };
  useEffect(() => {
    toggleArrows();
  }, [left]);

  const toggleArrows = () => {
    if (left >= cardWidth) {
      setLeftArrowVisible(false);
    } else {
      setLeftArrowVisible(true);
    }

    if (left <= -cardWidth) {
      setRightArrowVisible(false);
    } else {
      setRightArrowVisible(true);
    }
  };

  const setSelectedHandler = (card) => {
    if (isCardDisabled(card)) return
    setSelected(card.id)
    //if cart type is camera add camera to cart
    if (card.cartType === cartType.CAMERA) {
      console.log(card.type)
      const newCartState = CartService.setCameraType(card.type)

      setCart(newCartState)
    }
    else if (card.cartType === cartType.BATTERY) {

      const newCartState = CartService.setBatteryOption(card.type)

      setCart(newCartState)
    }
  }


  const isHdCameraSelected = () => {
    return (CartService.getCameraType() === cameraType.HD)
  }

  const isCardDisabled = (card) => {
    if (card.cartType === cartType.CAMERA) return false
    return isHdCameraSelected() && (card.type === batteryType.DOUBLE || card.type === batteryType.TRIPLE)
  }

  const showDisabledHelper = (card) => {
    if (card.cartType === cartType.BATTERY) {
      if (isCardDisabled(card)) {
        return (
          <DisabledOverlay>
            <h4>Only Available in 4k Camera Mode</h4>
            <Link href='/camera-mode' replace>
              <Button size='small'>Switch Camera</Button>
            </Link>
          </DisabledOverlay>
        )
      }
    }
  }

  useEffect(() => {
    if (preSelected !== 0) {
      if (optionType === cartType.BATTERY && isHdCameraSelected()) {
        CartService.setBatteryOption(batteryType.SINGLE)
        setSelected(batteryType.SINGLE)
        return
      }
      setSelected(preSelected)
    }
  }, [preSelected]);

  return (
    <React.Fragment>
      <div className={styles.prev}>
        {leftArrowVisible && <ArrowBackIosNewIcon onClick={goLeft} />}
      </div>
      <div className={styles.next}>
        {rightArrowVisible && <ArrowForwardIosIcon onClick={goRight} />}
      </div>
      <ul className={styles.cards} style={{ columnGap: `${columnMr}rem` }}>
        {cards.map((card) => (
          <Card
            key={card.id}
            chosen={selected === card.id}
            onClick={() => setSelectedHandler(card)}
            left={left}
            className={styles.card}
            width={cardWidth}
            responsive={cardWidthResponsive}
            minHeight={cardMinHeight}
            disabled={isCardDisabled(card)}
          >
            <div className="selected" style={{ backgroundColor: "#3CB850" }}>
              <CheckIcon sx={{ backgroundColor: "#3CB850 !important" }} />
            </div>

            {showDisabledHelper(card)}

            <h3>{card.title}</h3>

            <CardImage
              width={card.image.width}
              minWidth={card.image.minWidth}
              height={card.image.height}
            >
              <div className="imageContainer">
                <Image
                  src={`/images/${card.image.src}`}
                  className="image"
                  layout="fill"
                />
              </div>
            </CardImage>

            <div className="card-price">{card.price === 0.00 ? "FREE" : `$${card.price}`}</div>
            {card.cardType && (
              <div
                className={styles.cardType}
                style={{ backgroundColor: card.cardType.color }}
              >
                {card.cardType.title}
                <span className={styles.spanThin}> {card.cardType.thin}</span>
                <span className={styles.spanBold}> {card.cardType.bold}</span>
                {card.cardType.additionallInfo && (
                  <span
                    className={styles.spanThin}
                    style={{ marginRight: 0, marginLeft: ".3rem" }}
                  >
                    {card.cardType.additionallInfo}
                  </span>
                )}
              </div>
            )}
          </Card>
        ))}
      </ul>
    </React.Fragment>
  );
}
