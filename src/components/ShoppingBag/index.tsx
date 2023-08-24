import { ShoppingBagContainer, CloseContainer, BagItensContainer, ItemContainer, ImageContainer, DescriptionContainer, BagResumeContainer} from "./styles";
import { X } from 'phosphor-react';
import Image from 'next/image';
import shirt from '../../assets/t-shirt.svg'
import { useContext } from "react";
import { BagContext } from "../../contexts/BagContext";

interface ShoppingBagProps {
  handleBag: (action) => void;
}

export function ShoppingBag ({ handleBag }: ShoppingBagProps) {

  const { bagList } = useContext(BagContext)

  return (
    <ShoppingBagContainer>
      <CloseContainer>
        <button onClick={() => handleBag(false)}>
          <X  size={24} weight="bold"/>
        </button>
      </CloseContainer>
      <main>
        
        <BagItensContainer>
          <h3>Sacola de compras</h3>

          {bagList.map((product) => {
            return (
              <ItemContainer key={product.id}>
                <ImageContainer>
                  <Image src={shirt} width={100} height={96} color='white' alt="" />
                </ImageContainer>

                <DescriptionContainer>
                  <h4>{product.name}</h4>
                  <strong>{product.price}</strong>
                  <button>Remover</button>
                </DescriptionContainer>
              </ItemContainer>
              )
          })}
        </BagItensContainer>

        <BagResumeContainer>
          <p>
            <span>Quantidade</span>
            <span>3 Itens</span>
          </p>

          <p>
            <strong>Valor Total</strong>
            <strong>R$250,00</strong>
          </p>

          <button>Finalizar Compra</button>
        </BagResumeContainer>
      </main>
    </ShoppingBagContainer>
  )
}