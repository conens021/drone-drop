import { Button, Divider, Paper, TextField } from "@mui/material";

import styles from '../../styles/CheckoutComponent.module.css'
import CountrySelect from "./Country";

function CheckoutComponent() {
    return (
        <Paper elevation={3} className={styles.checkout}>
            <h3>Checkout</h3>
            <Divider />
            <article className={styles.form}>
                <section className={styles.formSection}>
                    <h4>SHIPPING DETAILS</h4>
                    <div className={styles.formRow}>
                        <TextField
                            fullWidth
                            id="filled-basic"
                            color="secondary"
                            label="Full Name"
                            variant="filled" />
                    </div>
                    <div className={styles.formRow}>
                        <CountrySelect />
                    </div>
                    <div className={styles.formRow}>
                        <TextField
                            id="filled-basic"
                            color="secondary"
                            label="City"
                            variant="filled" />
                        <TextField
                            type='number'
                            id="filled-basic"
                            color="secondary"
                            label="ZIP Code"
                            variant="filled" />
                    </div>
                </section>
                <section className={styles.formSection}>
                    <h4>BILLING DETAILS</h4>
                    <div className={styles.formRow}>
                        <TextField
                            fullWidth
                            id="filled-basic"
                            color="secondary"
                            label="Full Name"
                            variant="filled" />
                    </div>
                    <div className={styles.formRow}>
                        <TextField
                            fullWidth
                            id="filled-basic"
                            color="secondary"
                            label="Street Address"
                            variant="filled" />
                    </div>
                </section>
                <section className={styles.formSection}>
                    <h4>CONTACT INFORMATION</h4>
                    <div className={styles.formRow}>
                        <TextField
                            type='email'
                            fullWidth
                            id="filled-basic"
                            color="secondary"
                            label="Email Address"
                            variant="filled" />
                    </div>
                    <div className={styles.formRow}>
                        <TextField
                            type='tel'
                            fullWidth
                            id="filled-basic"
                            color="secondary"
                            label="Phone Number"
                            variant="filled" />
                    </div>
                </section>
                <section className={styles.formSection}>
                    <h4>additional info</h4>
                    <div className={styles.formRow}>
                        <TextField
                            color='secondary'
                            fullWidth
                            id="filled-multiline-flexible"
                            label="Add Note"
                            multiline
                            rows={4}
                            maxRows={4}
                            variant="filled"
                        />
                    </div>
                    <div className={styles.formRow} style={{ alignItems: 'flex-end' }}>
                        <TextField
                            type='tel'
                            id="filled-basic"
                            color="secondary"
                            label="Coupone Code"
                            variant="filled" />
                        <Button variant="contained" color='secondary' size='medium' style={{ flex: '1' }}>Apply</Button>
                    </div>
                </section>
                <section className={styles.formSection}>
                    <h4>Payment Method</h4>
                    <div className={styles.formRow}>
                        <TextField
                            type='email'
                            fullWidth
                            id="filled-basic"
                            color="secondary"
                            label="Email Address"
                            variant="filled" />
                    </div>
                    <div className={styles.formRow}>
                        <TextField
                            type='tel'
                            fullWidth
                            id="filled-basic"
                            color="secondary"
                            label="Phone Number"
                            variant="filled" />
                    </div>
                </section>
            </article>
        </Paper>
    );
}

export default CheckoutComponent;