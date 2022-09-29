import React from 'react'
import { useContainerContext, ContainerContext } from './ContainerContext'

interface IDisplayContainerProps {
  grid?: [number, number]
}

const DisplayContainer: React.FC<IDisplayContainerProps> = (props) => {
  const { grid } = props
  const containerContextValue = useContainerContext(grid)

  return (
    <div
      className="display-container"
      tabIndex={0}
    >
      <ContainerContext.Provider value={containerContextValue}>
        {props.children}
      </ContainerContext.Provider>
    </div>
  )
}

export default DisplayContainer
