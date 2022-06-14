export const contentTableConfig = {
  title: '菜单列表',
  propList: [
    { prop: 'name', label: '菜单名称', minWidth: '100' },
    { prop: 'type', label: '类型', minWidth: '100' },
    { prop: 'url', label: '菜单url', minWidth: '100' },
    { prop: 'icon', label: '菜单icon', minWidth: '100' },
    { prop: 'permission', label: '按钮权限', minWidth: '100' },
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
  // 显示索引和选择
  showIndexColumn: false,
  showSelectColumn: false,
  showFooter: false,
  // 树形结构展开
  childrenProps: {
    rowKey: 'id',
    treeProps: { children: 'children' }
  }
}
