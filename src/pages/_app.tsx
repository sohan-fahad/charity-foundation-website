import "@/styles/globals.css";
import "aos/dist/aos.css";
import AOS from "aos";
import type { AppProps } from "next/app";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  }, []);
  return <Component {...pageProps} />;
}
