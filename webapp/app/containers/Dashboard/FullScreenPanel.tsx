import React, { memo } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import DashboardActions from './actions'
import { makeSelectFullScreenPanelItemId } from './selectors'
import FullScreenPanelComponent from 'components/FullScreenPanel'
import {
  ILoadData,
  IDashboard,
  IDashboardItem,
  IDashboardItemInfo
} from '../../containers/Dashboard/types'
import { IWidgetFormed } from 'app/containers/Widget/types'
import { IFormedViews } from 'app/containers/View/types'
import { OnGetControlOptions } from 'app/components/Control/types'
import { ControlPanelTypes } from 'app/components/Control/constants'

interface IWrapperBaseProps {
  currentDashboard: IDashboard
  widgets: IWidgetFormed[]
  formedViews: IFormedViews
  currentItems: IDashboardItem[]
  currentItemsInfo: {
    [itemId: string]: IDashboardItemInfo
  }
  onLoadData: ILoadData
  onGetOptions: OnGetControlOptions
  onSearch: (
    type: ControlPanelTypes,
    relatedItems: number[],
    formValues?: object,
    itemId?: number
  ) => void
  onMonitoredSearchDataAction?: () => void
}

type MappedStates = ReturnType<typeof mapStateToProps>
type MappedDispatches = ReturnType<typeof mapDispatchToProps>
type IWrapperProps = IWrapperBaseProps & MappedStates & MappedDispatches

const FullScreenPanel: React.FC<IWrapperProps> = memo(
  (props) => {
    return props.itemId && <FullScreenPanelComponent {...props} />
  }
)

const mapStateToProps = createStructuredSelector({
  itemId: makeSelectFullScreenPanelItemId()
})

function mapDispatchToProps(dispatch) {
  return {
    onSetFullScreenPanelItemId: (itemId: number) =>
      dispatch(DashboardActions.setFullScreenPanelItemId(itemId))
  }
}

export default connect<MappedStates, MappedDispatches, IWrapperBaseProps>(
  mapStateToProps,
  mapDispatchToProps
)(FullScreenPanel)
