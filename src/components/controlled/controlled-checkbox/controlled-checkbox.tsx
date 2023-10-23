import { useController, UseControllerProps, FieldValues } from 'react-hook-form'

import { Checkbox, CheckboxProps } from '../..'

export type ControlledCheckboxProps<T extends FieldValues> = Pick<
    UseControllerProps<T>,
    'control' | 'name'
> &
    Omit<CheckboxProps, 'checked' | 'onValueChange'>

export const ControlledCheckbox = <T extends FieldValues>({
    control,
    name,
    ...rest
}: ControlledCheckboxProps<T>) => {
    const {
        field: { value, onChange },
    } = useController({
        name,
        control,
    })

    return <Checkbox {...rest} checked={value} onValueChange={onChange} id={name} />
}
