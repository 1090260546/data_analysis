import { IMigrationRecorder } from '.'
import { ILayerParams } from 'app/containers/Display/components/types'
import {
  migrationLabelRichTextContent,
  migrationLabelRichTextStyles
} from 'app/containers/Display/components/Layer/RichText/util'
import {
  slideSettings,
  SecondaryGraphTypes
} from 'app/containers/Display/components/Setting/Form/constants'
const slideSetting = slideSettings[SecondaryGraphTypes.Label]

interface IDisplayParamsMigrationRecorder extends IMigrationRecorder {
  recorders: {
    beta9 (params: ILayerParams): ILayerParams
  }
}

const displayParamsMigrationRecorder: IDisplayParamsMigrationRecorder = {
  versions: ['beta9'],
  recorders: {
    beta9 (params) {
      if (!params.hasOwnProperty('richText')) {
        const { fontStyles, textStyles } = migrationLabelRichTextStyles(params)
        const contentText = Reflect.get(params, 'contentText')

        const defaultSettingParams = slideSetting.params
          .reduce((pre, cur) => {
            return pre.concat(cur.items)
          }, [])
          .map((obj) => obj.name)

        Object.keys(params).forEach((key) => {
          if (!defaultSettingParams.includes(key)) {
            Reflect.deleteProperty(params, key)
          }
        })

        params.richText = migrationLabelRichTextContent(
          contentText,
          fontStyles,
          textStyles
        )
      }
      return params
    }
  }
}

export default displayParamsMigrationRecorder
