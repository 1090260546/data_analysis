import React, { useContext, useMemo, PropsWithChildren } from 'react'

import { ContainerContext } from '../ContainerContext'
import { SlideContext } from './SlideContext'

const SlideContent: React.RefForwardingComponent<
  HTMLDivElement,
  PropsWithChildren<{}>
> = (props, ref) => {
  const { slideParams } = useContext(SlideContext)
  const { scale, slideTranslate } = useContext(ContainerContext)

  const slideStyle = useMemo(() => {
    const [translateX, translateY] = slideTranslate
    const cssStyle: React.CSSProperties = {
      width: `${slideParams.width}px`,
      height: `${slideParams.height}px`,
      transform: `translate(${translateX}%, ${translateY}%) scale(${
        scale[0]
      }, ${scale[1]})`
    }

    const backgroundStyle: React.CSSProperties = {
      backgroundSize: 'cover'
    }
    const { backgroundColor, backgroundImage, scaleMode } = slideParams
    if (backgroundColor) {
      const rgb = backgroundColor.join()
      backgroundStyle.backgroundColor = `rgba(${rgb})`
    }
    if (backgroundImage) {
      backgroundStyle.backgroundImage = `url("${backgroundImage}")`
    }
    // to adjust full screen style in mobile
    const setStyleToBody =
      scaleMode === 'scaleWidth' && window.screen.width <= 1024
    Object.entries(backgroundStyle).forEach(([key, value]) => {
      setStyleToBody
        ? (document.body.style[key] = value)
        : (cssStyle[key] = value)
    })

    return cssStyle
  }, [slideParams, scale, slideTranslate])

  return (
    <div ref={ref} className="display-slide" style={slideStyle}>
      {props.children}
    </div>
  )
}

export default React.forwardRef(SlideContent)
