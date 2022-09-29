import React, { memo } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import DashboardActions from './actions'
import { makeSelectFullScreenPanelItemId } from './selectors'
import FullScreenPanelComponent from 'app/components/FullScreenPanel'
import {
  ILoadData,
  IDashboard,
  IDashboardItem
} from 'app/containers/Dashboard/types'
import { IWidgetFormed } from 'app/containers/Widget/types'
import { IShareFormedViews } from 'app/containers/View/types'
import { OnGetControlOptions } from 'app/components/Control/types'
import { ControlPanelTypes } from 'app/components/Control/constants'
import { IShareDashboardItemInfo } from './types'

interface IWrapperBaseProps {
  currentDashboard: IDashboard
  widgets: IWidgetFormed[]
  formedViews: IShareFormedViews
  currentItems: IDashboardItem[]
  currentItemsInfo: {
    [itemId: string]: IShareDashboardItemInfo
  }
  onLoadData: ILoadData
  onGetOptions: OnGetControlOptions
  onSearch: (
    type: ControlPanelTypes,
    relatedItems: number[],
    formValues?: object,
    itemId?: number
  ) => void
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
