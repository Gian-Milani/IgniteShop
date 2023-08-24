import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";

import { stripe } from "../lib/stripe"
import Stripe from "stripe"

import { Bag, HomeContainer, Product } from "../styles/pages/home"

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css';
import { Handbag } from "phosphor-react";
import { useContext } from "react";
import { BagContext } from "../contexts/BagContext";

interface HomeProps {
  products: {
    id: string,
    name: string,
    imageUrl: string,
    price: string,
  }[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  const { bagList, addProductToBag } = useContext(BagContext)

  function handleAddProductToBag() {
    addProductToBag();
    console.log(bagList)
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map(product => {
          return (
            <Product 
              key={product.id} 
              className="keen-slider__slide"
            >
              <Image src={product.imageUrl} width={520} height={480} alt=""/>

              <footer>
                <section>                
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </section>
                <Bag onClick={handleAddProductToBag}>
                  <Handbag size={30} weight="bold" color="white"/>
                </Bag>

              </footer>
            </Product>
          )
        })}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  });

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('PT-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(price.unit_amount / 100),
    }
  })

  return { 
    props: {
      products,
    },
    revalidate: 60 * 60 * 2 // 2 hours

  }
}