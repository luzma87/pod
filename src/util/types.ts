export interface BlockSize {
  width: number,
  height: number
}

export interface BlockPosition {
  x: number,
  y: number,
  w: number,
  h: number
}

export interface Block {
  week: number,
  number: number,
  name: string,
  size: BlockSize,
  tags: Array<string>,
  type: 'original' | 'variation' | 'supplemental',
  author?: string
  position?: BlockPosition
}
