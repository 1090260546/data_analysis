import React from 'react'
import { TextStyles, ElementTypes, BlockAlignments } from '../../Element'

import TextStyleIcon from './TextStyleIcon'
import ElementIcon from './ElementIcon'
import ToolbarColor from './Color'
import { TextProperties } from '../../Element/constants'

const Format: React.FC = () => {
  return (
    <>
      <TextStyleIcon value={TextStyles.Bold} type="bold" />
      <TextStyleIcon value={TextStyles.Italic} type="italic" />
      <TextStyleIcon value={TextStyles.Underline} type="underline" />
      <TextStyleIcon value={TextStyles.StrikeThrough} type="strikethrough" />
      <TextStyleIcon value={TextStyles.Code} type="code" />

      <ElementIcon value={ElementTypes.BlockQuote} iconFont type="icon-quote" />
      <ElementIcon value={ElementTypes.NumberedList} type="ordered-list" />
      <ElementIcon value={ElementTypes.BulletedList} type="unordered-list" />

      <ToolbarColor type={TextProperties.Color} />
      <ToolbarColor type={TextProperties.BackgroundColor} />
    </>
  )
}

export default Format
