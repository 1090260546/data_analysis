import React, { FC, ChangeEvent, FormEvent } from 'react'
import { Icon } from 'antd'
import styles from '../Login/Login.less'

interface IRegisterFormProps {
  username: string
  email: string
  password: string
  password2: string
  loading: boolean
  onChangeUsername: (e: ChangeEvent<HTMLInputElement>) => void
  onChangeEmail: (e: ChangeEvent<HTMLInputElement>) => void
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void
  onChangePassword2: (e: ChangeEvent<HTMLInputElement>) => void
  onSignup: (e: FormEvent<HTMLFormElement>) => void
  onCheckName: (
    id: number,
    name: string,
    type: string,
    resolve?: (res: any) => any,
    reject?: (error: any) => any
  ) => any
}

const RegisterForm: FC<IRegisterFormProps> = ({
  username,
  email,
  password,
  password2,
  loading,
  onChangeUsername,
  onChangeEmail,
  onChangePassword,
  onChangePassword2,
  onSignup
}) => {
  return (
    <form className={styles.form} onSubmit={onSignup}>
      <div className={styles.input}>
        <Icon type="user" />
        <input
          placeholder="用户名"
          value={username}
          onChange={onChangeUsername}
        />
      </div>
      <div className={styles.input}>
        <Icon type="mail" />
        <input placeholder="邮箱" value={email} onChange={onChangeEmail} />
      </div>
      <div className={styles.input}>
        <Icon type="unlock" />
        <input
          placeholder="密码"
          type="password"
          value={password}
          onChange={onChangePassword}
        />
      </div>
      <div className={styles.input}>
        <Icon type="unlock" />
        <input
          placeholder="确认密码"
          type="password"
          value={password2}
          onChange={onChangePassword2}
        />
      </div>
      <button type="submit" className={styles.submit} disabled={loading}>
        {loading ? <Icon type="loading" /> : ''}
        注册
      </button>
    </form>
  )
}

export default RegisterForm
