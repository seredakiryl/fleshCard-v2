import { useController, useForm } from 'react-hook-form'

import { Button } from '../../ui/button'
import { TextField } from '../../ui/text-field'
import { Checkbox } from '../..'

type FormValues = {
  email: string
  password: string
  rememberMe: boolean
}

export const LoginForm = () => {
  const { register, handleSubmit, control, formState: {
    errors
  } } = useForm<FormValues>()

  console.log(errors)

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  const {
    field: { value, onChange },
  } = useController({
    name: 'rememberMe',
    control,
    defaultValue: false,
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField {...register('email', { minLength: { value: 3, message: 'три' } })} label={'email'} />
      <TextField {...register('password')} label={'password'} />
      <Checkbox checked={value} onValueChange={onChange} label={'remember me'} />
      <Button type="submit">Submit</Button>
    </form>
  )
}