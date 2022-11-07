import Screen from 'components/Screen'
import styled from 'styled-components'
import Image from 'next/image'
import title1Pic from '../../public/images/title_1.png'
import title2Pic from '../../public/images/title_2.png'
import title3Pic from '../../public/images/title_3.png'
import { motion } from 'framer-motion'

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
            layout={'fixed'}
            objectFit="cover"
            width={780}
            height={56}
          />
        </FirstPageContainer>
        <FirstPageContainer>
          <ImageStyle
            src={title2Pic}
            alt="Challenge"
            placeholder="blur"
            layout={'fixed'}
            objectFit="cover"
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
            layout={'fixed'}
            objectFit="cover"
            width={620}
            height={120}
          />
        </FirstPageContainer>
      </Screen>
      <Screen>
        <CraveContainer>
          <motion.span>Crave, </motion.span>
          <motion.span>Crave, </motion.span>
          <motion.span>Crave</motion.span>
        </CraveContainer>

        <h1>모든 창작이</h1>
        <h1>울려 퍼질 수 있는 세상을 만듭니다</h1>
      </Screen>
    </>
  )
}

export default Intro
const ImageStyle = styled(Image)`
  @media screen and (max-width: 480px) {
    width: 340px;
    min-height: 37px;
  }
  .reveres {
    transform: rotate(0.5turn);
  }
`
const CraveContainer = styled.div`
  margin-bottom: 7rem;
  span {
    font-weight: 700;
    line-height: 100%;
    font-size: 5rem;
    @media screen and (max-width: 540px) {
      font-size: 4rem;
    }
    @media screen and (max-width: 480px) {
      font-size: 3rem;
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
    @media screen and (max-width: 480px) {
      line-height: 48px;
    }
  }

  .challenge {
    font-weight: 700;
    font-size: 5rem;
    line-height: 95px;
    text-align: right;
    @media screen and (max-width: 480px) {
      line-height: 57px;
    }
  }

  .experience {
    font-weight: 700;
    font-size: 6.25rem;
    line-height: 119px;
    @media screen and (max-width: 480px) {
      line-height: 67px;
    }
  }

  span {
    margin: 0 0.7rem;
  }

  @media screen and (max-width: 480px) {
    span {
      font-size: 3.75rem !important;
    }
  }
`
