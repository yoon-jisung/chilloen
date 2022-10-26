import Screen from 'components/Screen'
import { CategoryTitle, CategoryText, SubTexts } from 'pages'
import NewsSlider from 'components/NewsSlider'

const News = () => {
  return (
    <Screen
      style={{
        bg: 'F6F6F6',
        textColor: 'black',
      }}
    >
      <CategoryTitle>News</CategoryTitle>
      <CategoryText>칠로엔은 행동합니다.</CategoryText>
      <SubTexts marginTop={16}>
        창작을 위해 발전하는 칠로엔의 모습을 지켜보세요.
      </SubTexts>
      <NewsSlider />
    </Screen>
  )
}

export default News
