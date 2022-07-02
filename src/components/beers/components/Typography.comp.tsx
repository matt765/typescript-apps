import * as React from 'react'

export const Heading1 = ({
  children, className, ...rest
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) =>
  <h1 className={`text-6xl ${className}`} {...rest}>
    {children}
  </h1>

export const Paragraph = ({
  children, className, ...rest
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) =>
  <p className={`mb-6 mt-1 text-3xl font-light ${className}`} {...rest}>
    {children}
  </p>

