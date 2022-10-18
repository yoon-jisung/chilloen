import Screen from 'components/Screen'
import Image from 'next/image'
import { CategoryTitle, CategoryText, SubTexts } from 'pages'
import styled from 'styled-components'
import oddYardIcon from '../../public/images/oddyard_icon.png'
import keeneatIcon from '../../public/images/keeneat_icon.png'
import { GrLinkNext } from 'react-icons/gr'

const Product = () => {
  return (
    <Screen
      style={{
        bg: '#EBEBEB',
        textColor: 'black',
        screenHeight: 50,
      }}
    >
      <CategoryTitle>product</CategoryTitle>
      <CategoryText>칠로엔은 제시합니다.</CategoryText>
      <SubTexts>
        음악가 출신 대표와 누구보다 창작에 대한 열망이 컸던 아티스트 출신
        팀원들이 모였습니다.
      </SubTexts>
      <SubTexts>
        칠로엔은 그 누구보다 창작자들의 시선에서 바라보고 새로운 패러다임을
        제시합니다.
      </SubTexts>

      <Icons>
        <IconCard>
          <Image
            src={oddYardIcon}
            alt="oddYard Icon"
            width={124}
            height={124}
          />
          <IconCardTexts>
            <p>또 다른 예술 세계</p>
            <h2>ODDYARD</h2>
          </IconCardTexts>
          <GrLinkNextIcon marginLeft="62px">
            <GrLinkNext />
          </GrLinkNextIcon>
        </IconCard>
        <IconCard>
          <Image
            src={keeneatIcon}
            alt="keeneat Icon"
            width={124}
            height={124}
          />
          <IconCardTexts>
            <p>무한한 가치의 인공지능 음악 파트너</p>
            <h2>KEENEAT</h2>
          </IconCardTexts>
          <GrLinkNextIcon marginLeft="62px">
            <GrLinkNext />
          </GrLinkNextIcon>
        </IconCard>
      </Icons>
    </Screen>
  )
}

export default Product

const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.paddings.xxxl} 0px;
  margin: ${({ theme }) => theme.margins.xxxl} 0px;
  @media screen and (max-width: 1280px) {
    flex-direction: column;
    align-items: center;
  }
`

const IconCard = styled.div`
  width: 600px;
  display: flex;
  align-items: center;
`

const IconCardTexts = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.paddings.base};
  p {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
  }
  h2 {
    font-weight: 700;
    font-size: 34px;
    line-height: 41px;
  }
`

const GrLinkNextIcon = styled.div<{ marginLeft?: string }>`
  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : '0px')};
  border-radius: 50%;
  box-shadow: 0 0 0 1px #606060;
  padding: 2%;
  margin: 50px;
  cursor: pointer;
`
