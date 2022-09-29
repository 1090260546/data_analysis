import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import ControlPanelComponent from 'app/components/Control/Panel'
import ControlActions from './actions'
const { setLocalControlPanelFormValues } = ControlActions
import {
  makeSelectLocalControlPanelFormValues,
  makeSelectLocalControlPanelSelectOptions
} from './selectors'
import { OnGetControlOptions } from 'app/components/Control/types'
import {
  ControlPanelTypes,
  ControlPanelLayoutTypes
} from 'app/components/Control/constants'
import { IWidgetFormed } from 'app/containers/Widget/types'
import { IFormedViews, IShareFormedViews } from '../View/types'

interface ILocalControlPanelBaseProps {
  formedViews: IFormedViews | IShareFormedViews
  itemId: number
  widget: IWidgetFormed
  layoutType: ControlPanelLayoutTypes
  onGetOptions: OnGetControlOptions
  onSearch: (
    type: ControlPanelTypes,
    relatedItems: number[],
    formValues?: object,
    itemId?: number
  ) => void
  onMonitoredSearchDataAction?: () => void
}

type MappedStates = ReturnType<ReturnType<typeof makeMapStateToProps>>
type MappedDispatches = ReturnType<typeof mapDispatchToProps>

type ILocalControlPanelProps = ILocalControlPanelBaseProps &
  MappedStates &
  MappedDispatches

class LocalControlPanel extends PureComponent<ILocalControlPanelProps, {}> {
  private search = (formValues: object) => {
    const { itemId, onSearch, onMonitoredSearchDataAction } = this.props
    onSearch(ControlPanelTypes.Local, [itemId], formValues, itemId)
    if (onMonitoredSearchDataAction) {
      onMonitoredSearchDataAction()
    }
  }

  private change = (formValues: object) => {
    const { itemId, onSetLocalControlPanelFormValues } = this.props
    onSetLocalControlPanelFormValues(formValues, itemId)
  }

  public render() {
    const {
      formedViews,
      itemId,
      widget,
      layoutType,
      formValues,
      selectOptions,
      onGetOptions
    } = this.props
    return (
      !!widget.config.controls.length && (
        <ControlPanelComponent
          controls={widget.config.controls}
          formedViews={formedViews}
          items={itemId.toString()}
          type={ControlPanelTypes.Local}
          layoutType={layoutType}
          reload={false}
          viewId={widget.viewId}
          queryMode={widget.config.queryMode}
          formValues={formValues}
          mapOptions={selectOptions}
          onGetOptions={onGetOptions}
          onChange={this.change}
          onSearch={this.search}
        />
      )
    )
  }
}
function makeMapStateToProps() {
  const localControlPanelFormValuesSelector = makeSelectLocalControlPanelFormValues()
  const localControlPanelSelectOptionsSelector = makeSelectLocalControlPanelSelectOptions()
  const mapStateToProps = (state, props) => {
    return {
      formValues: localControlPanelFormValuesSelector(state, props.itemId),
      selectOptions: localControlPanelSelectOptionsSelector(state, props.itemId)
    }
  }
  return mapStateToProps
}

function mapDispatchToProps(dispatch) {
  return {
    onSetLocalControlPanelFormValues: (values: object, itemId: number) =>
      dispatch(setLocalControlPanelFormValues(values, itemId))
  }
}

export default connect<
  MappedStates,
  MappedDispatches,
  ILocalControlPanelBaseProps
>(
  makeMapStateToProps,
  mapDispatchToProps
)(LocalControlPanel)
