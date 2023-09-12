import { styled } from "@stitches/react";
import { bagTransition } from "../../styles/global";

export const ShoppingBagContainer = styled('div', {
  width: '100%',
  maxWidth: '30rem',
  backgroundColor: '$gray800',
  height: '100vh',
  position: 'fixed',
  top: 0,
  right: 0,

  padding: '1.5rem',
  zIndex: 1,

  animation: `${bagTransition} 400ms normal` ,

  main: {
    height: '90vh',
    margin: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },  
})

export const CloseContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',

  button: {
    border: 'none',
    background: 'transparent',

    svg: {
      color: 'white',
      opacity: '0.8',
      transition: 'opacity 200ms',

      '&:hover': {
        opacity: '1',
        cursor: 'pointer',
      }
    },
  }

})

export const BagItensContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',  
  overflow: 'auto',

  h3: {
    marginBottom: '2rem',
    fontWeight: 'bold',
    fontSize: '$lg'
  }
})

export const ItemContainer = styled('div', {
  marginBottom: '1.5rem',
  display: 'flex',  
  gap: '1.25rem',

})

export const ImageContainer = styled('div', {
  width: '6.25rem',
  height: '6rem',
  background: 'linear-gradient(180deg, #1EA483 0%,  #7465D4 100%)',
  borderRadius: 8,
})

export const DescriptionContainer = styled('div', {
  padding: '0.5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.7rem',

  h4: {
    color: '$gray300',
    fontSize: '$md',
  },

  strong: {
    color: '$white',
  },

  button: {
    border: 'none',
    backgroundColor: '$gray800',
    color: '$green500',
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: '1rem',
    transition: 'color 400ms',

    '&:hover': {
      cursor: 'pointer',
      color: '$green300',
    }
  }
})

export const BagResumeContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
  marginTop: '1.5rem',

  p: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    span: {
      color: '$gray300',
      fontSize: '$md',
    },

    strong: {
      color: '$white',
      fontSize: '$xl',
      
      '&:first-child': {
        fontSize: '$md',
      }
    },
  },

  button: {
    height: '4rem',

    fontWeight: 'bold',
    fontSize: '$md',

    border: 'none',
    borderRadius: 8,

    backgroundColor: '$green500',
    color: '$white',

    transition: 'background 400ms',

    marginTop: '3.5rem',

    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '$green300',
    }
  }

})