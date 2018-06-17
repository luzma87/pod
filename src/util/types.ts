export interface BlockSize {
  width: number,
  height: number
}

export interface Block {
  week: number,
  number: number,
  name: string,
  size: BlockSize,
  tags: Array<string>,
  type: 'original' | 'variation' | 'supplemental',
  author?: string
}
