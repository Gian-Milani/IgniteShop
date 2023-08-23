import { ShoppingBagContainer, CloseContainer, BagItensContainer, ItemContainer, ImageContainer, DescriptionContainer, BagResumeContainer} from "./styles";
import { X } from 'phosphor-react';
import Image from 'next/image';
import shirt from '../../assets/t-shirt.svg'
import { useState } from "react";

interface ShoppingBagProps {
  handleBag: (action) => void;
}

export function ShoppingBag ({ handleBag }: ShoppingBagProps) {

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
          <ItemContainer>
            <ImageContainer>
              <Image src={shirt} width={100} height={96} color='white' alt="" />
            </ImageContainer>

            <DescriptionContainer>
              <h4>Camiseta de teste</h4>
              <strong>R$79,00</strong>
              <button>Remover</button>
            </DescriptionContainer>
          </ItemContainer>

          <ItemContainer>
            <ImageContainer>
              <Image src={shirt} width={100} height={96} alt="" />
            </ImageContainer>
            
            <DescriptionContainer>
              <h4>Camiseta de teste</h4>
              <strong>R$79,00</strong>
              <button>Remover</button>
            </DescriptionContainer>
          </ItemContainer>
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