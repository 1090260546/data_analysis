import React, { FC, forwardRef } from 'react'
import classnames from 'classnames'
import styles from './Container.less'

interface IContainerBodyProps {
  grid?: boolean
  children: React.ReactNode
}

const Body: FC<IContainerBodyProps> = ({ grid, children }, ref) => {
  const bodyClass = classnames({
    [styles.body]: true,
    [styles.grid]: grid
  })
  return (
    <div className={bodyClass} ref={ref}>
      {children}
    </div>
  )
}

export default forwardRef(Body)
