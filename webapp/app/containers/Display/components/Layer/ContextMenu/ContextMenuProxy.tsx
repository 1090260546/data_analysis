import React from 'react'

import { ContextMenuChildrenProps } from '../types'

export const ContextMenuProxyContext = React.createContext<
  ContextMenuChildrenProps
>({})

export const ContextMenuProxy: React.FC<ContextMenuChildrenProps> = (props) => {
  const { children, ...rest } = props
  return (
    <ContextMenuProxyContext.Provider value={rest}>
      {children}
    </ContextMenuProxyContext.Provider>
  )
}
