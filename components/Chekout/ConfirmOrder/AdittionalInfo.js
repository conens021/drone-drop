import { Box } from "@mui/material";

function AdittionalInfo({styles}) {
    return (
        <>
            <h4>Additional Info</h4>
            <div className={styles.formRow} style={{ marginBottom: 0 }}>
                <Box sx={{ flex: 1 }}>
                    <h5 style={{ marginBottom: '.2rem', fontWeight: 500 }}>Shipping Note</h5>
                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </span>
                </Box>
            </div>
        </>
    );
}

export default AdittionalInfo;