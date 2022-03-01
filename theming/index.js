import { createTheme } from '@mui/material';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#FFFFFF',
            contrastText: '#DB3835',
        },
        secondary: {
            main: '#DB3835',
            contrastText: '#FFFFFF',
        },
        background: {
            default: "#EDEDED",
            paper: '#FFFFFF'

        },
        text: {
            primary: "#3C3C3C"
        }
    }
})