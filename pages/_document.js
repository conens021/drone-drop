// pages/_document.js

import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link href="/fonts/SegoeUI/Bold/SEGOEUIB.TTF" />
          <link href="/fonts/SegoeUI/Regular/SEGOEUI.TTF" />
          <link href="/fonts/SegoeUI/SemiBold/SEGUISB.TTF" />
          <link href="/fonts/Stencil/Regular/STENCIL.TTF" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
