import { ElementType, TextStyles, BlockAlignments } from '../Element'
import { TextProperties } from '../Element/constants'

export type ToolbarFormat =
  | TextStyles
  | TextProperties
  | BlockAlignments
  | ElementType
