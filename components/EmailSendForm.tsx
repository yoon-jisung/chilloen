import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { defaultInputsStyle } from 'styles/container'
import emailjs from 'emailjs-com'

const Regex = {
  email: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
}

const EmailSendForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm()
  const form = useRef(null)

  const emailRegister = register('email', {
    required: { value: true, message: '이메일을 입력해주세요.' },
    pattern: { value: Regex.email, message: '이메일 형식을 입력해주세요.' },
  })

  const nameRegister = register('name', {
    required: { value: true, message: '이름 입력해주세요.' },
  })

  const textsRegister = register('texts', {
    required: { value: true, message: '내용을 입력해주세요.' },
  })

  const sendEmail = async () => {
    if (form !== null) {
      await emailjs
        .sendForm(
          'service_s6ivuh4',
          'template_lplcx91',
          form.current as unknown as HTMLFormElement,
          'g4o88jyicc5209iNM',
        )
        .then(
          async () => {
            await new Promise((r) => setTimeout(r, 1000))
            alert('send email')
            reset()
          },
          async (error) => {
            await new Promise((r) => setTimeout(r, 1000))
            alert(error.text)
            reset()
          },
        )
    }
  }

  return (
    <ContactUsForm ref={form} onSubmit={handleSubmit(() => sendEmail())}>
      <InputWrapper>
        <Input
          {...nameRegister}
          className="first-child"
          placeholder="Name"
          id="name"
          type="name"
        />
        <Input {...emailRegister} placeholder="Email" id="email" type="email" />
      </InputWrapper>

      <TextBox {...textsRegister} placeholder="Write Us a Message" />
      <ButtonWrapper>
        <SendButton type="submit" disabled={isSubmitting}></SendButton>
      </ButtonWrapper>
    </ContactUsForm>
  )
}
export default EmailSendForm

const ContactUsForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const ButtonWrapper = styled.div`
  position: relative;
  min-width: 100%;
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
  ::placeholder {
    color: ${({ theme }) => theme.colors.grey400};
    font-family: 'Pretendard';
    font-size: 16px;
    font-weight: 400;
  }
`
const TextBox = styled.textarea`
  ${defaultInputsStyle};
  resize: none;
  height: 248px;
  margin-bottom: 1rem;
  padding: 14px 16px;
  ::placeholder {
    color: ${({ theme }) => theme.colors.grey400};
    font-family: 'Pretendard';
    font-size: 16px;
    font-weight: 400;
  }
`

const SendButton = styled.input`
  cursor: pointer;
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
