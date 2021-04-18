import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [paypalSdk, setPaypalSdk] = useState(false);
  console.log(paypalSdk);
  useEffect(() => {
    if (!window.paypal) {
      setPaypalSdk(false);
    } else {
      setPaypalSdk(true);
    }
  });
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}></main>
    </div>
  );
}
