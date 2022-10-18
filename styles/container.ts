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
  border-radius: 8px;
  border: none;
  outline: none;
  -webkit-appearance: none;
  background: #f4f4f4;
  border-radius: 8px;
  font-weight: 400;
  letter-spacing: -0.02em;
`
