import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above


import type { AppProps } from 'next/app'
import '../styles/globals.css'
import SocilaMedia from "../components/SocilaMedia";
import Header from "../components/Header";
import Fotter from "../components/Fotter";

function MyApp({ Component, pageProps }: AppProps) {
  return (<div className='h-screen  '>
    <SocilaMedia />
    <Header />
    <Component {...pageProps} />
    <Fotter />
  </div>)
}

export default MyApp
