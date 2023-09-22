import { ShoppingBagContainer, CloseContainer, BagItensContainer, ItemContainer, ImageContainer, DescriptionContainer, BagResumeContainer} from "./styles";
import { X } from 'phosphor-react';
import Image from 'next/image';
import { useContext, useState } from "react";
import { BagContext } from "../../contexts/BagContext";
import axios from "axios";

interface ShoppingBagProps {
  handleBag: (action) => void;
}

export function ShoppingBag ({ handleBag }: ShoppingBagProps) {
  const { bagList, removeProductFromBag } = useContext(BagContext)

  const [isCreatingCheckoutSection, setIsCreateCheckoutSection] = useState(false);

  let bagTotalValue = 0
  for (let i = 0; i < bagList.length; i++) {
    bagTotalValue += Number(bagList[i].price.replace('R$', '').replace(',', '.'))
  }

  function handleRemoveProductFromBag(productId: string){
    removeProductFromBag(productId)
  }

  async function handleCheckout() {
    try {
      setIsCreateCheckoutSection(true)

      const response = await axios.post('/api/checkout', {
        products: bagList,
      })

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;


    } catch (error) {
      setIsCreateCheckoutSection(false)
      alert ('Falha ao redirecionar ao checkout!')
    }
  }

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
          {bagList.length === 0 ? <p>Seu carinho está vazio :(</p> : 
            bagList.map((product) => {
              return (
                <ItemContainer key={product.id}>
                  <ImageContainer>
                    <Image src={product.imageUrl} width={100} height={96} color='white' alt="" />
                  </ImageContainer>

                  <DescriptionContainer>
                    <h4>{product.name}</h4>
                    <strong>{product.price}</strong>
                    <button onClick={() => handleRemoveProductFromBag(product.id)}>
                      Remover
                    </button>
                  </DescriptionContainer>
                </ItemContainer>
                )              
          })}
        </BagItensContainer>

        <BagResumeContainer>
          <p>
            <span>Quantidade</span>
            <span>{bagList.length} Itens</span>
          </p>

          <p>
            <strong>Valor Total</strong>
            <strong>R${bagTotalValue.toFixed(2).toString().replace('.', ',')}</strong>
          </p>

          <button
            onClick={handleCheckout}
            disabled={isCreatingCheckoutSection}
          >Finalizar Compra</button>
        </BagResumeContainer>
      </main>
    </ShoppingBagContainer>
  )
}