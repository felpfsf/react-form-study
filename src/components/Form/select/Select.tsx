import { ReactNode } from 'react'

interface ISelectProps {
  id: string
  name: string
  children: ReactNode[]
}

const Select = (props: ISelectProps) => {
  return (
    <>
      <select className='' {...props}>
        {props.children}
      </select>
    </>
  )
}

export default Select
