import { ReactNode } from 'react'
import styled from 'styled-components'

interface ISelectProps {
  id: string
  name: string
  labelText: string
  children: ReactNode[]
}

const Select = (props: ISelectProps) => {
  return (
    <SInputContainer>
      <SLabel>{props.labelText}</SLabel>
      <SSelect {...props}>{props.children}</SSelect>
      <SErrMsg>Mensagem de errro</SErrMsg>
    </SInputContainer>
  )
}

export default Select

// Styled
const SInputContainer = styled.div`
  font-family: 'Robot', sans-serif;

  width: 100%;

  margin-top: 2rem;

  display: flex;
  flex-direction: column;
`

const SLabel = styled.label`
  font-size: clamp(1rem, 0.8977rem + 0.4545vw, 1.125rem);
  font-weight: 600;
  color: #fff;
`

const SSelect = styled.select`
  font-family: 'Robot', sans-serif;
  font-size: 0.875rem;
  color: #242424;

  width: 100%;
  height: 35px;

  margin-top: 0.5rem;

  padding: 0.125rem 1rem;

  background-color: #fff;

  border: none;
  border-radius: 8px;

  cursor: pointer;

  & option {
    padding: 2px 16px;
    background: #fff;
    white-space: pre;
  }
`

const SErrMsg = styled.span`
  color: crimson;
  font-weight: 600;
  display: none;
`
