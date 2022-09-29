

import React from 'react'
import { tuple } from 'utils/util'

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K >>

const IconStatus = tuple('checked', 'unChecked', 'disabled')
const ISizeType = tuple('small', 'middle', 'large')

type iconFontClassName = string

interface IBaseEnhanceState {
  iStatus: typeof IconStatus[number]
  form: React.ReactNode | iconFontClassName
}

export interface IBaseEnhanceIconProps {
  state?: IBaseEnhanceState
  style?: React.CSSProperties
  size?: typeof ISizeType[number]
  onClick?: React.MouseEventHandler<HTMLElement>
}

export interface ItemToolbarProps {
  children?: React.ReactNode
}

export interface ITags {
  color?: string
  text?: string
}

export interface IProjectItem {
  backgroundImg?: string
  tags?: ITags[]
  style?: React.CSSProperties
  children?: React.ReactNode
  title?: React.ReactNode | string
  description?: React.ReactNode | string
  onClick?: React.MouseEventHandler<HTMLElement>
}


