import controlMigrationRecorder from './control'
import { IMigrationRecorder } from '.'
import { IDashboardConfig } from 'app/containers/Dashboard/types'
import { ControlQueryMode } from 'app/components/Control/constants'

interface IDashboardConfigMigrationRecorder extends IMigrationRecorder {
  recorders: {
    beta5(config: IDashboardConfig): IDashboardConfig
    beta9(config: IDashboardConfig, options?): IDashboardConfig
  }
}

const dashboardConfigMigrationRecorder: IDashboardConfigMigrationRecorder = {
  versions: ['beta5', 'beta9'],
  recorders: {
    beta5(config) {
      return {
        ...config,
        filters: (config.filters || []).map((control) =>
          controlMigrationRecorder.beta5(control)
        ),
        linkages: config.linkages || [],
        queryMode:
          config.queryMode === void 0
            ? ControlQueryMode.Immediately
            : config.queryMode
      }
    },
    beta9(config, options) {
      return {
        ...config,
        filters: (config.filters || []).map((control) =>
          controlMigrationRecorder.beta9(control, options)
        )
      }
    }
  }
}

export default dashboardConfigMigrationRecorder
