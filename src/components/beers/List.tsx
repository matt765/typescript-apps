import * as React from 'react'

export const List = ({ children }: { children: React.ReactNode }) =>
  <ul
    className={
      'mx-auto grid max-w-screen-xl grid-cols-1 justify-items-stretch gap-2 sm:grid-cols-2 lg:grid-cols-3'
    }
  >
    {children}
  </ul>

interface ListItemModel {
    children: React.ReactNode
    classList?: string
}

export const ListItem = ({
  children, classList, ...rest
}: ListItemModel) =>
  <li
    className={`flex items-start justify-between gap-2 rounded-md border-2 border-transparent bg-slate-500 p-5 text-slate-200  shadow-md shadow-slate-200 transition-colors even:bg-slate-400 even:text-slate-900 hover:border-slate-900 ${classList}`}
    {...rest}
  >
    {children}
  </li>

