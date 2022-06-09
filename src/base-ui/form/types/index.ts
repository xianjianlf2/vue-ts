type IFormType = 'input' | 'password' | 'select' | 'datepicker'

export interface IFormItem {
  label: string
  rules?: any[]
  placeholder?: any
  type: IFormType
  // 针对select
  options?: any[]
  // 针对特殊的属性
  otherOptions?: any
}

export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  colLayout: any
  itemLayout: any
}