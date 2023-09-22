import { ReactNode, createContext, useState } from "react";

export interface ProductProps {
  id: string,
  name: string,
  imageUrl: string,
  price: string,
  defaultPriceId: string,
}

interface BagContextProps {
  bagList: ProductProps[],
  addProductToBag: (product: ProductProps) => void,
  productExistsInBag: (productId: string) => boolean,
  removeProductFromBag: (productId: string) => void,
}

interface BagContextProviderProps {
  children: ReactNode
}

export const BagContext = createContext({} as BagContextProps)

export function BagContextProvider({ children }: BagContextProviderProps ){
  const [bagList, setBagList] = useState<ProductProps[]>([])

  function addProductToBag(product: ProductProps) {
    setBagList(
      [ 
        ...bagList,
        {
          id: product.id,
          name: product.name,
          imageUrl: product.imageUrl,
          price: product.price,
          defaultPriceId: product.defaultPriceId
        }
      ]
    )
  };

  function productExistsInBag(productId: string) {
    for (const item of bagList) {
      if (item.id === productId) {
        return true; 
      }
    }
    return false; 
  };

  function removeProductFromBag(productId: string){
    const newBagList = bagList.filter((product: ProductProps) => {
      return product.id !== productId
    })

    setBagList([...newBagList])
  }

  return (
    <BagContext.Provider 
      value={{
        bagList,
        addProductToBag,
        productExistsInBag,
        removeProductFromBag
      }}
    > 
      {children} 
    </BagContext.Provider>
  )
}