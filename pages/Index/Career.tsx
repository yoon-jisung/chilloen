import styled from 'styled-components'
import CareerImg from '../../public/images/job_bg.png'
import Image from 'next/image'
import { SlArrowRightCircle } from 'react-icons/sl'

const Career = () => {
  return (
    <Container>
      <Image src={CareerImg} objectFit="cover" objectPosition="center" />
      <Texts>
        <h1>새로운 도전을,</h1>
        <h1>칠로엔과 함께 하고 싶지 않으신가요?</h1>
        <p>새로운 예술을, 위대한 창조를 , 삶을 표현할 꿈을 펼쳐주세요</p>

        <GrLinkNextIcon
          onClick={() => window.open('https://chilloen.oopy.io/')}
        >
          <SlArrowRightCircle className="icon" />
        </GrLinkNextIcon>
      </Texts>
    </Container>
  )
}
export default Career

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 540px;
  overflow: hidden;

  @media screen and (max-width: ${({ theme }) => theme.deviceSizes.tabletL}) {
    height: 100%;
  }

  span {
    filter: blur(2px);
  }
`
const Texts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.colors.white500};
`

const GrLinkNextIcon = styled.div<{ marginLeft?: string }>`
  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : '0px')};
  margin: 3rem;
  color: #fff;
  font-size: 3rem;
  cursor: pointer;
  @media screen and (max-width: 1280px) {
    margin: 2.5rem;
  }
  @media screen and (max-width: 480px) {
    margin: 1rem;
  }
  cursor: pointer;
  .icon path {
    stroke: #fff;
  }
`
