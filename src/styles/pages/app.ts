import { styled } from "..";

export const Container = styled('div', {
  display: "flex",
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',

})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
})

export const BagContainer = styled('div', {
  display: 'flex'
})

export const Bag = styled('div', {
  width: '3rem',
  height: '3rem',
  borderRadius: 6,
  backgroundColor: '$gray800',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',

  svg: {
    opacity: 0.6
  },

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