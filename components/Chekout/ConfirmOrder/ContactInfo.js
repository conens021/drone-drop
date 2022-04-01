import { Box } from "@mui/material";

function ContactInfo({ styles,details }) {
    return (
        <>
            <h4>Contact Information</h4>
            <div className={styles.formRow} style={{ marginBottom: 0 }}>
                <Box sx={{ flex: 1 }}>
                    <h5 style={{ marginBottom: '.2rem', fontWeight: 500 }}>Email Address</h5>
                    <span>{details.email}</span>
                </Box>
            </div>
            <div className={styles.formRow} style={{ marginBottom: 0 }}>
                <Box sx={{ flex: 1 }}>
                    <h5 style={{ marginBottom: '.2rem', fontWeight: 500 }}>Phone Number</h5>
                    <span>{details.phoneNumber}</span>
                </Box>
            </div>

        </>
    );
}

export default ContactInfo;