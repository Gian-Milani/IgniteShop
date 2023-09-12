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
import { BagContext, ProductProps } from "../contexts/BagContext";
import Link from "next/link";

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

  const { addProductToBag, productExistsInBag } = useContext(BagContext)

  function handleAddProductToBag(product: ProductProps) {
    addProductToBag(product)
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
              <Link href={`/product/${product.id}`}>
                <Image src={product.imageUrl} width={520} height={480} alt=""/>
              </Link>

              <footer>
                <section>                
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </section>
                <Bag 
                  onClick={() => handleAddProductToBag(product)} 
                  disabled={productExistsInBag(product.id)}
                >
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