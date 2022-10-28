import Screen from 'components/Screen'
import { CategoryTitle, CategoryText, SubTexts, textAnimate } from 'pages'
import NewsSlider from 'components/NewsSlider'

const News = () => {
  return (
    <Screen
      styleProps={{
        bg: 'F6F6F6',
        textColor: 'black',
        screenHeight: 50,
        justifyContent: 'flex-start',
      }}
    >
      <CategoryTitle
        variants={textAnimate}
        initial={'offscreen'}
        whileInView={'onscreen'}
        viewport={{ once: true, amount: 0.8 }}
      >
        News
      </CategoryTitle>
      <CategoryText
        variants={textAnimate}
        initial={'offscreen'}
        whileInView={'onscreen'}
        viewport={{ once: true, amount: 0.8 }}
      >
        칠로엔은 행동합니다.
      </CategoryText>
      <SubTexts
        marginTop={16}
        variants={textAnimate}
        initial={'offscreen'}
        whileInView={'onscreen'}
        viewport={{ once: true, amount: 0.8 }}
      >
        창작을 위해 발전하는 칠로엔의 모습을 지켜보세요.
      </SubTexts>
      <NewsSlider />
    </Screen>
  )
}

export default News
