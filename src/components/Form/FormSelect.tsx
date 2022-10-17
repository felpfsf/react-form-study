import { FormEvent, useState } from 'react'
import Input from './input/Input'
import Select from './select/Select'
// Style
import './Form.Style.css'
import Checkbox from './checkbox/Checkbox'

const FormSelect = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const data = Object.fromEntries(formData)
    // console.log(data)
    // console.log(isChecked)
    console.log(data.pastas, isChecked)
  }

  const options = [
    { id: 1, value: 'direitoAdm', text: 'Direito Administrativo' },
    { id: 2, value: 'direitoConst', text: 'Direito Constitucional' },
    { id: 3, value: 'legislacao', text: 'Legislação' }
  ]

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column' }}>
        <h1>Formulário com select</h1>
        <Select id='pastas' name='pastas'>
          <option value='' hidden>
            Escolha sua opção
          </option>
          {options.map(option => (
            <option key={option.id} value={option.value}>
              {option.text}
            </option>
          ))}
        </Select>
        <input style={{ color: '#242424' }} type='date' disabled={isChecked} />
        <Checkbox
          type='checkbox'
          onChange={() => setIsChecked(prev => !prev)}
          text='Acesso vitalício'
        />
        <button>Enviar</button>
      </form>
    </>
  )
}

export default FormSelect
