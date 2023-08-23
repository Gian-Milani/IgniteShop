import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import logoImg from '../assets/logo.svg'
import Image from "next/image";
import { Bag, BagContainer, BagNotification, Container, Header } from "../styles/pages/app";
import { Handbag } from "phosphor-react";
import { ShoppingBag } from "../components/ShoppingBag";
import { useState } from "react";
import { BagContextProvider } from '../contexts/BagContext'

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const [bagActive, setBagActive] = useState(false)

  function handleBag(action: boolean){
    setBagActive(action)
  }

  return (
    <BagContextProvider>
      <Container>
        <Header>
          <Image src={logoImg} alt="" />

          <BagContainer>
            <Bag onClick={() => handleBag(true)}>
              <Handbag size={24} weight="bold"/>
            </Bag>
            <BagNotification>1</BagNotification>
          </BagContainer>

          {bagActive && <ShoppingBag handleBag={handleBag}/>}
        </Header>

        <Component {...pageProps} />
      </Container>
    </BagContextProvider>
  )
}