import React, { useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { makeSelectLayerIdsBySlide } from '../selectors'

import {
  SlideContainer,
  SlideContent,
  SlideBackground,
  DisplayContainer
} from '../components/Container'
import { ISlideParams } from '../../Viz/types'
import PreviewLayer from './Layer'

interface ISlideProps {
  slideId: number
  slideParams: ISlideParams
}

const Slide: React.FC<ISlideProps> = (props) => {
  const { slideId, slideParams } = props
  const selectLayerIdsBySlide = useMemo(makeSelectLayerIdsBySlide, [])
  const layerIds = useSelector((state) => selectLayerIdsBySlide(state, slideId))
  const {
    transitionGlobal,
    transitionStyleIn,
    transitionStyleOut,
    transitionSpeed,
    autoSlideGlobal,
    autoPlay,
    autoSlide
  } = slideParams
  const sectionProps = {}
  if (transitionGlobal === false) {
    sectionProps[
      'data-transition'
    ] = `${transitionStyleIn} ${transitionStyleOut}`
    sectionProps['data-transition-speed'] = transitionSpeed
  }
  if (autoSlideGlobal === false) {
    sectionProps['data-autoslide'] = autoPlay !== false ? autoSlide * 1000 : 0
  }

  return (
    <section {...sectionProps} className="display-preview-slide">
      <DisplayContainer>
        <SlideContainer slideId={slideId} slideParams={slideParams}>
          <SlideBackground padding={0} fullscreen>
            <SlideContent>
              {layerIds.map((id) => (
                <PreviewLayer key={id} id={id} />
              ))}
            </SlideContent>
          </SlideBackground>
        </SlideContainer>
      </DisplayContainer>
    </section>
  )
}

export default Slide
