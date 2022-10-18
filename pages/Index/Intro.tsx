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
          <Image
            src={title1Pic}
            alt="Artistic Value"
            placeholder="blur"
            width={780}
            height={56}
          />
        </FirstPageContainer>
        <FirstPageContainer>
          <Image
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
          <Image
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
const CraveContainer = styled.div`
  margin-bottom: 7rem;
  span {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;

    line-height: 100%;
    :nth-child(1) {
      font-size: 60px;
    }
    :nth-child(2) {
      font-size: 80px;
    }
    :nth-child(3) {
      font-size: 120px;
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
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    line-height: 72px;
  }

  .challenge {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 80px;
    line-height: 95px;
    text-align: right;
  }

  .experience {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 100px;
    line-height: 119px;
  }
`
