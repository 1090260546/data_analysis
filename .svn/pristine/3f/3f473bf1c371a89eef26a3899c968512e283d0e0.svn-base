type SettingComponent =
  | { component: 'input'; placeholder: string; default: string }
  | {
      component: 'inputnumber'
      placeholder: string
      min: number
      max: number
      default: number
    }
  | {
      component: 'colorPicker'
      default: [number, number, number, number]
    }
  | {
      component: 'radio'
      default: string
      values: Array<{ name: string; value: string }>
    }
  | {
      component: 'checkbox',
      valuePropName: 'checked'
      default: boolean
  } | {
      component: 'checkboxGroup'
      values: Array<{ label: string; value: string }>
      default: string[]
    }
  | {
      component: 'select'
      default: string
      values: Array<{ name: string; value: string }>
    }
  | {
      component: 'upload'
      title: string
      id: number
      action: string
      accept: string
      autoUpdate: boolean
      labelCol: number
      wrapperCol: number
    }

export type SettingItem = {
  name: string
  title: string
  default: string | number | boolean
  relatedItems: Array<{
    name: string,
    values: string[] | number[] | boolean[]
  }>
  labelCol?: number
  wrapperCol?: number
  span?: number
} & SettingComponent

export type SettingParam = {
  name: string
  title: string
  visible: boolean
  items: SettingItem[]
}

export type SlideLayerSetting = {
  name: string
  title: string
  visible: boolean
  params: SettingParam[]
}
