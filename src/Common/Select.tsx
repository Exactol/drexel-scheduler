import React from "react"
import RSelect from "react-select"
import { SelectComponentsProps } from "react-select/src/Select"

export default function Select({...props}: SelectComponentsProps) {
  return (
    <RSelect {...props}/>
  )
}
