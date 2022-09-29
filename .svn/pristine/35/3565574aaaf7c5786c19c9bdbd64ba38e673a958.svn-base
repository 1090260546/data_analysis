import React, { memo, useMemo, useState, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useInjectReducer } from 'utils/injectReducer'
import { useInjectSaga } from 'utils/injectSaga'
import { ActionTypes } from './constants'
import { AppActions } from './actions'
import { makeSelectShareType, makeSelectPermissionLoading } from './selectors'
import Password from 'share/components/Password'
import Login from 'share/components/Login'
import {
  querystring,
  isAuthPassword,
  localStorageCRUD,
  removeNoAuthedPassword,
  getExpirationTime
} from '../../util'
import reducer from './reducer'
import saga from './sagas'
import { Tmode } from 'app/components/SharePanel/types'
import { message } from 'antd'
import { makeSelectLoginLoading } from '../App/selectors'

const Interceptor: React.FC<any> = (props) => {
  useInjectReducer({ key: 'global', reducer })
  useInjectSaga({ key: 'global', saga })
  const dispatch = useDispatch()
  const shareType: Tmode = useSelector(makeSelectShareType())
  const loading: boolean = useSelector(makeSelectPermissionLoading())
  const loginLoading: boolean = useSelector(makeSelectLoginLoading())

  const { shareToken } = useMemo(
    () => querystring(window.location.search.substr(1)),
    [window.location.search]
  )

  const [authPassword, setAuthPwd] = useState<boolean>(() => {
    const shareTokenObj = localStorageCRUD(
      ActionTypes.PASSWORD_SHARE_TOKENS
    ).retrieve(shareToken)
    return isAuthPassword(shareTokenObj)
  })

  const [islegitimate, setLegitimate] = useState<boolean>(false)

  const CheckPassword = useCallback(
    (password: string) => {
      dispatch(
        AppActions.getPermissions(
          shareToken,
          password,
          () => {
            setAuthPwd(true)
            localStorageCRUD(ActionTypes.PASSWORD_SHARE_TOKENS).update(
              shareToken,
              {
                password,
                expire: getExpirationTime(7)
              }
            )
          },
          () => {
            return message.error('口令输入错误')
          }
        )
      )
    },
    [shareToken]
  )

  const afterLogin = useCallback(() => {
    localStorage.removeItem('shareToken')
    localStorage.removeItem('shareRoute')
    setLegitimate(true)
    dispatch(AppActions.getPermissions(shareToken))
  }, [islegitimate])

  const content = useMemo(() => {
    if (shareType && shareType.length) {
      if (shareType === 'PASSWORD' && !authPassword) {
        return <Password onCheck={CheckPassword} loading={loading} />
      }
      if (shareType === 'AUTH' && !islegitimate) {
        return (
          <Login
            loading={loginLoading}
            shareToken={shareToken}
            loginCallback={afterLogin}
          />
        )
      }
      return <>{props.children}</>
    }
    return <></>
  }, [shareType, authPassword, islegitimate])

  useEffect(() => {
    // delete expire token
    removeNoAuthedPassword(ActionTypes.PASSWORD_SHARE_TOKENS)
  }, [])

  return content
}

export default memo(Interceptor)
