import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { useInjectReducer } from 'utils/injectReducer'
import { useInjectSaga } from 'utils/injectSaga'

import reducer from './reducer'
import saga from './sagas'
import viewReducer from 'containers/View/reducer'
import viewSaga from 'containers/View/sagas'

import { DisplayEditor, DisplayPreview } from './Loadable'

const DisplayIndex: React.FC = () => {
  useInjectReducer({ key: 'display', reducer })
  useInjectSaga({ key: 'display', saga })

  useInjectReducer({ key: 'view', reducer: viewReducer })
  useInjectSaga({ key: 'view', saga: viewSaga })

  return (
    <Switch>
      <Route exact path="/project/:projectId/display/:displayId/preview/slide/:slideId" component={DisplayPreview} />
      <Route exact path="/project/:projectId/display/:displayId/slide/:slideId" component={DisplayEditor} />
    </Switch>
  )
}

export default DisplayIndex
