import {
  getInitialPaginationAndNativeQuery,
  getLocalControlInitialValues
} from 'app/containers/Dashboard/util'
import { IShareDashboardItemInfo } from './types'
import { DashboardItemStatus } from './constants'
import { IControl } from 'app/components/Control/types'
import { ControlDefaultValueTypes } from 'app/components/Control/constants'
import { IWidgetFormed } from 'app/containers/Widget/types'
import { IShareFormedViews } from 'app/containers/View/types'

export function initDefaultValuesFromShareParams(
  controls: IControl[],
  shareParams: object
) {
  controls.forEach((control) => {
    const { name, type } = control
    if (shareParams) {
      const defaultValue = shareParams[name]
      if (defaultValue && defaultValue.length) {
        control.defaultValueType = ControlDefaultValueTypes.Fixed
        control.defaultValue =
          Array.isArray(defaultValue) && defaultValue.length
            ? defaultValue.map((val) => decodeURI(val))
            : decodeURI(defaultValue)
      }
    }
  })
}

export function getShareInitialItemInfo(
  widget: IWidgetFormed,
  formedViews: IShareFormedViews
): IShareDashboardItemInfo {
  return {
    status: DashboardItemStatus.Pending,
    datasource: {
      columns: [],
      pageNo: 0,
      pageSize: 0,
      totalCount: 0,
      resultList: []
    },
    loading: false,
    queryConditions: {
      linkageFilters: [],
      globalFilters: [],
      linkageVariables: [],
      globalVariables: [],
      drillpathInstance: [],
      ...getLocalControlInitialValues(widget.config.controls, formedViews),
      ...getInitialPaginationAndNativeQuery(widget)
    },
    downloadCsvLoading: false,
    interactId: '',
    renderType: 'rerender',
    selectedItems: [],
    errorMessage: ''
  }
}
