import React, { useMemo, useState, ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { Form } from 'antd'
import { FormComponentProps } from 'antd/lib/form/Form'
import {
  GetPassWordType,
  IOperateStates,
  FindPwStep
} from './types'

import GetCaptcha from './GetCaptcha'
import ResetPassword from './ResetPassword'

const styles = require('./index.less')

const FindPassword: React.FC<FormComponentProps> = React.memo(() => {
  const [type, setType] = useState<GetPassWordType>(GetPassWordType.EMAIL)
  const [ticket, setTicket] = useState<string>()
  const [token, setToken] = useState<string>()
  const [step, setStep] = useState<FindPwStep>(FindPwStep.CAPTCHA)
  const operate: IOperateStates = useMemo(
    () => ({
      type,
      ticket,
      token,
      setType,
      setTicket,
      setToken,
      step,
      setStep
    }),
    [type, ticket, token, setType, setTicket, setToken]
  )

  const StepContent: ReactElement = useMemo(() => {
    return step === FindPwStep.CAPTCHA ? (
      <GetCaptcha {...operate} />
    ) : (
      <ResetPassword {...operate} />
    )
  }, [step, operate])

  return (
    <div className={styles.container}>
      <nav className={styles.header}>
        <div className={styles.logoPc}>
          <div className={styles.logo}>
            <Link to="/login">
              <img src={require('assets/images/logo.svg')} />
            </Link>
          </div>
        </div>
        <div className={styles.resetPw}>重置密码</div>
      </nav>
      <div className={styles.content}>
        <div className={styles.panel}>{StepContent}</div>
      </div>
    </div>
  )
})

export default Form.create<FormComponentProps>()(FindPassword)
