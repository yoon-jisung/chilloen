import Screen from 'components/Screen'
import { useEffect } from 'react'
import { CategoryText, CategoryTitle, imageAnimate, textAnimate } from 'pages'
import Image from 'next/image'
import styled from 'styled-components'
import AboutUs1 from '../../public/images/about_us_1.jpg'
import AboutUs2 from '../../public/images/about_us_2.jpg'
import { motion } from 'framer-motion'

const AboutUs = () => {
  const options = {
    root: null, // viewport
    rootMargin: '0px',
    threshold: 1.0, // 50%가 viewport에 들어와 있어야 callback 실행
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('active')
        else entry.target.classList.remove('active')
      })
    }, options)

    const screen = document.getElementById('about-us')
    screen?.childNodes.forEach((el: any) => observer.observe(el))
  }, [])
  return (
    <Screen style={{ bg: '#F6F6F6' }} id="about-us">
      <CategoryTitle
        variants={textAnimate}
        initial={'offscreen'}
        whileInView={'onscreen'}
        viewport={{ once: true, amount: 0.8 }}
      >
        About Us
      </CategoryTitle>
      <CategoryText
        variants={textAnimate}
        initial={'offscreen'}
        whileInView={'onscreen'}
        viewport={{ once: true, amount: 0.8 }}
      >
        칠로엔은 생각합니다.
      </CategoryText>
      <Category flexDirection={'column'}>
        <ImgWrapper
          variants={imageAnimate}
          initial={'offscreen'}
          whileInView={'onscreen'}
          viewport={{ once: true, amount: 1 }}
        >
          <Image src={AboutUs1} alt="AboutUs1" width={560} height={280} />
        </ImgWrapper>
        <Article
          mobileAlign={'start'}
          variants={textAnimate}
          initial={'offscreen'}
          whileInView={'delayOnscreen'}
          viewport={{ once: true, amount: 0.8 }}
        >
          <p>예술이란 누군가의 삶을 표현한 꿈이라고 생각합니다.</p>
          <p>그 꿈은 우리 주변을 멤돌고, 다른이의 삶에</p>
          <p>다름 꿈을 심어주기도 합니다.</p>
        </Article>
      </Category>
      <Category flexDirection={'column-reverse'}>
        <Article
          mobileAlign={'end'}
          variants={textAnimate}
          initial={'offscreen'}
          whileInView={'delayOnscreen'}
          viewport={{ once: true, amount: 0.8 }}
        >
          <p>수많은 예술가들이 꿈을 꾸고, 쫒고 또 동경합니다.</p>
          <p>다만, 그들의 위대한 창조물들이 우리 주변에서</p>
          <p>빛을 보기까지는 수많은 노력이 필요합니다.</p>
          <br></br>
          <p>그래서 저희 칠로엔은 존재합니다.</p>
        </Article>
        <ImgWrapper
          variants={imageAnimate}
          initial={'offscreen'}
          whileInView={'onscreen'}
          viewport={{ once: true, amount: 1 }}
        >
          <Image src={AboutUs2} alt="AboutUs2" width={560} height={280} />
        </ImgWrapper>
      </Category>
    </Screen>
  )
}

export default AboutUs

const Category = styled(motion.div)<{ flexDirection: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5rem;
  width: 100%;
  color: black;
  @media screen and (max-width: 1280px) {
    width: auto;
    flex-direction: ${({ flexDirection }) => flexDirection};
    margin-top: 30px;
    .row-reverse {
      flex-direction: column-reverse !important;
    }
  }
  .active {
    background-color: blue;
  }
`
const Article = styled(motion.article)<{ mobileAlign: string }>`
  font-weight: 400;
  line-height: 2.3rem;
  font-size: 1.5rem;
  width: 560px;
  text-align: start;
  @media screen and (max-width: 1280px) {
    width: 100%;
    padding: 10px 2rem;
    margin: 1rem 0;
    text-align: center;
    text-align: ${({ mobileAlign }) => mobileAlign};
  }
`
const ImgWrapper = styled(motion.div)`
  border-radius: 8px;
  overflow: hidden;

  @media screen and (max-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    width: 100%;
    height: auto;
    overflow: hidden;
    border-radius: 8px;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 180px;
    overflow: hidden;
    border-radius: 8px;
  }
  > * {
    border-radius: 8px;
  }
`
