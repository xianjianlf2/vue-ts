export const contentTableConfig = {
  title: '系统列表',
  propList: [
    { prop: 'name', label: '系统名称', minWidth: '100' },
    { prop: 'realname', label: '系统描述', minWidth: '100' },
    { prop: 'cellphone', label: '服务器地址', minWidth: '100' },
    { prop: 'enable', label: '状态', minWidth: '100', slotName: 'status' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '250',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '250',
      slotName: 'updateAt'
    },
    { label: '操作', minWidth: '120', slotName: 'handler' }
  ],

  showIndexColumn: true,
  showSelectColumn: true
}
