import { css } from 'styled-components'

export const defaultContainer = css`
  min-height: 100vh;
  min-width: 100vw;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
  > * {
    border: 1px solid blue;
  }
`
export const defaultInputsStyle = css`
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  -webkit-appearance: none;
  font-weight: 400;
  letter-spacing: -0.02em;
  :focus {
    border-bottom: 1px solid blue;
  }
`
