import Head from "next/head";
import React from "react";
import styles from "../../styles/Cart.module.css";
import Cart from "../../components/Cart";

export default function CartPage() {
  return (
    <React.Fragment>
      <Head>
        <title>Cart | Drone App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className="container">
          <h1 className="page-title">Check Yor Order</h1>
          <Cart />
    
        </div>
      </main>
    </React.Fragment>
  );
}
