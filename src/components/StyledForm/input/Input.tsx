import { ChangeEvent } from 'react'
import styled, { css } from 'styled-components'

export interface IInputProps {
  type: string
  name: string
  placeholder?: string
  labelText?: string
  // width?: string
  isDatevariant: boolean
  disabled?: boolean
  // onChange: (e: ChangeEvent) => void
}

const Input = (props: IInputProps) => {
  const { labelText, isDatevariant, ...inputProps } = props

  return (
    <SInputContainer>
      <SLabel>{labelText}</SLabel>
      <SInput {...inputProps} isDatevariant={isDatevariant} />
      <SErrMsg>Mensagem de errro</SErrMsg>
    </SInputContainer>
  )
}

export default Input

// Styled

const SInputContainer = styled.div`
  font-family: 'Robot', sans-serif;

  margin-top: 2rem;

  display: flex;
  flex-direction: column;
`
const SLabel = styled.label`
  font-size: clamp(1rem, 0.8977rem + 0.4545vw, 1.125rem);
  font-weight: 600;
  color: #fff;
`

const defaultInput = css`
  font-size: 0.875rem;
  color: #242424;

  width: 100%;
  height: 35px;

  background-color: #fff;

  margin-top: 0.5rem;

  padding: 0.125rem 1rem;

  border: none;
  border-radius: 0.5rem;

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  &::placeholder {
    font-size: 0.875rem;
  }
`

const dateInput = css`
  ${defaultInput}
  width: 145px;
`

const SInput = styled.input`
  ${defaultInput}
  ${(props: { isDatevariant: any }) => props.isDatevariant && dateInput} /* 
  font-size: 0.875rem;
  color: #242424;

  width: ${props => props.width};
  height: 35px;

  background-color: #fff;

  margin-top: 0.5rem;

  padding: 0.125rem 1rem;

  border: none;
  border-radius: 0.5rem;

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  &::placeholder {
    font-size: 0.875rem;
  } 
  */
`

const SErrMsg = styled.span`
  color: crimson;
  font-weight: 600;
  display: none;
`
