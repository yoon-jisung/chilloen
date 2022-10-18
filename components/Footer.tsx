import Screen from 'components/Screen'
import styled from 'styled-components'
import chilloenLogo from '../public/images/logo_wh.png'
import Image from 'next/image'

const Footer = () => {
  return (
    <Screen style={{ screenHeight: 30, bg: '#333333', textColor: '#9E9E9E' }}>
      <Container>
        <LogoImage>
          <Image
            src={chilloenLogo}
            alt="chilloen logo"
            width={150}
            height={60}
          />
        </LogoImage>

        <FooterTexts>
          <span className="bold-text">주식회사 칠로엔</span> <Bar />
          <span>대표이사 조성인</span>
        </FooterTexts>
        <hr></hr>

        <FooterTexts>
          <span>주소 서울특별시 서초구 서초중앙로 87, 예성빌딩 6층 </span>{' '}
          <Bar />
          <span>전화번호 02-6952-8716 </span> <Bar />
          <span>이메일 info@chilloen.com </span>
        </FooterTexts>
      </Container>
    </Screen>
  )
}

export default Footer

const Container = styled.footer`
  width: 1200px;
  > span {
    display: inline;
  }

  > * {
    text-align: start;
    margin: 20px 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
  }
`
const FooterTexts = styled.div`
  .bold-text {
    font-weight: 700;
  }
`
const LogoImage = styled.span``

const Bar = styled.span`
  background: #898989;
  width: 1px;
  height: 10px;
  display: inline-block;
  line-height: 10px;
  margin: 0px 6px;
  vertical-align: baseline;
`
