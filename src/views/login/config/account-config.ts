export const rules = {
  name: [
    {
      required: true,
      message: '请输入账户',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '用户名5-10个字母或数字'
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '密码必须3位以上的字母或数字'
    }
  ]
}
