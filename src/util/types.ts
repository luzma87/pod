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
  week: number | null,
  number: number | null,
  name: string,
  size: BlockSize,
  tags: Array<string>,
  type: 'original' | 'variation' | 'supplemental',
  difficulty: number,
  author?: string
  position?: BlockPosition
  file?: string
}
