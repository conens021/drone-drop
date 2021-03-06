import { Button } from "@mui/material";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import styles from "../../styles/BatteryOptions.module.css";
import Link from "next/link";
import { batteriesData } from '../../data/batteriesData'
import * as CartService from '../../services/cart';
import Carousel from "../../components/Carousel.js";
import { cartType } from "../../enums";

export default function BatteryOptions() {

  const cardWidth = 237;
  const cardWidthResponsive = 207;
  const cardMinHeight = 237;
  const columngMargin = 2;

  const [selectedBatteryOption, setSelectedBatteryOption] = useState(0)

  useEffect(() => {
    setSelectedBatteryOption(CartService.getBatteryOption())
  }, [])

  return (
    <React.Fragment>
      <Head>
        <title>Choose Battery Option | Drone App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className="container">
          <h1
            className="page-title"
            style={{ position: "relative", left: "-5%" }}
          >
            <span>Battery </span>Options
          </h1>
        </div>
        <Carousel
          cards={batteriesData}
          minHeight={cardMinHeight}
          width={cardWidth}
          responsiveWidth={cardWidthResponsive}
          columnMr={columngMargin}
          preSelected={selectedBatteryOption}
          optionType={cartType.BATTERY}
        />
        <div className="actionButtons">
          <Link href="/camera-mode" replace>
            <Button
              color="primary"
              variant="contained"
              size="large"
              className="button"
            >
              BACK
            </Button>
          </Link>
          <Link href="/cart" replace>
            <Button
              color="secondary"
              variant="contained"
              size="large"
              className="button"
            >
              NEXT
            </Button>
          </Link>
        </div>
      </main>
    </React.Fragment>
  );
}
