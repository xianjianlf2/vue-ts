import mxRequest from '@/service'
import { IAccount, IDataType, ILoginResult } from './types'

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/'
}

export function accountLoginRequest(account: IAccount) {
  return mxRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return mxRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id
  })
}
