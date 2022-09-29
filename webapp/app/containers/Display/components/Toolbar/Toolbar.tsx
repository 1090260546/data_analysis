import React from 'react'
import './Toolbar.less'

const Toolbar: React.FC = (props) => {
  const { children } = props
  return <div className="display-toolbar">{children}</div>
}

export default Toolbar
