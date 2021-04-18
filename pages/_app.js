import Head from "next/head";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <script
          src={`https://www.paypal.com/sdk/js?client-id=${process.env.PAYPAL_CLIENT_ID}`}
        ></script>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
