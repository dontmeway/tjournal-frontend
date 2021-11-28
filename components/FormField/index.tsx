import { TextField } from '@material-ui/core'
import React from 'react'
import { useFormContext } from 'react-hook-form'
interface FormFieldProps {
    name: string,
    type?: string,
    label: string
}
export const FormField: React.FC<FormFieldProps> = ({ name, label, type }) => {
    const { register, formState: { errors } } = useFormContext()

    return (
        <TextField
            {...register(name)}
            error={!!errors[name]}
            size="small"
            type={type}
            variant="outlined"
            label={label}
            helperText={errors[name]?.message}
            fullWidth />
    )
}
