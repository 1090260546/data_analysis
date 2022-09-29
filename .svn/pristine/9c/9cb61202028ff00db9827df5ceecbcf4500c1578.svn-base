
import React from 'react'
import classnames from 'classnames'
import utilStyles from 'app/assets/less/util.less'
import styles from './datadrill.less'
import { IDataDrillProps, IEnhancerPanel } from './types'
import DataDrill from './Panel'
import {
  DrillableChart,
  DrillableChartNeedNotFilter
} from 'containers/Widget/config/chart/DrillableChart'

function enhancePanel<T>() {
  return (WrapperComponent) => {
    class EnhancerPanel extends React.PureComponent<T & IEnhancerPanel, {}> {
      private isDrillableChart() {
        const { chartStyle } = this.props
        return DrillableChart.some((drillable) => drillable === chartStyle)
      }
      private isDrillableChartNeedNotFilter() {
        const { chartStyle } = this.props
        return DrillableChartNeedNotFilter.some(
          (drillable) => drillable === chartStyle
        )
      }
      private hide() {
        let isHide = true
        const { isSelectedGroup, isSelectedfilter } = this.props
        const isDrillableChart = this.isDrillableChart()
        const isDrillableChartNeedNotFilter = this.isDrillableChartNeedNotFilter()
        if (!isDrillableChart) {
          isHide = true
          return isHide
        }

        if (!(isSelectedfilter && isSelectedfilter.length === 0)) {
          isHide = false
          return isHide
        }

        if (!(isSelectedGroup && isSelectedGroup.length === 0)) {
          isHide = false
          return isHide
        }

        if (isDrillableChartNeedNotFilter) {
          isHide = false
          return isHide
        }

        return isHide
      }

      public render() {
        const dataDrillPanelClass = classnames({
          [styles.dataDrillPanel]: true,
          [utilStyles.hide]: this.hide()
        })

        return (
          <div className={dataDrillPanelClass}>
            <WrapperComponent {...this.props} />
          </div>
        )
      }
    }
    return EnhancerPanel
  }
}

export default enhancePanel<IDataDrillProps>()(DataDrill)
