import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { makeSelectDisplay, makeSelectSlidesCount } from '../selectors'

import Reveal from 'reveal.js'
import 'reveal.js/dist/reveal.css'
import RevealZoom from 'reveal.js/plugin/zoom/plugin'

import { DefaultDisplayParams } from 'containers/Display/constants'
import Display from './Display'

const ShareDisplayReveal: React.FC = () => {
  const {
    config: { displayParams }
  } = useSelector(makeSelectDisplay())
  const { autoPlay, autoSlide, transitionStyle, transitionSpeed } =
    displayParams || DefaultDisplayParams

  const slidesCount = useSelector(makeSelectSlidesCount())
  const slideNumberParam = new URLSearchParams(window.location.search).get('p')
  const slideNumber = +slideNumberParam
  useEffect(() => {
    Reveal.initialize({
      hash: false,
      history: false,

      controls: true,
      controlsLayout: 'edges',
      controlsTutorial: false,
      progress: false,
      loop: true,

      width: '100%',
      height: '100%',
      margin: 0,
      minScale: 1,
      maxScale: 1,

      autoSlide:
        (slideNumber > 0 && slideNumber < slidesCount) || autoPlay === false
          ? 0
          : autoSlide * 1000,
      transition: transitionStyle,
      transitionSpeed,

      viewDistance: 100,

      plugins: [RevealZoom]
    })
  }, [])

  return (
    <div className="reveal">
      <div className="slides">
        <Display targetSlideNumber={slideNumber} />
      </div>
    </div>
  )
}

export default ShareDisplayReveal
