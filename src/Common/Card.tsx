import React, { ReactNode } from 'react'
import "./Card.css"

type CardProps = {
  children: ReactNode
}
export default function Card({children}: CardProps) {
  return (
    <div className="card">
      {children}
    </div>
  )
}
