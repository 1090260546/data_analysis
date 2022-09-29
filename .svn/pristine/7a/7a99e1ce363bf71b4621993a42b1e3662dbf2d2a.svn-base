import React, {
  PureComponent,
  GetDerivedStateFromProps,
  ChangeEvent
} from 'react'
import { Input, Select } from 'antd'
import { IControl, IControlCondition } from '../../types'
import { getOperatorOptions } from '../../util'
import OperatorTypes, { OperatorTypesLocale } from 'app/utils/operatorTypes'
const InputGroup = Input.Group
const Option = Select.Option

interface IConditionProps {
  controls: IControl[]
  value?: IControlCondition
  onChange?: (value: IControlCondition) => void
}

interface IConditionStates {
  operatorOptions: OperatorTypes[]
  previousValue: IControlCondition
}

class Condition extends PureComponent<IConditionProps, IConditionStates> {
  public state: IConditionStates = {
    operatorOptions: [],
    previousValue: void 0
  }

  public static getDerivedStateFromProps: GetDerivedStateFromProps<
    IConditionProps,
    IConditionStates
  > = (props, state) => {
    const { controls, value } = props
    let nextState: Partial<IConditionStates> = {}
    if (props.value !== state.previousValue) {
      nextState = { previousValue: props.value }
    }
    if (value?.control && value?.control !== state.previousValue?.control) {
      const control = controls.find((c) => c.key === value.control)
      if (control) {
        nextState = {
          ...nextState,
          operatorOptions: getOperatorOptions(control.type, control.multiple)
        }
      }
    }
    return nextState
  }

  private controlChange = (val) => {
    const { controls, value, onChange } = this.props
    const currentControlKey = value?.control
    let operator = value?.operator
    if (currentControlKey && val) {
      const currentControl = controls.find((c) => c.key === currentControlKey)
      const selectedControl = controls.find((c) => c.key === val)
      if (
        currentControl &&
        !!currentControl.multiple !== !!selectedControl.multiple
      ) {
        operator = void 0
      }
    }
    onChange({ ...value, control: val, operator })
  }

  private operatorChange = (val) => {
    const { value, onChange } = this.props
    onChange({ ...value, operator: val })
  }

  private valueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, onChange } = this.props
    onChange({ ...value, value: e.target.value })
  }

  public render() {
    const { controls, value } = this.props
    const { operatorOptions } = this.state
    const controlKey = value?.control
    const operator = value?.operator
    const conditionValue = value?.value

    return (
      <InputGroup compact>
        <Select
          placeholder="关联控件"
          value={controlKey}
          dropdownMatchSelectWidth={false}
          style={{ width: '40%' }}
          onChange={this.controlChange}
          allowClear
        >
          {controls.map(({ key, name }) => (
            <Option key={key} value={key}>
              {name}
            </Option>
          ))}
        </Select>
        <Select
          placeholder="关系"
          value={operator}
          dropdownMatchSelectWidth={false}
          style={{ width: '30%' }}
          onChange={this.operatorChange}
          allowClear
        >
          {operatorOptions.map((o) => (
            <Option key={o} value={o}>
              {OperatorTypesLocale[o]}
            </Option>
          ))}
        </Select>
        <Input
          placeholder="值"
          value={conditionValue}
          style={{ width: '30%' }}
          onChange={this.valueChange}
        />
      </InputGroup>
    )
  }
}

export default Condition
