import registerProperties from './register-properties'

export function globalRegister(app: any) {
  app.use(registerProperties)
}
