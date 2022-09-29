import React, { useEffect, memo, useMemo } from 'react'
import Helmet from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import { AppActions } from './actions'
import { querystring } from '../../util'
import {
  Route,
  HashRouter as Router,
  Switch,
  useHistory
} from 'react-router-dom'

import injectReducer, { useInjectReducer } from 'utils/injectReducer'
import injectSaga, { useInjectSaga } from 'utils/injectSaga'
import reducer from './reducer'
import saga from './sagas'
import { Tmode } from 'app/components/SharePanel/types'
import { makeSelectShareType } from './selectors'

import { Display } from 'share/containers/Display/Loadable'
import { Dashboard } from 'share/containers/Dashboard/Loadable'
import { NotFound } from 'containers/NotFoundPage/Loadable'
import { setToken } from 'app/utils/request'
import Interceptor from './Interceptor'

export const App: React.FC = () => {
  useInjectReducer({ key: 'global', reducer })
  useInjectSaga({ key: 'global', saga })
  const shareType: Tmode = useSelector(makeSelectShareType())

  const { shareToken } = useMemo(
    () => querystring(window.location.search.substr(1)),
    [window.location.search]
  )
  const history = useHistory()
  const currentPathname = history.location.pathname + history.location.search
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(AppActions.interceptor(shareToken))
    dispatch(AppActions.getServerConfigurations())
  }, [])

  useEffect(() => {
    const pathname = sessionStorage.getItem('pathname')
    if (pathname && pathname !== currentPathname) {
      history.push(pathname)
      sessionStorage.removeItem('pathname')
    }

    const token = localStorage.getItem('TOKEN')
    if (token) {
      setToken(token)
    }
  }, [])

  useEffect(() => {
    if (shareType === 'NORMAL') {
      dispatch(AppActions.getPermissions(shareToken))
    }
  }, [shareType])

  return (
    <div>
      <Helmet
        titleTemplate="%s - 数据分析平台"
        defaultTitle="数据分析平台"
        meta={[
          {
            name: 'description',
            content: '数据分析平台'
          }
        ]}
      />

      <Interceptor>
        <Router>
          <Switch>
            <Route exact path="/share/display" component={Display} />
            <Route exact path="/share/dashboard" component={Dashboard} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </Interceptor>
    </div>
  )
}

export default App
