export const contentTableConfig = {
  title: '系统列表',
  propList: [
    { prop: 'name', label: '系统/工具名称', minWidth: '150' },
    { prop: 'version', label: '版本号', minWidth: '100' },
    { prop: 'url', label: '地址', minWidth: '200' },
    { prop: 'port', label: '端口号', minWidth: '100' },
    {
      prop: 'jumpToServer',
      label: '',
      minWidth: '100',
      slotName: 'jumpToServer'
    },
    { prop: 'account', label: '账号', minWidth: '100' },

    {
      prop: 'copyAccount',
      label: '',
      minWidth: '100',
      slotName: 'copyAccount'
    },
    { prop: 'password', label: '密码', minWidth: '100' },
    {
      prop: 'copyPassword',
      label: '',
      minWidth: '100',
      slotName: 'copyPassword'
    },
    { prop: 'enable', label: '状态', minWidth: '100', slotName: 'status' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '220',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '220',
      slotName: 'updateAt'
    },
    { label: '操作', minWidth: '120', slotName: 'handler' }
  ],
  showIndexColumn: false,
  showSelectColumn: false,
  childrenProps: {
    rowKey: 'id',
    treeProp: {
      children: 'children'
    }
  },
  showFooter: false
}
