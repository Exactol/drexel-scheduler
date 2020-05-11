import React, { ReactNode, CSSProperties } from "react";
import "./Button.css"

type ButtonProps = {
  style?: CSSProperties,
  className?: string,
  children?: ReactNode
}
export default function Button({children, className, style}: ButtonProps) {
  return (
    <button className={`button ${className}`} style={style}>
      {children}
    </button>
  )
}