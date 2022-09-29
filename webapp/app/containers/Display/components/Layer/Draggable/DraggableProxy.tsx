import React from 'react'

import { DraggableChildrenProps } from '../types'

export const DraggableProxyContext = React.createContext<
  DraggableChildrenProps
>({})

export const DraggableProxy: React.FC<DraggableChildrenProps> = (props) => {
  const { children, ...rest } = props

  return (
    <DraggableProxyContext.Provider value={rest}>
      {children}
    </DraggableProxyContext.Provider>
  )
}
