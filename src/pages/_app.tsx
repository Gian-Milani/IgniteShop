import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import logoImg from '../assets/logo.svg'
import Image from "next/image";
import { Bag, BagContainer, BagNotification, Container, Header } from "../styles/pages/app";
import { Handbag } from "phosphor-react";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {

  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />

        <BagContainer>
          <Bag>
            <Handbag size={24} weight="bold"/>
          </Bag>
          <BagNotification>1</BagNotification>
        </BagContainer>
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}