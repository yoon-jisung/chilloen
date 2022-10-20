import { Fragment } from 'react'
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

const Regex = {
  email: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
  tests: /\s/g,
  name: /\s/g,
}

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm()

  const emailRegister = register('email', {
    required: { value: true, message: '이메일을 입력해주세요.' },
    pattern: { value: Regex.email, message: '이메일 형식을 입력해주세요.' },
  })

  const nameRegister = register('name', {
    required: { value: true, message: '이메일을 입력해주세요.' },
    pattern: { value: Regex.name, message: '이메일 형식을 입력해주세요.' },
  })

  const textsRegister = register('texts', {
    required: { value: true, message: '내용을 입력해주세요.' },
    pattern: { value: Regex.tests, message: '내용을 입력해주세요.' },
  })

  return (
    <Fragment>
      <Screen style={{ bg: '#F6F6F6', screenHeight: 50 }}>
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
      </Screen>
      <Screen style={{ bg: '#F6F6F6', screenHeight: 50 }}>
        <CategoryTitle>Contact us</CategoryTitle>
        <CategoryText>칠로엔의 예술에 동참해보세요</CategoryText>
        <ContactUsFormWrapper>
          <ContactUsForm onSubmit={handleSubmit((data) => console.log(data))}>
            <InputWrapper>
              <Input
                {...nameRegister}
                className="first-child"
                placeholder="NAME"
                id="name"
                type="name"
              />
              <Input
                {...emailRegister}
                placeholder="Email"
                id="email"
                type="email"
              />
            </InputWrapper>

            <TextBox {...textsRegister} placeholder="Write Us a Message" />
            <ButtonWrapper>
              <SendButton type="submit" disabled={isSubmitting}>
                Send
              </SendButton>
            </ButtonWrapper>
          </ContactUsForm>
        </ContactUsFormWrapper>
      </Screen>
    </Fragment>
  )
}
export default ContactUs

const ButtonWrapper = styled.div`
  position: relative;
  min-width: 100%;
`
const ContactUsCardContainer = styled.div`
  display: flex;
  @media screen and (max-width: 1280px) {
    flex-direction: column;
  }
`
const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  .first-child {
    margin-right: 30px;
  }
`
const Input = styled.input`
  ${defaultInputsStyle};
  width: 100%;
  height: 58px;
  margin-bottom: 1rem;
  padding: 14px 16px;
`
const TextBox = styled.textarea`
  ${defaultInputsStyle};
  resize: none;
  height: 248px;
  margin-bottom: 1rem;
  padding: 14px 16px;
`

const ContactUsForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const ContactUsFormWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 44px 0;
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 480px;
  border-radius: 8px;
  padding: 2rem 2rem;
`
const SendButton = styled.button`
  position: absolute;
  background: #074478;
  border: 1px solid #000000;
  right: 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  color: white;
  width: 120px;
  height: 48px;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
`
