import { IDisplayParams } from 'containers/Viz/types'

export const DisplayDefaultGridSize = 1

export const DefaultDisplayParams: IDisplayParams = {
  autoPlay: true,
  autoSlide: 10,
  transitionStyle: 'none',
  transitionSpeed: 'default',
  grid: [DisplayDefaultGridSize, DisplayDefaultGridSize]
}
