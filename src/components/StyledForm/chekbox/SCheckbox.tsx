import styled from 'styled-components'

interface ICheckbox {
  onChange: () => void
}

const SCheckbox = (props: ICheckbox) => {
  return (
    <>
      <SLabel>
        <SChkbox type={'checkbox'} {...props} />
        Acesso Vitalício
      </SLabel>
    </>
  )
}

export default SCheckbox

const SLabel = styled.label`
  font-size: clamp(1rem, 0.8977rem + 0.4545vw, 1.125rem);
  font-weight: 600;

  display: flex;
  align-items: center;
  gap: 8px;
`
const SChkbox = styled.input`
  width: 25px;
  aspect-ratio: 1;

  cursor: pointer;
`
