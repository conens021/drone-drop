import { createTheme } from '@mui/material';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#DB3835',
            contrastText: '#FFFFFF',
        },
        secondary: {
            main: '#FFFFFF',
            contrastText: '#DB3835',

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