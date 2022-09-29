import { IDavinciResponse } from 'app/utils/request'

export const mockAnonymousAction: any = { type: '' }

export function getMockResponse<T>(payload: T): IDavinciResponse<T> {
  return {
    header: {
      code: 200,
      msg: 'success',
      token: ''
    },
    payload
  }
}
