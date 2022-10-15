import { ChangeEvent, FormEvent, useState } from 'react'
// Components
import Input from './input/Input'
// Style
import './Form.Style.css'

const Form = () => {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const inputs = [
    {
      id: 1,
      type: 'text',
      name: 'firstName',
      placeholder: 'Insira seu nome',
      pattern: '^[A-Za-z]{3,}',
      required: true,
      error_message: 'Seu nome precisa ter mais de 3 characteres'
    },
    {
      id: 2,
      type: 'text',
      name: 'lastName',
      placeholder: 'Insira seu sobrenome',
      pattern: '^[A-Za-z]{3,}',
      required: true,
      error_message: 'Seu sobrenome precisa ter mais de 3 characteres'
    },
    {
      id: 3,
      type: 'email',
      name: 'email',
      placeholder: 'Insira seu email',
      required: true,
      error_message: 'Email inválido'
    },
    {
      id: 4,
      type: 'text',
      name: 'password',
      placeholder: 'Insira sua senha',
      pattern:
        '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,20}$',
      required: true,
      error_message:
        'Senha precisa ter 8-20 caracteres e ter pelo menos 1 letra, 1 número e 1 caracter especial'
    },
    {
      id: 5,
      type: 'text',
      name: 'confirmPassword',
      placeholder: 'Confirme sua senha',
      pattern: values.password,
      required: true,
      error_message: 'Senha não confere'
    }
  ]

  // Input onChange Handler
  const handleOnChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    // Os valores dos inputs são passados para o objeto
    // usando como referencia o valor do input com seu respectivo 'name'
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  // Submit Event Handler
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log(values)
    alert('Cadastro Efetuado')
    clear()
  }

  // Clear Inputs
  const clear = () => {
    setValues({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Criar Conta</h1>
      {inputs.map(input => (
        <Input
          key={input.id}
          {...input}
          value={values[input.name]}
          onChange={handleOnChangeInput}
        />
      ))}
      <button>Enviar</button>
    </form>
  )
}

export default Form
