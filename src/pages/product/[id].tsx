import { ImageContainer, ProductContainer, ProductDetails } from '../../styles/pages/product';
import { GetStaticPaths, GetStaticProps } from 'next';
import { stripe } from '../../lib/stripe';
import Stripe from 'stripe';
import Image from 'next/image';
import axios from 'axios';
import { useContext, useState } from 'react';
import Head from 'next/head';
import { BagContext, ProductProps as AddProductProps } from '../../contexts/BagContext';

interface ProductProps {
  product: {
    id: string,
    name: string,
    imageUrl: string,
    price: string,
    description: string,
    defaultPriceId: string,
  }
}

export default function Product({ product }: ProductProps) {
  const [isCreatingCheckoutSection, setIsCreateCheckoutSection] = useState(false);

  const { bagList, addProductToBag, productExistsInBag } = useContext(BagContext)

  function handleAddProductToBag(product: AddProductProps) {
    addProductToBag(product);
  }

  // async function handleBuyProduct() {
  //   try {
  //     setIsCreateCheckoutSection(true);

  //     const response = await axios.post('/api/checkout', {
  //       priceId: product.defaultPriceId
  //     })

  //     const { checkoutUrl } = response.data;

  //     window.location.href = checkoutUrl;

  //   } catch (err) {
  //     setIsCreateCheckoutSection(false);
  //     alert('Erro ao redirecionar para o checkout!')

  //   }
  // }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>

          <button 
            onClick={() => handleAddProductToBag(product)}
            disabled={productExistsInBag(product.id)}
          >
            Colocar na sacola
          </button>

        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          id: 'prod_OJ7LIwiBv1nOy4'
        }
      }
    ],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const response = await stripe.products.list({
    expand: ['data.default_price'],
  });

  const price = product.default_price as Stripe.Price
  
  return {
    props: {
      product: {          
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('PT-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(price.unit_amount / 100),
        description: product.description,
        defaultPriceId: price.id,
      }
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}