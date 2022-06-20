import { IForm } from '@/base-ui/form'

export const searchFormConfig: IForm = {
  labelWidth: '120px',
  itemStyle: {
    padding: '10px 40px'
  },
  colLayout: {
    span: 8
  },
  formItems: [
    {
      field: 'name',
      type: 'select',
      label: '系统名称',
      placeholder: '请输入系统名称',
      options: [
        { label: 'MES系统', value: 'Mes' },
        { label: 'TMS系统', value: 'TMS' },
        { label: '内部管理系统', value: 'projectAdmin' }
      ]
    },
    {
      field: 'environment',
      type: 'select',
      label: '所属环境',
      placeholder: '请输入系统名称',
      options: [
        { label: 'DEV', value: 'Mes' },
        { label: 'TEST', value: 'TMS' },
        { label: 'PRD', value: 'projectAdmin' }
      ]
    },
    {
      field: 'createAt',
      type: 'datepicker',
      label: '创建时间',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ]
}
