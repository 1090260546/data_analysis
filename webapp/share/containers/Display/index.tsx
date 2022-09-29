import React, { useEffect, useState, useCallback } from 'react'
import Helmet from 'react-helmet'
import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { makeSelectTitle } from './selectors'
import { ShareDisplayActions } from './actions'
import { makeSelectLoginLoading } from '../App/selectors'

import { useInjectReducer } from 'utils/injectReducer'
import { useInjectSaga } from 'utils/injectSaga'

import reducer from './reducer'
import saga from './sagas'
import Reveal from './Reveal'

import mainStyles from 'containers/Main/Main.less'

const ShareDisplayIndex: React.FC = () => {
  useInjectReducer({ key: 'shareDisplay', reducer })
  useInjectSaga({ key: 'shareDisplay', saga })

  const dispatch = useDispatch()
  const location = useLocation()

  const shareToken = new URLSearchParams(window.location.search).get(
    'shareToken'
  )

  useEffect(() => {
    sessionStorage.setItem('pathname', location.pathname + location.search)
  }, [])

  const loadShareContent = useCallback(() => {
    dispatch(
      ShareDisplayActions.loadDisplay(
        shareToken,
        () => null,
        () => null
      )
    )
  }, [])

  useEffect(loadShareContent, [])

  const title = useSelector(makeSelectTitle())
  return (
    <>
      <Helmet title={title} />
      <div className={mainStyles.container}>
        {title && <Reveal />}
      </div>
    </>
  )
}

export default ShareDisplayIndex
