import React, { useContext, useMemo, useCallback, useEffect } from 'react'

import Widget, { IPaginationParams } from 'containers/Widget/components/Widget'
import { LayerListContext, LayerContext } from '../util'
import { SlideContext } from 'containers/Display/components/Container'

const Chart: React.FC = () => {
  const { slideId } = useContext(SlideContext)
  const {
    currentDisplayWidgets,
    getWidgetViewModel,
    getChartData
  } = useContext(LayerListContext)
  const {
    layer: {
      id: layerId,
      widgetId,
      params: { polling, frequency }
    },
    layerInfo,
    operationInfo
  } = useContext(LayerContext)

  const widget = currentDisplayWidgets[widgetId]
  const { datasource, renderType, queryConditions, loading } = layerInfo
  const data = datasource.resultList || []

  const nativeQuery = useMemo(() => {
    let noAggregators = false
    const { chartStyles } = widget.config
    const { table } = chartStyles
    if (table) {
      noAggregators = table.withNoAggregators
    }
    return noAggregators
  }, [widget.config])

  const pagination = useMemo(() => {
    const { chartStyles } = widget.config
    const { table } = chartStyles
    if (!table) {
      return null
    }

    const { withPaging, pageSize } = table
    const pagination: IPaginationParams = {
      withPaging,
      pageSize: 0,
      pageNo: 0,
      totalCount: datasource.totalCount || 0
    }
    if (pagination.withPaging) {
      pagination.pageSize = datasource.pageSize || +pageSize
      pagination.pageNo = datasource.pageNo || 1
    }
    return pagination
  }, [widget.config, datasource.totalCount])

  useEffect(() => {
    if (renderType === 'rerender') {
      getChartData(
        'clear',
        slideId,
        layerId,
        widget,
        queryConditions,
        {
          pagination,
          nativeQuery
        }
      )
    }
  }, [])

  useEffect(() => {
    let timer: number
    if (!operationInfo && polling === 'true' && +frequency > 0) {
      timer = window.setInterval(() => {
        getChartData(
          'refresh',
          slideId,
          layerId,
          widget,
          queryConditions,
          {
            pagination,
            nativeQuery
          }
        )
      }, +frequency * 1000)
    }
    return () => {
      if (timer) {
        clearInterval(timer)
      }
    }
  }, [
    operationInfo,
    polling,
    frequency,
    getChartData,
    slideId,
    layerId,
    widgetId,
    queryConditions,
    pagination,
    nativeQuery
  ])

  const paginationChange = useCallback(
    (pageNo: number, pageSize: number, orders) => {
      const newPagination = {
        ...pagination,
        pageNo,
        pageSize
      }
      getChartData(
        'clear',
        slideId,
        layerId,
        widget,
        queryConditions,
        {
          pagination: newPagination,
          nativeQuery,
          orders
        }
      )
    },
    [
      slideId,
      layerId,
      widgetId,
      queryConditions,
      pagination,
      nativeQuery,
      getChartData
    ]
  )

  return (
    <Widget
      {...widget.config}
      data={data}
      loading={loading}
      pagination={pagination}
      renderType={renderType}
      model={getWidgetViewModel(widget.viewId, widgetId)}
      onPaginationChange={paginationChange}
    />
  )
}

export default Chart
