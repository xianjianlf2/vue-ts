import { ISystemState } from './main/system/types'
import { ILoginState } from './login/types'

export interface IRootState {
  entireRoles: any[]
  entireDepartments: any[]
  entireMenus: any[]
}

export interface IRootWithModule {
  login: ILoginState
  system: ISystemState
}

export type IStoreType = IRootState & IRootWithModule
