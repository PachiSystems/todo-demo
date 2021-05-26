import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';

class AppDocument extends Document {
  render() {
    const styles = flush();
    return (
      <Html>
        <Head>{styles}</Head>
        <body>
          <Main />
          <NextScript />
          <style jsx global>
            {`
              body {
                margin: 0;
                padding: 0;
                font-family: sans-serif;
                text-align: center;
              }
            `}
          </style>
        </body>
      </Html>
    );
  }
}

export default AppDocument;
