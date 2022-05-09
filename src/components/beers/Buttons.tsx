import * as React from 'react'

export const Button = ({ children }: { children: string }) => (
  <button className="rounded border-2 border-transparent bg-slate-700 py-2 px-3 text-sky-50 transition-all  hover:border-slate-300 active:scale-95">
    {children}
  </button>
)
