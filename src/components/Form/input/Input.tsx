import { ChangeEvent, InputHTMLAttributes, useState } from 'react'
import './Input.Style.css'

interface IInput {
  type: string
  name: string
  placeholder: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  pattern?: string
  required: boolean
  error_message: string
}
// Outra maneira de fazer isso, as props são enviadas no componente 
// interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = (props: IInput) => {
  const [focus, setFocus] = useState(false)

  const handleFocusInput = () => {
    setFocus(!focus)
  }

  return (
    <>
      <div className='input__container'>
        <input
          className='inpt__field'
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          value={props.value}
          required={props.required}
          pattern={props.pattern}
          onChange={props.onChange}
          // Aqui todas as props enviadas são passadas sem a necessidade de declarar cada uma
          // {...props}
          data-focus={focus.toString()}
          onBlur={handleFocusInput}
          onFocus={() => props.name === 'confirmPassword' && setFocus(!focus)}
        />
        <div className='bottom__border'></div>
        <span className='error__message'>{props.error_message}</span>
      </div>
    </>
  )
}

export default Input
