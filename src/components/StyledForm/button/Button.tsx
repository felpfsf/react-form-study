import { ReactNode } from 'react'
import styled, { css } from 'styled-components'

interface IButton {
  children: ReactNode
  isCancelVariant: boolean
}
const Button = ({ isCancelVariant, children }: IButton) => {
  return (
    <>
      <SButton isCancelVariant={isCancelVariant}>{children}</SButton>
    </>
  )
}

export default Button

// Styled
const defaultButton = css`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
  &:hover {
    border-color: #646cff;
  }
`

const cancelButton = css`
  ${defaultButton}
  background-color: #646cff;
  &:hover {
    border-color: #1a1a1a;
  }
`

const SButton = styled.button`
  ${defaultButton}
  ${(props: { isCancelVariant: any }) => props.isCancelVariant && cancelButton}
`
