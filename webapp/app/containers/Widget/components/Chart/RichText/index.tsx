import React, { useMemo, useCallback } from 'react'

import { RichTextNode } from 'components/RichText'
import { IChartProps } from '..'
import { decodeMetricName } from '../../util'
import { getFormattedValue } from '../../Config/Format'
import { FieldBoundaries, FieldRegx } from './constants'

import Editor from './Editor'
import Preview from './Preview'

const ChartRichText: React.FC<IChartProps> = (props) => {
  const {
    editing,
    data,
    cols,
    rows,
    metrics,
    chartStyles,
    onChartStylesChange
  } = props
  const { content } = chartStyles.richText

  const mapFields = useMemo(() => {
    let map = cols.concat(rows).reduce((obj, field) => {
      obj[field.name] = {
        name: field.name,
        field: field.field,
        format: field.format
      }
      return obj
    }, {})
    map = metrics.reduce((obj, field) => {
      const name = `${field.agg}(${decodeMetricName(field.name)})`
      obj[name] = {
        name,
        field: field.field,
        format: field.format
      }
      return obj
    }, map)
    return map
  }, [cols, rows, metrics])

  const formatText = useCallback(
    (text: string) => {
      if (!text.length) {
        return text
      }
      const formattedText = text.replace(FieldRegx, (_, p1: string) => {
        if (!data.length || data[0][p1] === null) {
          return ''
        }
        let text = data.map((item) => item[p1])
        const config = mapFields[p1]
        if (config) {
          text = text.map((item) => getFormattedValue(item, config.format))
        }
        return text.join(', ')
      })
      return formattedText
    },
    [data, mapFields]
  )

  const editorChange = useCallback(
    (updatedContent: RichTextNode[]) => {
      if (updatedContent === content) {
        return
      }
      onChartStylesChange(['richText', 'content'], updatedContent)
    },
    [content, onChartStylesChange]
  )

  return (
    <>
      {!editing ? (
        <Preview key="preview" content={content} onFormatText={formatText} />
      ) : (
        <Editor
          key="editor"
          content={content}
          mapFields={mapFields}
          fieldBoundaries={FieldBoundaries}
          onChange={editorChange}
          onFormatText={formatText}
        />
      )}
    </>
  )
}

export default ChartRichText
