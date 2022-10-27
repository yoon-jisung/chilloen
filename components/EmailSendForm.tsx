import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { defaultInputsStyle } from 'styles/container'
import cn from 'classnames'
import emailjs from 'emailjs-com'

const Regex = {
  email: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
  name: /^[a-zA-Zㄱ-힣][a-zA-Zㄱ-힣 ]*$/,
}

const EmailSendForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    watch,
    reset,
  } = useForm({ defaultValues: { email: '', name: '', texts: '' } })
  const form = useRef(null)

  const emailRegister = register('email', {
    required: { value: true, message: '이메일을 입력해주세요.' },
    pattern: { value: Regex.email, message: '이메일 형식을 입력해주세요.' },
  })

  const nameRegister = register('name', {
    required: { value: true, message: '이름 입력해주세요.' },
    pattern: { value: Regex.name, message: '이름 형식을 입력해주세요.' },
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
      <InputsWarpper>
        <InputWrapper className="first-child">
          <Input {...nameRegister} id="name" type="name" />
          <InputLabel className={cn({ isActive: watch().name !== '' })}>
            Name
          </InputLabel>
        </InputWrapper>
        <InputWrapper>
          <Input {...emailRegister} id="email" type="email" />
          <InputLabel className={cn({ isActive: watch().email !== '' })}>
            Email
          </InputLabel>
        </InputWrapper>
      </InputsWarpper>

      <TextBox {...textsRegister} placeholder="Write Us a Message" />
      <ButtonWrapper>
        <SendButton type="submit" disabled={isSubmitting}></SendButton>
      </ButtonWrapper>
    </ContactUsForm>
  )
}
export default EmailSendForm

const InputsWarpper = styled.div`
  width: 100%;
  display: flex;
  position: relative;

  .first-child {
    margin-right: 30px;
  }
`
const InputWrapper = styled.div`
  width: 100%;
  position: relative;
  input:focus ~ label {
    top: -23px;
    left: 0;
    color: #074478;
    font-size: 12px;
  }
`
const Input = styled.input`
  ${defaultInputsStyle};
  width: 100%;
  height: 40px;
`
const TextBox = styled.textarea`
  ${defaultInputsStyle};
  resize: none;
  height: 248px;
`

const InputLabel = styled.label`
  position: absolute;
  top: 0px;
  left: 0.2rem;
  padding: 10px 0;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.grey400};
  pointer-events: none;
  transition: 0.5s;
  &.isActive {
    opacity: 0;
  }
`

const ContactUsForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const ButtonWrapper = styled.div`
  position: relative;
  min-width: 100%;
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
