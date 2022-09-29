import { IMigrationRecorder } from '.'
import {
  IScheduleMailConfig,
  IScheduleWeChatWorkConfig
} from 'app/containers/Schedule/components/types'

interface IScheduleConfigMigrationRecorder extends IMigrationRecorder {
  recorders: {
    beta9(config: IScheduleMailConfig): IScheduleMailConfig
    beta9(config: IScheduleWeChatWorkConfig): IScheduleWeChatWorkConfig
  }
}

const scheduleConfigMigrationRecorder: IScheduleConfigMigrationRecorder = {
  versions: ['beta9'],
  recorders: {
    beta9(config) {
      return {
        ...config,
        content: config.content === void 0 ? '' : config.content,
        setCronExpressionManually:
          config.setCronExpressionManually === void 0
            ? false
            : config.setCronExpressionManually
      }
    }
  }
}

export default scheduleConfigMigrationRecorder
