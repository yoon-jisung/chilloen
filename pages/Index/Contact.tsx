import Screen from 'components/Screen'
import { CategoryTitle, CategoryText } from 'pages'
import Image from 'next/image'
import CreditLine from '../../public/images/investor_creditLine.png'
import Davich from '../../public/images/investor_davich.png'
import Metabuild from '../../public/images/investor_metabuild.png'
import styled from 'styled-components'
import { defaultInputsStyle } from 'styles/container'
import { useForm } from 'react-hook-form'
import oddyardPic from '../../public/images/oddyard_main.png'

const Regex = { email: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g, tests: /\s/g }

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const emailRegister = register('email', {
    required: { value: true, message: '이메일을 입력해주세요.' },
    pattern: { value: Regex.email, message: '이메일 형식을 입력해주세요.' },
  })

  const textsRegister = register('texts', {
    required: { value: true, message: '내용을 입력해주세요.' },
    pattern: { value: Regex.tests, message: '내용을 입력해주세요.' },
  })

  return (
    <Screen style={{ bg: '#F6F6F6' }}>
      <CategoryTitle>Invertors</CategoryTitle>
      <ContactUsCardContainer>
        <Image
          src={CreditLine}
          alt="About Img"
          placeholder="blur"
          width={280}
          height={100}
        />

        <Image
          src={Davich}
          alt="About Img"
          placeholder="blur"
          width={280}
          height={100}
        />

        <Image
          src={Metabuild}
          alt="About Img"
          placeholder="blur"
          width={280}
          height={100}
        />
      </ContactUsCardContainer>

      <CategoryTitle>Contact us</CategoryTitle>
      <CategoryText>칠로엔의 예술에 동참해보세요</CategoryText>
      <ContactUsFormWrapper>
        <ContactUsForm>
          <Input {...emailRegister} />
          <TextBox {...textsRegister} />
        </ContactUsForm>
      </ContactUsFormWrapper>
    </Screen>
  )
}
export default ContactUs

const ContactUsCardContainer = styled.div`
  display: flex;
  @media screen and (max-width: 1280px) {
    flex-direction: column;
  }
`

const Input = styled.input`
  ${defaultInputsStyle};
  width: 680px;
  height: 58px;
  margin-bottom: 1rem;
  padding: 14px 24px;
`
const TextBox = styled.textarea`
  ${defaultInputsStyle};
  width: 680px;
  height: 248px;
  margin-bottom: 1rem;
  padding: 14px 24px;
`

const ContactUsForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-end;
`
const ContactUsFormWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 44px 0;
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 1083px;
  height: 580px;
  border-radius: 8px;
  padding: 4rem 2rem;
`
