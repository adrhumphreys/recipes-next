import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Merriweather:wght@900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="text-charcoal bg-beige antialiased border-b-charcoal border-b-8">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
