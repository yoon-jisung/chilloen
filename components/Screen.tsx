import styled from 'styled-components'

interface Props {
  children?: any
  style?: ScreenStyleType
}

interface ScreenStyleType {
  screenHeight?: number
  bg?: string
  textColor?: string
}

const Screen = ({ children, style }: Props) => {
  return (
    <ScreenStyle style={style}>
      <div>{children}</div>
    </ScreenStyle>
  )
}

export default Screen

const ScreenStyle = styled.section<{ style?: ScreenStyleType }>`
  min-height: ${({ style }) =>
    style?.screenHeight ? style.screenHeight + 'vh' : '100vh'};
  min-width: 100vw;
  padding: 10px 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid red;

  > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 1280px) {
      width: 1200px;
    }
  }
  background-color: ${({ theme, style }) =>
    style?.bg ? style.bg : theme.colors.black};
  color: ${({ theme, style }) =>
    style?.textColor ? style?.textColor : theme.colors.white500};
`
