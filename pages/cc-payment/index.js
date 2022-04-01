import { Box, Button, Divider, Paper } from "@mui/material";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/router";
import styles from "../../styles/CCPayment.module.css";
import CCPaymentForm from "../../components/Payments/CC/CCPaymentForm";
import * as OrderService from '../../services/orderService'

export default function CreditCardPayment() {

    const [ccValid, setCcValid] = useState(false)
    const [orderSku, setOrderSku] = useState(null)
    const [order, setOrder] = useState(null)
    const [paymentData, setPaymentData] = useState({})

    const paymentTax = 0.55

    const router = useRouter()

    const setCcValidHandler = (value) => {
        setCcValid(value)
    }

    useEffect(() => {
        setOrderSku(OrderService.getOrderSku())
    }, [])


    useEffect(() => {
        if (orderSku) {
            loadOrderFromApi()
        }
    }, [orderSku])


    const setPaymentDataHandler = (data) => {
        setPaymentData(data)
    }

    const loadOrderFromApi = async () => {
        try {
            const response = await OrderService.getOrderBySku(orderSku)

            setOrder(response.data)
        } catch (e) {
            if (e.request) {
                if (e.request.status === 404) {
                    //handle order not found
                    toast.error('Order does not exists! You will be redirected to checkout page!')
                    setTimeout(() => {
                        router.push('/checkout')
                    }, 1000)
                }
            }
        }
    }

    const getAmountToPay = () => {
        return order ? order.total : 0.00
    }

    const getTotalToPay = () => {
        return getAmountToPay() + paymentTax
    }

    return (
        <React.Fragment>
            <Head>
                <title>Choose Payment Method | Drone App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <link rel="icon" href="/favicon.ic  o" />
            </Head>
            <ToastContainer />
            <main className={styles.main}>
                <div className="container"
                    style={{ minHeight: '100vh', minWidth: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Paper elevation={3} className={styles.paymentContainer}>
                        <h3>Credit Card Checkout</h3>
                        <Box className={styles.icons}>
                            <Box className={styles.rectangleIconContainer}>
                                <Image
                                    src={`/images/Free-Credit-Card-Icons-PSD-1.png`}
                                    className={styles.rectangleIcon}
                                    layout="fill"
                                />
                            </Box>
                            <Box className={styles.rectangleIconContainer}>
                                <Image
                                    src={`/images/master.png`}
                                    className={styles.rectangleIcon}
                                    layout="fill"
                                />
                            </Box>
                            <Box className={styles.rectangleIconContainer}>
                                <Image
                                    src={`/images/discover.png`}
                                    className={styles.rectangleIcon}
                                    layout="fill"
                                />
                            </Box>
                        </Box>
                        <Divider sx={{ marginBottom: '1.6rem' }} />

                        <CCPaymentForm
                            styles={styles}
                            setCcIsValid={setCcValidHandler}
                            setPaymentData={setPaymentDataHandler} />

                        <Divider sx={{ marginBottom: '1.6rem' }} />

                        <Box
                            style={{
                                flex: '1', display: 'flex', flexDirection: 'column',
                                justifyContent: 'flex-end', paddingBottom: '1rem',
                                rowGap: ".5rem"
                            }}>
                            <Box className={styles.amountToPay}>
                                <Box >Amount To Pay:</Box>
                                <span>${getAmountToPay()}</span>
                            </Box>
                            <Box className={styles.amountToPay}>
                                <Box >Payment Service Tax:</Box>
                                <span>+${paymentTax}</span>
                            </Box>
                            <Divider sx={{ marginTop: '.6rem', marginBottom: '.6rem' }} />
                            <Box className={styles.amountToPay}>
                                <Box >You will be charged of total:</Box>
                                <Box>${getTotalToPay()}</Box>
                            </Box>
                        </Box>

                        <div className="actionButtons" style={{ paddingTop: '2rem', paddingBottom: '1rem' }}>
                            <Link href="/payment-method" replace>
                                <Button
                                    color="secondary"
                                    variant="contained"
                                    size="medium"
                                    className="button"
                                >
                                    CHANGE METHOD
                                </Button>
                            </Link>

                            <Button
                                color="primary"
                                variant="contained"
                                size="medium"
                                className="button"
                                disabled={!ccValid}
                            >
                                Pay
                            </Button>
                        </div>
                    </Paper>
                </div>
            </main>
        </React.Fragment >
    );
}
