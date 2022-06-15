export interface ISystemState {
  usersList: any[]
  usersCount: number
  roleList: any[]
  roleCount: number
  goodsList: any[]
  goodsCount: number
  menuList: any[]
  menuCount: number
}

export interface IPagePayload {
  pageName: string
  // pageUrl: string
  queryInfo: any
  id?: number
}
