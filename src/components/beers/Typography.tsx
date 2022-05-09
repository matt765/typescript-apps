import * as React from 'react'

interface Props {
  children: string
  className?: string
}

export const Heading1 = ({ children, className, ...rest }: Props) => (
  <h1 className={`text-6xl ${className}`} {...rest}>
    {children}
  </h1>
)

export const Paragraph = ({ children, className, ...rest }: Props) => (
  <p className={`mb-6 mt-1 text-3xl font-light ${className}`} {...rest}>
    {children}
  </p>
)
