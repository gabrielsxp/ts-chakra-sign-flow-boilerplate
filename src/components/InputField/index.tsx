import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage
} from '@chakra-ui/react'
import { useField } from 'formik'
import React, { InputHTMLAttributes } from 'react'

export type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string
  label?: string
  placeholder?: string
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  size: _,
  ...props
}) => {
  const [field, { error }] = useField(props)
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={field.name}>{label}</FormLabel>}
      <Input
        size="lg"
        {...props}
        {...field}
        id={field.name}
        placeholder={props.placeholder}
      />
      {!!error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  )
}

export default InputField
