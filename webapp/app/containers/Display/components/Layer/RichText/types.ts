export interface IEditorSelection {
  readonly anchorNode: Node | null
  readonly anchorOffset: number
  readonly focusNode: Node | null
  readonly focusOffset: number
  readonly isCollapsed: boolean
  readonly rangeCount: number
  readonly type: string
  addRange (range: Range): void
  collapse (node: Node | null, offset?: number): void
  collapseToEnd (): void
  collapseToStart (): void
  containsNode (node: Node, allowPartialContainment?: boolean): boolean
  deleteFromDocument (): void
  empty (): void
  extend (node: Node, offset?: number): void
  getRangeAt (index: number): Range
  removeAllRanges (): void
  removeRange (range: Range): void
  selectAllChildren (node: Node): void
  setBaseAndExtent (
    anchorNode: Node,
    anchorOffset: number,
    focusNode: Node,
    focusOffset: number
  ): void
  setPosition (node: Node | null, offset?: number): void
  toString (): string
}

export interface IEditorContent {
  content: IEditorContentItem[]
}

export interface IEditorContentItem
  extends IElementTextStyles {
  type: string
  children: IEditorContentChild[]
}

export interface IEditorContentChild
  extends IElementFontStyles {
  text: string
}

export interface IElementFontStyles {
  fontSize: number
  color: string
  fontFamily: string
  fontWeight: number | string
  bold: boolean
  italic: boolean
  underline: boolean
}

export interface IElementTextStyles {
  textAlign: string
}

export interface IEditorBoxStyle {
  paddingTop: string
  paddingRight: string
  paddingBottom: string
  paddingLeft: string
  textIndent: string
  lineHeight: string
  fontWeight: React.CSSProperties['fontWeight']
}

