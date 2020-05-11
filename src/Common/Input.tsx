import React, { Props } from "react";

type InputProps = {
  onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void),
  value?: string | number | string[]
}
export default function Input({onChange, value}: InputProps) {
  return (
    <input onChange={onChange} value={value} />
  )
}