import 'ol/ol.css';
import type { AppProps } from "next/app";
import "../styles/globals.css";
import Layout from "../components/Layout";
import App from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
        <Component {...pageProps} />
    </Layout>
  );
}

MyApp.getInitialProps = async (appContext:any) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps }
};

export default MyApp;