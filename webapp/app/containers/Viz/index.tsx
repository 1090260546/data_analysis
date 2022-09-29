import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { useInjectReducer } from 'utils/injectReducer'
import { useInjectSaga } from 'utils/injectSaga'

import reducer from './reducer'
import saga from './sagas'

import { VizList, PortalIndex, VizDisplay } from './Loadable'

export default () => {
  useInjectReducer({ key: 'viz', reducer })
  useInjectSaga({ key: 'viz', saga })

  return (
    <Switch>
      <Route path="/project/:projectId/vizs" component={VizList} />
      <Route path="/project/:projectId/portal/:portalId" component={PortalIndex} />
      <Route path="/project/:projectId/display/:displayId" component={VizDisplay} />
    </Switch>
  )
}
