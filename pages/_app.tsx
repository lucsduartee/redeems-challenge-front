import CountriesProvider from "@/contexts/countries-context";
import RedeemsProvider from "@/contexts/redeems-context";
import StatesProvider from "@/contexts/states-context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StatesProvider>
      <CountriesProvider>
        <RedeemsProvider>
          <Component {...pageProps} />;
        </RedeemsProvider>
      </CountriesProvider>
    </StatesProvider>
  )
}
