import React, { PureComponent, GetDerivedStateFromProps } from 'react'
import { Select, InputNumber, Input } from 'antd'
import { IRelativeDate } from './types'
import {
  RelativeDateType,
  RelativeDateTypeLabels,
  RelativeDateValueType,
  RelativeDateValueTypeLables
} from './constants'
import { getDefaultRelativeDate } from './util'
const Option = Select.Option
const InputGroup = Input.Group

interface IRelativeDatePickerProps {
  value?: IRelativeDate
  onChange?: (value: IRelativeDate) => void
}

interface IRelativeDatePickerStates {
  value: IRelativeDate
}

class IRelativeDatePicker extends PureComponent<
  IRelativeDatePickerProps,
  IRelativeDatePickerStates
> {
  public state: IRelativeDatePickerStates = {
    value: getDefaultRelativeDate()
  }

  public static getDerivedStateFromProps: GetDerivedStateFromProps<
    IRelativeDatePickerProps,
    IRelativeDatePickerStates
  > = (props, state) => {
    const { type, valueType, value } = state.value
    return {
      value: {
        type: props.value?.type || type,
        valueType: props.value?.valueType || valueType,
        value: props.value?.value || value
      }
    }
  }

  private changeType = (type) => {
    const { onChange } = this.props
    const nextValueState = { ...this.state.value, type }
    this.setState({
      value: nextValueState
    })
    if (onChange) {
      onChange(nextValueState)
    }
  }

  private changeValueType = (valueType) => {
    const { onChange } = this.props
    const valueState = this.state.value
    const nextValueState = {
      ...valueState,
      valueType,
      value:
        valueType !== RelativeDateValueType.Current
          ? valueState.value === 0
            ? 1
            : valueState.value
          : 0
    }

    this.setState({
      value: nextValueState
    })
    if (onChange) {
      onChange(nextValueState)
    }
  }

  private changeValue = (val) => {
    const { onChange } = this.props
    const nextValueState = { ...this.state.value, value: val }
    this.setState({
      value: nextValueState
    })
    if (onChange) {
      onChange(nextValueState)
    }
  }

  public render() {
    const { type, valueType, value } = this.state.value

    const relativeDateTypeOptions = Object.entries(RelativeDateTypeLabels).map(
      ([val, label]) => (
        <Option key={val} value={val}>
          {label}
        </Option>
      )
    )
    const relativeDateValueTypeOptions = Object.entries(
      RelativeDateValueTypeLables
    ).map(([val, label]) => (
      <Option key={val} value={val}>
        {val === RelativeDateValueType.Current ? label[type] : label}
      </Option>
    ))

    const selectStyle = {
      width: valueType !== RelativeDateValueType.Current ? '33%' : '50%'
    }
    return (
      <InputGroup compact>
        <Select
          dropdownMatchSelectWidth={false}
          value={valueType}
          onChange={this.changeValueType}
          style={selectStyle}
        >
          {relativeDateValueTypeOptions}
        </Select>
        {valueType !== RelativeDateValueType.Current && (
          <InputNumber
            min={1}
            precision={0}
            value={value}
            onChange={this.changeValue}
            style={{ width: '34%' }}
          />
        )}
        <Select
          dropdownMatchSelectWidth={false}
          value={type}
          onChange={this.changeType}
          style={selectStyle}
        >
          {relativeDateTypeOptions}
        </Select>
      </InputGroup>
    )
  }
}

export default IRelativeDatePicker
