import { keyframes } from "@stitches/react";
import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: '$gray900',
    color: '$gray100',
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
  }
})

export const bagTransition = keyframes({
  from: {transform: 'translateX(500px)'},

  to: {transform: 'translateX(0px)'},
});