import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;700&family=Merriweather:wght@900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="min-h-screen border-b-8 border-b-charcoal bg-beige text-charcoal antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
