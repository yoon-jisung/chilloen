import type { NextPage } from 'next'
import { Fragment } from 'react'
import styled from 'styled-components'
import Intro from 'pages/Index/Intro'
import AboutUs from 'pages/Index/About'
import Product from 'pages/Index/Product'
import News from 'pages/Index/News'
import Career from 'pages/Index/Career'
import ContactUs from 'pages/Index/Contact'
import { calcRem } from 'styles/theme'

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
  font-size: ${({ theme }) => theme.fontSizes.xxxl};
`
export const CategoryText = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.titleSize};
  line-height: 48px;
`

export const SubTexts = styled.p<{ marginTop?: number }>`
  margin-top: ${({ marginTop }) => calcRem(marginTop || 0)};
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  line-height: 30px;
  text-align: center;

  @media screen and (max-width: 1280px) {
    font-size: ${({ theme }) => theme.fontSizes.base};
    line-height: 20px;
  }
  @media screen and (max-width: ${({ theme }) => theme.deviceSizes.mobileL}) {
    font-size: ${({ theme }) => theme.fontSizes.small};
    line-height: 20px;
  }
`
