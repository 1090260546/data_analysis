import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { useInjectReducer } from 'utils/injectReducer'
import { useInjectSaga } from 'utils/injectSaga'

import reducer from './reducer'
import saga from './sagas'

import { WidgetList, Workbench } from './Loadable'

export default () => {
  useInjectReducer({ key: 'widget', reducer })
  useInjectSaga({ key: 'widget', saga })

  return (
    <Switch>
      <Route exact path="/project/:projectId/widget/:widgetId?" component={Workbench} />
      <Route exact path="/project/:projectId/widgets" component={WidgetList} />
    </Switch>
  )
}
