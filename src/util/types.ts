export interface BlockSize {
  width: number,
  height: number
}

export interface BlockPosition {
  x: number,
  y: number
}

export interface Block {
  week: number | null,
  number: number | null,
  name: string,
  size: BlockSize,
  tags: Array<string>,
  type: 'original' | 'variation' | 'supplemental' | 'border',
  difficulty: number,
  author?: string
  file?: string
}

export interface SelectedBlock {
  block: Block,
  position: BlockPosition
}
