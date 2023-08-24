import { useContext, useState } from 'react'
import { HeaderContainer, Bag, BagContainer, BagNotification } from "./styles";
import { ShoppingBag } from '../ShoppingBag';
import { Handbag } from 'phosphor-react'
import Image from 'next/image'
import logoImg from '../../assets/logo.svg'
import { BagContext } from '../../contexts/BagContext';


export function Header(){
  const [bagActive, setBagActive] = useState(false)

  const { bagList } = useContext(BagContext)

  function handleBag(action: boolean){
    setBagActive(action)
  }

  return (
    <HeaderContainer>
      <Image src={logoImg} alt="" />

      <BagContainer>
        <Bag onClick={() => handleBag(true)}>
          <Handbag size={24} weight="bold"/>
        </Bag>

        {bagList.length !== 0 ? <BagNotification>{bagList.length}</BagNotification> : <></>}
      </BagContainer>

      {bagActive && <ShoppingBag handleBag={handleBag}/>}
    </HeaderContainer>
  )
}