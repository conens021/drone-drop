import { Box } from "@mui/material";

function ShippingDetails({ styles, details = {} }) {
    return (
        <>
            <h4>Shipping Details</h4>
            <div className={styles.formRow} style={{ marginBottom: 0 }}>
                <Box sx={{ flex: 1 }}>
                    <h5 style={{ marginBottom: '.2rem', fontWeight: 500 }}>Full Name</h5>
                    <span>{details.fullName}</span>
                </Box>
                <Box sx={{ flex: 1 }}>
                    <h5 style={{ marginBottom: '.2rem', fontWeight: 500 }}>Country</h5>
                    <span>{details.country}</span>
                </Box>
            </div>
            <div className={styles.formRow} style={{ marginBottom: 0 }}>
                <Box sx={{ flex: 1 }}>
                    <h5 style={{ marginBottom: '.2rem', fontWeight: 500 }}>ZIP Code</h5>

                    <span>{details.zipCode}</span>
                </Box>
                <Box sx={{ flex: 1 }}>
                    <h5 style={{ marginBottom: '.2rem', fontWeight: 500 }}>City</h5>
                    <span>{details.city}</span>
                </Box>
            </div>
            <div className={styles.formRow} style={{ marginBottom: 0 }}>
                <Box sx={{ flex: 1 }}>
                    <h5 style={{ marginBottom: '.2rem', fontWeight: 500 }}>Street Address</h5>
                    <span>{details.streetAddress}</span>
                </Box>
            </div>
        </>
    );
}

export default ShippingDetails;