import { Button, Divider, Paper } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/CartComponents.module.css";

function Cart() {
  return (
    <Paper elevation={3} className={styles.cart}>
      <h3>Order Cart</h3>
      <ul className={styles.cartItems}>
        <li className={styles.cartItem}>
          <div className={styles.cartItemImageContainer}>
            <Image
              src="/images/black-edited-final.png"
              className={styles.cartItemImage}
              layout="fill"
            />
          </div>
          <div className={styles.itemTitle}>Item Title</div>
          <div className={styles.itemPrice}>$42.32</div>

        </li>
        <Divider />
        <li className={styles.cartItem}>
          <div className={styles.cartItemImageContainer}>
            <Image
              src="/images/black-edited-final.png"
              className={styles.cartItemImage}
              layout="fill"
            />
          </div>
          <div className={styles.itemTitle}>Item Title</div>
          <div className={styles.itemPrice}>$42.32</div>
        </li>
        <Divider />
        <li className={styles.cartItem}>
          <div className={styles.cartItemImageContainer}>
            <Image
              src="/images/black-edited-final.png"
              className={styles.cartItemImage}
              layout="fill"
            />
          </div>
          <div className={styles.itemTitle}>Item Title</div>
          <div className={styles.itemPrice}>$42.32</div>
        </li>
        <Divider />
      </ul>
      <div className={styles.cartTotal}>
        <div className="subtotal">
          <div className={styles.text}>Subtotal</div>
          <div className="amount">$255.22</div>
        </div>
        <div className="delivery-cost">
          <div className={styles.text}>Delivery Cost</div>
          <div className={styles.deliveryCost}>FREE</div>
        </div>
        <div className="total">
          <div className={styles.text}>Total Amount</div>
          <div className={styles.totalAmount}>$255.22</div>
        </div>
      </div>
      <Divider />
      <div className="actionButtons" style={{paddingTop:'2rem',paddingBottom:'1rem'}}>
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
