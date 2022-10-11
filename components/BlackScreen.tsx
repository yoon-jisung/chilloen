import styled from 'styled-components'
import { defaultContainer } from 'styles/container'

const BlackScreen = ({ children }: any) => {
  return <BlackScreenStyle>{children}</BlackScreenStyle>
}

export default BlackScreen

const BlackScreenStyle = styled.section`
  ${defaultContainer}
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white500};
`
