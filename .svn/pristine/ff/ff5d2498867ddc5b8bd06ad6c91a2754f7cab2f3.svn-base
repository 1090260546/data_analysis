import { Merge } from 'utils/types'

export enum GetPassWordType {
  'EMAIL' = 'email',
  'USERNAME' = 'username'
}

export const getPassWordTypeLocale = {
  [GetPassWordType.EMAIL]: '通过邮件找回',
  [GetPassWordType.USERNAME]: '通过用户名找回'
}

export enum FindPwStep {
  'CAPTCHA' = 'captcha',
  'RESET' = 'reset'
}

export interface IGetgetCaptchaParams {
  type: string
  ticket: string
  resolve: (response: any) => void
}

export interface IResetPasswordParams extends IGetgetCaptchaParams {
  token: string
  checkCode: string
  password: string
}

interface IFPHandler {
  step: FindPwStep
  setStep: (step: FindPwStep) => void
  setType: (type: GetPassWordType) => void
  setTicket: (ticket: string) => void
  setToken: (token: string) => void
}

export type IOperateStates = Merge<
  IFPHandler,
  Merge<
    Pick<IResetPasswordParams, 'token'>,
    Omit<IGetgetCaptchaParams, 'resolve'>
  >
>

export interface IChildOperateStates {
  operate: IOperateStates
}
