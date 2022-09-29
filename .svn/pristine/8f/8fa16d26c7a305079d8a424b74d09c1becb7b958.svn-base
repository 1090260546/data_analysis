import React from 'react'
import { EditorContext, useEditorContext } from '../context'

import Font from './Font'
import Heading from './Heading'
import Format from './Format'
import Alignment from './Alignment'
import Link from './Link'
import Image from './Image'
import Reset from './Reset'

import './Toolbar.less'

const Toolbar: React.FC = (props) => {
  const editorContextValue = useEditorContext()
  return (
    <div className="richtext-toolbar">
      <EditorContext.Provider value={editorContextValue}>
        {props.children ? (
          props.children
        ) : (
          <>
            <Font />
            <Heading />
            <Format />
            <Alignment />
            <Link />
            <Image />
            <Reset />
          </>
        )}
      </EditorContext.Provider>
    </div>
  )
}

export default Toolbar
