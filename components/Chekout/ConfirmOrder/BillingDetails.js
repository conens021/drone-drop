import { Box } from "@mui/material";

function BillingDetails({styles,details}) {
    return (
        <>
            <h4>Billing Details</h4>
            <div className={styles.formRow} style={{ marginBottom: 0 }}>
                <Box sx={{ flex: 1 }}>
                    <h5 style={{ marginBottom: '.2rem', fontWeight: 500 }}>Full Name</h5>

                    <span>{details.fullName}</span>
                </Box>
            </div>
            <div className={styles.formRow} style={{ marginBottom: 0 }}>
                <Box sx={{ flex: 1 }}>
                    <h5 style={{ marginBottom: '.2rem', fontWeight: 500 }}>Street Address</h5>
                    <span>{details.streetAddress}</span>
                </Box>
            </div></>
    );
}

export default BillingDetails;