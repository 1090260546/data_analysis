import {
  ReferenceType,
  ReferenceValueType,
  ReferenceLabelPosition
} from './constants'

export type IReference = IReferenceLine | IReferenceBand

export interface IReferenceLine {
  key: string
  type: ReferenceType.Line
  name: string
  data: IReferenceLineData
}

export interface IReferenceBand {
  key: string
  type: ReferenceType.Band
  name: string
  data: [IReferenceBandData, IReferenceBandData]
}

export interface IReferenceBaseData {
  metric: string
  type: ReferenceValueType
  value: number
}

export interface IReferenceLineData extends IReferenceBaseData {
  label: {
    visible: boolean
    position: ReferenceLabelPosition
    font: {
      size: string
      family: string
      // style: string
      // weight: string
      color: string
    }
  }
  line: {
    width: number
    type: string
    color: string
  }
}

export interface IReferenceBandData extends IReferenceBaseData {
  label?: {
    visible: boolean
    position: string
    font: {
      size: string
      family: string
      // style: string
      // weight: string
      color: string
    }
  }
  band?: {
    color: string
    border: {
      width: number
      type: string
      color: string
    }
  }
}
