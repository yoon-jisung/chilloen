import type { NextPage } from 'next'
import Image from 'next/image'
import styled from 'styled-components'
import { defaultContainer } from 'styles/container'
import AboutImg from '../public/images/music_studio_2.png'
import oddYardIcon from '../public/images/oddyard_icon.png'
import keeneatIcon from '../public/images/keeneat_icon.png'
import { GrLinkNext } from 'react-icons/gr'
import CreditLine from '../public/images/investor_creditLine.png'
import Davich from '../public/images/investor_davich.png'
import Metabuild from '../public/images/investor_metabuild.png'
import BlackScreen from 'components/BlackScreen'

const Home: NextPage = () => {
  return (
    <>
      <BlackScreen></BlackScreen>
      <BlackScreen>
        <TitleMsg>모든 창작이 울려퍼질 수 있는</TitleMsg>
        <TitleMsg>세상을 만듭니다.</TitleMsg>
      </BlackScreen>
      <BlackScreen>
        <TitleMsg>당신의 창작에 가치를 더합니다.</TitleMsg>
      </BlackScreen>
      <ServiceScreen>
        <ServiceContainer>
          <MenuTitle>ABOUT US</MenuTitle>
          <MenuTexts>
            <header>
              <h1>칠로엔은</h1>
              <h1>생각합니다.</h1>
            </header>
            <MenuExplanation>
              <div className="margin-b">
                <p>예술이란 누군가의 삶을 표현한 꿈이라고 생각합니다.</p>
                <p>
                  그 꿈은 우리 주변을 멤돌고 다른이의 삼에 다른 꿈을 심어주기도
                  합니다.
                </p>
              </div>
              <div className="margin-b">
                <p>수많은 예술가들이 꿈을 꾸고, 쫓고 또 동경합니다.</p>
                <p>
                  다만, 그들의 위대한 창조물들이 우리 주변에서 빛을 보기까지는
                  수많은 노력이 필요합니다.
                </p>
              </div>
              <p>그리고 그 노력의 과정을 행복이라고 정의합니다.</p>
            </MenuExplanation>
          </MenuTexts>

          <Image
            src={AboutImg}
            alt="About Img"
            placeholder="blur"
            width={1200}
            height={480}
          />
        </ServiceContainer>
      </ServiceScreen>
      <ServiceScreen>
        <ServiceContainer>
          <MenuTitle>PRODUCT</MenuTitle>
          <MenuTexts>
            <header>
              <h1>칠로엔은</h1>
              <h1>제시합니다.</h1>
            </header>
            <MenuExplanation>
              <p className="margin-b">
                음악가 출신 대표와 누구보다 창작에 대한 열망이 컸던 아티스트
                출신 팀원들이 모였습니다.
              </p>
              <div className="margin-b">
                <p>
                  우리는 창작자들의 꿈을 실현시키기 위해 다른 무엇보다 창작에
                  우선으로 집중할 수 있고
                </p>
                <p>그 창작의 가치를 더할 방법을 찾습니다.</p>
              </div>
              <p>
                칠로엔은 그 누구보다 창작자들의 시선에서 바라보고 새로운
                패러다임을 제시합니다.
              </p>
            </MenuExplanation>
          </MenuTexts>

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
        </ServiceContainer>
      </ServiceScreen>
      <ServiceScreen>
        <ServiceCenterContainer>
          <MenuTitle>NEWS</MenuTitle>
          <h1>칠로엔은 행동합니다.</h1>
          <p>창작을 위해 발전하는 칠로엔의 모습을 지켜보세요.</p>
          <Imgs></Imgs>
        </ServiceCenterContainer>
      </ServiceScreen>

      <ServiceScreen>
        <ServiceCenterContainer>
          <MenuTitle>Career</MenuTitle>
          <h1>새로운 도전을,</h1>
          <h1>칠로엔과 함께 하고 싶지 않으신가요?</h1>
          <p>새로운 예술을, 위대한 창조를 , 삶을 표현할 꿈을 펼쳐주세요</p>
          <GrLinkNextIcon>
            <GrLinkNext />
          </GrLinkNextIcon>
        </ServiceCenterContainer>
      </ServiceScreen>

      <ServiceScreen>
        <ServiceCenterContainer>
          <MenuTitle>Contact us</MenuTitle>
          <h1>칠로엔의 예술에 동참해보세요.</h1>
          <ContactUsCardContainer>
            <ContactUsCard>
              <MenuTitle>Location</MenuTitle>
              <p>6th Floor, 87 Seochojungang-ro, Seocho-gu,</p>
              <p>Seoul, Republic of Korea</p>
            </ContactUsCard>
            <ContactUsCard>
              <MenuTitle>Mail</MenuTitle>
              <p>info@chilloen.com</p>
            </ContactUsCard>
          </ContactUsCardContainer>
        </ServiceCenterContainer>

        <MenuTitle>Invertors</MenuTitle>
        <ContactUsCardContainer>
          <Image
            src={CreditLine}
            alt="About Img"
            placeholder="blur"
            width={280}
            height={100}
          />

          <Image
            src={Davich}
            alt="About Img"
            placeholder="blur"
            width={280}
            height={100}
          />

          <Image
            src={Metabuild}
            alt="About Img"
            placeholder="blur"
            width={280}
            height={100}
          />
        </ContactUsCardContainer>
      </ServiceScreen>
    </>
  )
}

export default Home

const TitleMsg = styled.h1`
  line-height: 120px;
  max-width: 1200px;
  white-space: nowrap;
`

const ServiceScreen = styled.section`
  ${defaultContainer}
`
const ServiceContainer = styled.div`
  width: 1200px;
`

const ServiceCenterContainer = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const MenuTitle = styled.h4`
  color: ${({ theme }) => theme.colors.sub_title};
  font-size: ${({ theme }) => theme.colors.xxl};
  padding: ${({ theme }) => theme.paddings.xxl} 0;
  font-weight: 700;
  font-size: 24px;
`
const MenuTexts = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: ${({ theme }) => theme.margins.xl} 0;
`
const MenuExplanation = styled.article`
  line-height: 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .margin-b {
    margin-bottom: 16px;
  }
`

const Imgs = styled.div`
  width: 1200px;
  height: 440px;
  border: 1px solid ${({ theme }) => theme.colors.grey500};
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
const GrLinkNextIcon = styled.div<{ marginLeft?: string }>`
  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : '0px')};
  border-radius: 50%;
  box-shadow: 0 0 0 1px #606060;
  padding: 2%;
  margin: 50px;
  cursor: pointer;
`
const ContactUsCard = styled.div`
  width: 580px;
  height: 140px;
  padding: 20px 22px;
  margin: 48px 41px;
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`
const ContactUsCardContainer = styled.div`
  display: flex;
  @media screen and (max-width: 1280px) {
    flex-direction: column;
  }
`
