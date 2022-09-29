import React, { FC, ChangeEvent, FormEvent } from 'react'
import { Icon } from 'antd'
import styles from './Login.less'

interface ILoginFormProps {
  username: string
  password: string
  loading: boolean
  onChangeUsername: (e: ChangeEvent<HTMLInputElement>) => void
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void
  onLogin: (e: FormEvent<HTMLFormElement>) => void
}

const LoginForm: FC<ILoginFormProps> = ({
  username,
  password,
  loading,
  onChangeUsername,
  onChangePassword,
  onLogin
}) => {
  return (
    <form className={styles.form} onSubmit={onLogin}>
      <div className={styles.input}>
        <Icon type="user" />
        <input
          placeholder="用户名"
          value={username}
          onChange={onChangeUsername}
        />
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
      <button type="submit" className={styles.submit} disabled={loading}>
        {loading ? <Icon type="loading" /> : ''}登 录
      </button>
    </form>
  )
}

export default LoginForm
