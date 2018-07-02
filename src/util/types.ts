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
  type: 'original' | 'variation' | 'supplemental' | 'castle',
  difficulty: number,
  designer?: string
  file?: string
}

export interface SelectedBlock {
  position: BlockPosition
  block?: Block,
  color?: string
}

export type Color = 'inherit' | 'primary' | 'textSecondary' | 'secondary' | 'error' | 'default'

export interface InfoContent {
  text: string | object
  color?: Color
  divider?: boolean
}
