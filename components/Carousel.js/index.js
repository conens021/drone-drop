import React, { useEffect, useState } from "react";
import styles from "../../styles/Carousel.module.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Card } from "../../components/UI/Card";
import Image from "next/image";
import { CardImage } from "../UI/CardImage";

export default function Carousel({
  cards,
  minHeight,
  width,
  responsiveWidth,
  columnMr,
}) {
  const [selected, setSelected] = useState(null);
  const [left, setLeft] = useState(0);
  const [leftArrowVisible, setLeftArrowVisible] = useState(true);
  const [rightArrowVisible, setRightArrowVisible] = useState(true);

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

  useEffect(() => {
    console.log(left);
  }, [left]);

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
            onClick={() => setSelected(card.id)}
            left={left}
            className={styles.card}
            width={cardWidth}
            responsive={cardWidthResponsive}
            minHeight={cardMinHeight}
          >
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

            <div className="card-price">{card.price}</div>
            {card.cardType && (
              <div
                className={styles.cardType}
                style={{ backgroundColor: card.cardType.color }}
              >
                {card.cardType.title}
                <br />
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
