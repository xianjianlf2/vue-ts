import { formatUtcString } from '@/utils/date-format'

// 全局过滤器
export default function registerProperties(app: any) {
  app.config.globalProperties.$filters = {
    formatTime(value: string) {
      return formatUtcString(value)
    }
  }
}
