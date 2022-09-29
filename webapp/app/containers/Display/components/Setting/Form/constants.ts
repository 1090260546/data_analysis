import slide from 'assets/json/slideSettings/slide.json'
import chart from 'assets/json/slideSettings/chart.json'
import rectangle from 'assets/json/slideSettings/rectangle.json'
import label from 'assets/json/slideSettings/label.json'
import video from 'assets/json/slideSettings/video.json'
import timer from 'assets/json/slideSettings/timer.json'

export enum SecondaryGraphTypes {
  Rectangle = 20,
  Label = 21,
  Video = 22,
  Timer = 23
}

export enum GraphTypes {
  Slide,
  Chart,
  Secondary
}

export const slideSettings = {
  [GraphTypes.Slide]: slide,
  [GraphTypes.Chart]: chart,
  [SecondaryGraphTypes.Rectangle]: rectangle,
  [SecondaryGraphTypes.Label]: label,
  [SecondaryGraphTypes.Video]: video,
  [SecondaryGraphTypes.Timer]: timer
}
