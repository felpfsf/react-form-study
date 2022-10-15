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

const Input = (props: IInput) => {
  const [focus, setFocus] = useState(false)

  const handleFocusInput = (e: InputHTMLAttributes<HTMLInputElement>) => {
    setFocus(true)
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
          onChange={props.onChange}
          required={props.required}
          pattern={props.pattern}
          onBlur={handleFocusInput}
          focus={focus.toString()}
        />
        <div className='bottom__border'></div>
        <span className='error__message'>{props.error_message}</span>
      </div>
    </>
  )
}

export default Input
