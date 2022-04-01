import { Button, Divider, Paper } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/CartComponents.module.css";

import * as CartService from '../../services/cart.js'
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Cart() {

  const cart = CartService.getCart();

  const [cartItems, setCartItems] = useState([])

  const [cartSubtotal, setCartSubtotal] = useState(0.00)

  const [deliveryCost, setDeliveryCost] = useState(0.00)

  const [total, setTotal] = useState(0.00)

  const [coupone, setCoupone] = useState({
    title: '',
    isPresent: false,
    value: 0.00
  })

  const [discountValue,setDiscountValue] = useState(0.00)

  //redux coupone
  const couponeState = useSelector(state => state.coupone)

  //on page load
  useEffect(() => {
    const { totalAmount, subtotal, delivery, coupone: cartCoupune, couponeValue, couponeText } = cart;

    setCartItems(cart.items)

    setCartSubtotal(subtotal)

    setCoupone({
      title: couponeText,
      isPresent: cartCoupune,
      value: couponeValue
    })

    setDiscountValue(CartService.getCouponeValue())

    setTotal(totalAmount)
  }, [])


  useEffect(() => {
    if (couponeState && couponeState.isPresent) {

      setCoupone({ isPresent: true, value: couponeState.value, title: couponeState.title })
      setDiscountValue(CartService.getCouponeValue())
      setTotal(CartService.getTotal())
    }
  }, [cartItems, cartSubtotal, deliveryCost, total, couponeState])

  return (
    <Paper elevation={3} className={styles.cart}>
      <h3>Order Cart</h3>
      <ul className={styles.cartItems}>
        {cartItems.map(item => (
          <React.Fragment key={item.cartType}>
            <li key={item.cartType} className={styles.cartItem}>
              <div className={styles.cartItemImageContainer}>
                <Image
                  src={`/images/${item.image.src}`}
                  className={styles.cartItemImage}
                  layout="fill"
                />
              </div>
              <div className={styles.itemTitle}>{item.title}</div>
              <div className={styles.itemPrice}>${item.price}</div>

            </li>
            <Divider />

          </React.Fragment>
        ))}
      </ul>
      <div className={styles.cartTotal}>
        <div className="subtotal">
          <div className={styles.text}>Subtotal</div>
          <div className="amount">${cartSubtotal}</div>
        </div>
        <div className="delivery-cost">
          <div className={styles.text}>Delivery Cost</div>
          <div className={styles.deliveryCost}>FREE</div>
        </div>
        {(coupone.isPresent) &&

          <div className="coupone-discount">
            <div className={styles.text}>Copune Discount <span className={styles.couponeTitle}>${coupone.title}</span></div>
            <div className={styles.couponeCost}>-${discountValue}</div>
          </div>

        }
        <div className="total">
          <div className={styles.text}>Total Amount</div>
          <div className={styles.totalAmount}>${total}</div>
        </div>
      </div>
      <Divider />
      <div className="actionButtons" style={{ paddingTop: '2rem', paddingBottom: '1rem' }}>
        <Link href="/battery-options" replace>
          <Button
            color="primary"
            variant="contained"
            size="large"
            className="button"
          >
            BACK
          </Button>
        </Link>
        <Link href="/checkout" replace>
          <Button
            color="secondary"
            variant="contained"
            size="large"
            className="button"
          >
            CHECKOUT
          </Button>
        </Link>
      </div>
    </Paper>
  );
}

export default Cart;
