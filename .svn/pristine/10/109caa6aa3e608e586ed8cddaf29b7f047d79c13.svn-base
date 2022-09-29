import React, { memo, useMemo, useCallback } from 'react'
import Widget from 'containers/Widget/components/Widget'
import { ILoadData, IDashboardItemInfo } from '../../containers/Dashboard/types'
import { IShareDashboardItemInfo } from 'share/containers/Dashboard/types'
import { IWidgetFormed } from 'app/containers/Widget/types'
import { IViewModel } from 'app/containers/View/types'
import styles from './FullScreenPanel.less'

interface IFullScreenChartProps {
  itemId: number
  widget: IWidgetFormed
  info: IDashboardItemInfo | IShareDashboardItemInfo
  model: IViewModel
  onLoadData: ILoadData
}

const FullScreenChart: React.FC<IFullScreenChartProps> = memo(
  ({
    itemId,
    widget,
    info,
    model,
    onLoadData
  }) => {
    const { queryVariables, pagination, renderType, data, loading } = useMemo(() => {
      const { renderType, datasource, loading, queryConditions } = info
      const { variables, linkageVariables, globalVariables, pagination } = queryConditions
      return {
        queryVariables: [
          ...variables,
          ...linkageVariables,
          ...globalVariables
        ].reduce((obj, { name, value }) => {
          obj[`$${name}$`] = value
          return obj
        }, {}),
        pagination,
        renderType,
        data: datasource.resultList,
        loading
      }
    }, [info])

    const paginationChange = useCallback(
      (pageNo: number, pageSize: number, orders) => {
        onLoadData('clear', itemId, {
          pagination: {
            ...info.queryConditions.pagination,
            pageNo,
            pageSize
          },
          orders
        })
      },
      [itemId, widget]
    )

    return (
      <div className={styles.chartWrapper}>
        <Widget
          {...widget.config}
          renderType={loading ? 'loading' : renderType}
          data={data}
          model={model}
          pagination={pagination}
          queryVariables={queryVariables}
          onPaginationChange={paginationChange}
        />
      </div>
    )
  }
)

export default FullScreenChart
