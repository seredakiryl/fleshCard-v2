import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { ControlledCheckbox } from '../../controlled/controlled-checkbox/controlled-checkbox'
import { Button } from '../../ui/button'
import { TextField } from '../../ui/text-field'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  rememberMe: z.boolean().optional().default(false),
})

type FormValues = z.infer<typeof loginSchema>

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField {...register('email')} errorMessage={errors.email?.message} label={'email'} />
      <TextField
        {...register('password')}
        errorMessage={errors.password?.message}
        label={'password'}
      />
      <ControlledCheckbox control={control} name={'rememberMe'} label={'Remember me'} />
      <Button type="submit">Submit</Button>
    </form>
  )
}
