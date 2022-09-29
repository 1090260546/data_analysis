export { GraphTypes, SecondaryGraphTypes, slideSettings, DefaultDisplayParams } from './Setting'

export enum DisplayOperations {
  AddSlide = 1,
  Preview,
  Share
}

export enum SlideOperations {
  AddGraph = 11
}

export enum LayerOperations {
  MoveUp = 111,
  MoveDown,
  MoveLeft,
  MoveRight,

  BringToUpper,
  BringToFront,
  SendToNext,
  SendToBottom,

  Delete,
  Copy,
  Paste,

  // @TODO undo redo with slides
  Undo,
  Redo
}

export enum LayerAlignmentTypes {
  Left,
  HorizontalCenter,
  VerticalCenter,
  Right,
  Top,
  Bottom
}

export const LayerCommands = [
  {
    title: '上移一层',
    icon: 'icon-bring-upper',
    operation: LayerOperations.BringToUpper
  },
  {
    title: '下移一层',
    icon: 'icon-send-next',
    operation: LayerOperations.SendToNext
  },
  {
    title: '置顶',
    icon: 'icon-bring-front',
    operation: LayerOperations.BringToFront
  },
  {
    title: '置底',
    icon: 'icon-send-bottom',
    operation: LayerOperations.SendToBottom
  }
]
