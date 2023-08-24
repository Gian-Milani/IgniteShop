import { ReactNode, createContext, useState } from "react";

interface ProductProps {
  id: string,
  name: string,
  imageUrl: string,
  price: string,
  description: string,
  defaultPriceId: string,  
}

interface BagContextProps {
  bagList: ProductProps[],
  addProductToBag: () => void;
}

interface BagContextProviderProps {
  children: ReactNode
}

export const BagContext = createContext({} as BagContextProps)

export function BagContextProvider({ children }: BagContextProviderProps ){
  const [bagList, setBagList] = useState<ProductProps[]>([])

  function addProductToBag() {
    setBagList(
      [
        {
          id: '1',
          name: 'Camiseta',
          imageUrl: '',
          price: '10.00',
          description: 'Teste nova camiseta',
          defaultPriceId: ''
        }
      ]
    )
  };

  return (
    <BagContext.Provider 
      value={{
        bagList,
        addProductToBag
      }}
    > 
      {children} 
    </BagContext.Provider>
  )
}