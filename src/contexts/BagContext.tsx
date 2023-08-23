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
  bagList: ProductProps[]
}

interface BagContextProviderProps {
  children: ReactNode
}

export const BagContext = createContext({} as BagContextProps)

export function BagContextProvider({ children }: BagContextProviderProps ){
  const [bagList, setBagList] = useState<ProductProps[]>([])

  return (
    <BagContext.Provider 
      value={{
        bagList
      }}
    > 
      {children} 
    </BagContext.Provider>
  )
}