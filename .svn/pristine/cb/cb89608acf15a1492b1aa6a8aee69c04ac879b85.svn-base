import React, { useMemo, useCallback } from 'react'

import { Dropdown, Menu, Icon } from 'antd'
import { useSlate } from 'slate-react'
const MenuItem = Menu.Item

interface IFieldProps {
  mapFields: object
  fieldBoundaries: [string, string]
}

const Field: React.FC<IFieldProps> = (props) => {
  const editor = useSlate()
  const { mapFields, fieldBoundaries } = props

  const selectField = useCallback((name: string) => {
    const [prefix, suffix] = fieldBoundaries
    editor.insertNode({ text: `${prefix}${name}${suffix}` })
  }, [])

  const menuField = useMemo(
    () =>
      Object.keys(mapFields).length ? (
        <Menu>
          {Object.keys(mapFields).map((fieldName) => (
            <MenuItem key={fieldName}>
              <FieldItem name={fieldName} onSelect={selectField} />
            </MenuItem>
          ))}
        </Menu>
      ) : (
        <Menu>
          <MenuItem>暂无可用字段</MenuItem>
        </Menu>
      ),
    [mapFields]
  )

  return (
    <Dropdown trigger={['click']} overlay={menuField}>
      <Icon type="form" />
    </Dropdown>
  )
}

interface IFieldItemProps {
  name: string
  onSelect: (name: string) => void
}
const FieldItem: React.FC<IFieldItemProps> = (props) => {
  const { name, onSelect } = props
  const select = useCallback(() => {
    onSelect(name)
  }, [name, onSelect])
  return (
    <a href="javascript:void(0)" onClick={select}>
      {name}
    </a>
  )
}

export default Field
