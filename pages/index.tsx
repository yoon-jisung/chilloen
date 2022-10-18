import type { NextPage } from 'next'
import { Fragment } from 'react'
import styled from 'styled-components'
import Intro from 'pages/Index/Intro'
import AboutUs from 'pages/Index/About'
import Product from 'pages/Index/Product'
import News from 'pages/Index/News'
import Career from 'pages/Index/Career'
import ContactUs from 'pages/Index/Contact'

const Home: NextPage = () => {
  return (
    <Fragment>
      <Intro />
      <AboutUs />
      <Product />
      <News />
      <Career />
      <ContactUs />
    </Fragment>
  )
}

export default Home

export const CategoryTitle = styled.h4`
  color: ${({ theme }) => theme.colors.sub_title};
  font-size: ${({ theme }) => theme.colors.xxl};
  padding: 20px 0;
  font-weight: 700;
  font-size: 24px;
`
export const CategoryText = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.titleSize};
  line-height: 48px;
`

export const SubTexts = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
`
