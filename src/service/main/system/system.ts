import mxRequest from '../../index'
import { IDataType } from '../../types'

export function getPageListData(url: string, queryInfo: any) {
  return mxRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}

// url: /users/id
export function deletePageData(url: string) {
  return mxRequest.delete<IDataType>({
    url: url
  })
}

export function newPageData(pageUrl: string, newData: any) {
  return mxRequest.post({
    url: pageUrl,
    data: newData
  })
}

export function editPageData(pageUrl: string, editData: any) {
  return mxRequest.patch({
    url: pageUrl,
    data: editData
  })
}
