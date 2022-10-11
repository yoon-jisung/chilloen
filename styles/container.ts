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
