import CountriesProvider from "@/contexts/countries-context";
import StatesProvider from "@/contexts/states-context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StatesProvider>
      <CountriesProvider>
        <Component {...pageProps} />;
      </CountriesProvider>
    </StatesProvider>
  )
}
