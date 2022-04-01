import { ThemeProvider } from "@mui/material";
import Head from "next/head";
import { Provider } from "react-redux";
import "../styles/globals.css";
import { theme } from "../theming";
import store from "../state";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Head>
          <link href="/fonts/SegoeUI/Bold/SEGOEUIB.TTF" />
          <link href="/fonts/SegoeUI/Regular/SEGOEUI.TTF" />
          <link href="/fonts/SegoeUI/SemiBold/SEGUISB.TTF" />
          <link href="/fonts/Stencil/Regular/STENCIL.TTF" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <meta name="viewport" content="viewport-fit=cover" />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
