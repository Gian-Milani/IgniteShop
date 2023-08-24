import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import { BagContextProvider } from '../contexts/BagContext'
import { Header } from "../components/Header";
import { Container } from "../styles/pages/app";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <BagContextProvider>
      <Container>
        <Header />

        <Component {...pageProps} />
      </Container>
    </BagContextProvider>
  )
}