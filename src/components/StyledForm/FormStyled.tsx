import { FormEvent, useState } from 'react'

import styled from 'styled-components'

import Select from './select/Select'
import Input from './input/Input'
import SCheckbox from './chekbox/SCheckbox'
import Button from './button/Button'

const FormStyled = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false)

  const optionMidia = [
    { id: 1, value: 'videoAula', text: 'Vídeo Aula' },
    { id: 2, value: 'link', text: 'Link' },
    { id: 3, value: 'arquivo', text: 'Arquivo' }
  ]
  const optionPastas = [
    { id: 1, value: 'direitoAdm', text: 'Direito Administrativo' },
    { id: 2, value: 'direitoConst', text: 'Direito Constitucional' },
    { id: 3, value: 'legislacao', text: 'Legislação' }
  ]

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const data = Object.fromEntries(formData)
    console.log(
      data.midia,
      data.link,
      data.titulo,
      data.escola,
      data.dataAcesso,
      data.pastas,
      isChecked
    )
    console.log(data)
  }
  return (
    <SForm onSubmit={handleSubmit}>
      <Select id='midia' name='midia' labelText='Tipo de mídia'>
        <option value='' hidden>
          Tipo de mídia
        </option>
        {optionMidia.map(option => (
          <option key={option.id} value={option.value}>
            {option.text}
          </option>
        ))}
      </Select>
      <Input
        type='text'
        name='link'
        labelText='Insira o link'
        placeholder='Inserir link '
        isDatevariant={false}
      />
      <Input
        type='text'
        name='titulo'
        labelText='Título'
        placeholder='Inserir título'
        isDatevariant={false}
      />
      <Input
        type='text'
        name='escola'
        labelText='Instituição de ensino'
        placeholder='Inserir Instituição'
        isDatevariant={false}
      />
      <SDateContainer>
        <Input
          type='date'
          name='dataAcesso'
          labelText='Data limite de acesso'
          isDatevariant={true}
          disabled={isChecked}
        />
        <SCheckbox onChange={() => setIsChecked(prev => !prev)} />
      </SDateContainer>
      <Select id='pastas' name='pastas' labelText='Adicionar a'>
        <option value='' hidden>
          Escolha uma pasta
        </option>
        {optionPastas.map(option => (
          <option key={option.id} value={option.value}>
            {option.text}
          </option>
        ))}
      </Select>
      <SBtnContainer>
        <Button isCancelVariant={false}>Enviar</Button>
        <Button isCancelVariant={true}>Cancelar</Button>
      </SBtnContainer>
    </SForm>
  )
}

export default FormStyled

const SForm = styled.form`
  max-width: 50rem;
  min-width: 20rem;

  width: 100%;

  margin: 2rem auto;

  padding: 1rem;

  border: 1px solid orange;
`
const SDateContainer = styled.div`
  /* width: 65%; */
  height: 67px;
  margin-top: 2rem;
  display: flex;
  align-items: flex-end;
`

const SBtnContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 48px;
`
