import Screen from 'components/Screen'
import styled from 'styled-components'
import Image from 'next/image'
import title1Pic from '../../public/images/title_1.png'
import title2Pic from '../../public/images/title_2.png'
import title3Pic from '../../public/images/title_3.png'

const Intro = () => {
  return (
    <>
      <Screen>
        <FirstPageContainer>
          <span className="artistic-value">Artistic Value</span>
          <ImageStyle
            src={title1Pic}
            alt="Artistic Value"
            placeholder="blur"
            width={780}
            height={56}
          />
        </FirstPageContainer>
        <FirstPageContainer>
          <ImageStyle
            src={title2Pic}
            alt="Challenge"
            placeholder="blur"
            width={720}
            height={80}
          />
          <span className="challenge">Challenge</span>
        </FirstPageContainer>
        <FirstPageContainer>
          <span className="experience">Experience</span>
          <ImageStyle
            src={title3Pic}
            alt="Experience"
            placeholder="blur"
            width={620}
            height={120}
          />
        </FirstPageContainer>
      </Screen>
      <Screen>
        <CraveContainer>
          <span>Crave,</span>
          <span>Crave,</span>
          <span>Crave</span>
        </CraveContainer>

        <h1>칠로엔은 모든 창작이</h1>
        <h1>울려퍼질 수 있는 세상을 만듭니다.</h1>
      </Screen>
    </>
  )
}

export default Intro
const ImageStyle = styled(Image)`
  @media screen and (max-width: ${({ theme }) => theme.deviceSizes.mobileL}) {
    width: 340px;
    min-height: 37px;
  }
`
const CraveContainer = styled.div`
  margin-bottom: 7rem;
  span {
    font-weight: 700;
    line-height: 100%;
    :nth-child(1) {
      font-size: 3.75rem;
    }
    :nth-child(2) {
      font-size: 5rem;
    }
    :nth-child(3) {
      font-size: 6.25rem;
    }
    @media screen and (max-width: 540px) {
      :nth-child(1) {
        font-size: 2.75rem;
      }
      :nth-child(2) {
        font-size: 4rem;
      }
      :nth-child(3) {
        font-size: 5.25rem;
      }
    }
    @media screen and (max-width: 400px) {
      :nth-child(1) {
        font-size: 1.75rem;
      }
      :nth-child(2) {
        font-size: 3rem;
      }
      :nth-child(3) {
        font-size: 4.25rem;
      }
    }
  }
`
const FirstPageContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 2vh 0;
  .artistic-value {
    font-weight: 700;
    font-size: 3.75rem;
    line-height: 72px;
  }

  .challenge {
    font-weight: 700;
    font-size: 5rem;
    line-height: 95px;
    text-align: right;
  }

  .experience {
    font-weight: 700;
    font-size: 6.25rem;
    line-height: 119px;
  }
  span {
    margin: 0 10px;
  }
  @media screen and (max-width: ${({ theme }) => theme.deviceSizes.mobileL}) {
    span {
      font-size: 3.75rem !important;
    }
  }
`
