import { styled } from "@stitches/react"

export const HeaderContainer = styled('div', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  display: 'flex',
  alignItems: 'center',
  variants: {
    align: {
      'center': {
        justifyContent: 'center',
      },
      'space': {
        justifyContent: 'space-between',
      }
    }

  }
})

export const BagContainer = styled('div', {
  display: 'flex'
})

export const Bag = styled('button', {
  width: '3rem',
  height: '3rem',
  borderRadius: 6,
  backgroundColor: '$gray800',
  border: 'none',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  
  svg: {
    opacity: 0.6,
    transition: '400ms',
  },

  '&:disabled':{
    opacity: 0.6,
    cursor: 'not-allowed'
  },

  '&:not(:disabled):hover': {
    svg: {
      opacity: 1
    },
  }

})

export const BagNotification = styled('div', {
  width: '1.5rem',
  height: '1.5rem',
  borderRadius: '50%',
  backgroundColor: '$green500',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  fontWeight: 'bold',

  marginTop: '-0.5rem',
  marginLeft: '-1.2rem',
  padding: '0.6rem',

  border: '4px solid $gray900',
  fontSize: '0.7rem',
  color: '$white'
})