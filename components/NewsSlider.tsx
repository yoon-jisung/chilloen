import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styled from 'styled-components'

const NewsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    centerPadding: '0px',
  }

  return (
    <Container>
      <CustomSlider {...settings}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </CustomSlider>
    </Container>
  )
}

export default NewsSlider

const Container = styled.div`
  width: 1200px;
  height: 350px;
  margin-top: 54px;
`
const CustomSlider = styled(Slider)`
  display: flex;
  height: 350px;

  .slick-list {
    overflow: hidden;
  }

  .slick-slide {
    display: flex;
    width: 380px;
    height: 350px;
    background: #ffffff;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    border-radius: 14px;
    margin: 0px 15px;
  }
  .slick-track {
    display: flex;
    height: 100%;
  }
`
const Cards = styled.div`
  height: 350px;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 14px;
`
