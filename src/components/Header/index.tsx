import { useContext, useState } from 'react'
import { HeaderContainer, Bag, BagContainer, BagNotification } from "./styles";
import { ShoppingBag } from '../ShoppingBag';
import { Handbag } from 'phosphor-react'
import Image from 'next/image'
import logoImg from '../../assets/logo.svg'
import { BagContext } from '../../contexts/BagContext';
import Link from 'next/link';


export function Header(){
  const [bagActive, setBagActive] = useState(false)

  const { bagList } = useContext(BagContext)

  function handleBag(action: boolean){
    setBagActive(action)
  }

  const isBagDisabled = bagList.length === 0

  return (
    <HeaderContainer>
      <Link href='/'>
        <Image src={logoImg} alt="" />
      </Link>

      <BagContainer>
        <Bag onClick={() => handleBag(true)} disabled={isBagDisabled}>
          <Handbag size={24} weight="bold" color='white'/>
        </Bag>

        {bagList.length !== 0 ? <BagNotification>{bagList.length}</BagNotification> : <></>}
      </BagContainer>

      {bagActive && <ShoppingBag handleBag={handleBag}/>}
    </HeaderContainer>
  )
}