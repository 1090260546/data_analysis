export enum HeadingElementTypes {
  HeadingOne = 'heading-one',
  HeadingTwo = 'heading-two',
  HeadingThree = 'heading-three',
  HeadingFour = 'heading-four',
  HeadingFive = 'heading-five',
  HeadingSix = 'heading-six',
  HeadingNone = 'heading-none'
}

export enum ListElementTypes {
  BulletedList = 'bulleted-list',
  NumberedList = 'numbered-list',
  ListItem = 'list-item'
}

export enum MediaElementTypes {
  Image = 'image'
}

export enum AnimationElementTypes {
  Marquee = 'marquee'
}

export enum TableElementTypes {
  Table = 'table',
  TableRow = 'table-row',
  TableCell = 'table-cell'
}

export enum BaseElementTypes {
  Paragraph = 'paragraph',
  Code = 'code',
  BlockQuote = 'block-quote',
  Link = 'link'
}

export const ElementTypes = {
  ...BaseElementTypes,
  ...HeadingElementTypes,
  ...MediaElementTypes,
  ...AnimationElementTypes,
  ...TableElementTypes,
  ...ListElementTypes
}

export type ElementType =
  | BaseElementTypes
  | HeadingElementTypes
  | MediaElementTypes
  | AnimationElementTypes
  | TableElementTypes
  | ListElementTypes

export enum TextStyles {
  Bold = 'bold',
  Italic = 'italic',
  Underline = 'underline',
  StrikeThrough = 'strike-through',
  Code = 'code'
}

export enum BlockAlignments {
  AlignLeft = 'left',
  AlignCenter = 'center',
  AlignRight = 'right'
}

export enum BlockProperties {
  TextAlign = 'textAlign'
}

export enum TextProperties {
  FontFamily = 'fontFamily',
  FontSize = 'fontSize',
  Color = 'color',
  BackgroundColor = 'backgroundColor'
}

export const ElementTags: {
  [key: string]: (
    el: HTMLElement
  ) => {
    type: ElementType
    url?: string
    textAlign?: string
  }
} = {
  A: (el) => ({ type: ElementTypes.Link, url: el.getAttribute('href') }),
  BLOCKQUOTE: () => ({ type: ElementTypes.BlockQuote }),
  H1: () => ({ type: ElementTypes.HeadingOne }),
  H2: () => ({ type: ElementTypes.HeadingTwo }),
  H3: () => ({ type: ElementTypes.HeadingThree }),
  H4: () => ({ type: ElementTypes.HeadingFour }),
  H5: () => ({ type: ElementTypes.HeadingFive }),
  H6: () => ({ type: ElementTypes.HeadingSix }),
  IMG: (el) => ({
    type: ElementTypes.Image,
    url: el.getAttribute('src'),
    width: el.getAttribute('width')
  }),
  LI: () => ({ type: ElementTypes.ListItem }),
  OL: () => ({ type: ElementTypes.NumberedList }),
  UL: () => ({ type: ElementTypes.BulletedList }),
  P: () => {
    return { type: ElementTypes.Paragraph }
  },
  PRE: () => ({ type: ElementTypes.Code }),
  TABLE: () => ({ type: ElementTypes.Table }),
  TR: () => ({ type: ElementTypes.TableRow }),
  TD: () => ({ type: ElementTypes.TableCell })
}

export const TextTags: {
  [key: string]: () => { [key in TextStyles]?: boolean } & {
    fontSize?: number
    color?: string
    backgroundColor?: string
  }
} = {
  CODE: () => ({ [TextStyles.Code]: true }),
  DEL: () => ({ [TextStyles.StrikeThrough]: true }),
  EM: () => ({ [TextStyles.Italic]: true }),
  I: () => ({ [TextStyles.Italic]: true }),
  S: () => ({ [TextStyles.StrikeThrough]: true }),
  STRONG: () => ({ [TextStyles.Bold]: true }),
  U: () => ({ [TextStyles.Underline]: true }),
  SPAN: () => ({})
}
