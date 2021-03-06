export interface BlockSize {
  width: number,
  height: number
}

export interface BlockPosition {
  x: number,
  y: number
}

export type blockType = 'original' | 'variation' | 'supplemental'
  | 'castle' | 'others' | 'disney' | 'custom' | 'top-sides' | 'beasts';

export interface Block {
  week?: number,
  number?: number,
  name: string,
  size: BlockSize,
  tags: Array<string>,
  type: blockType,
  difficulty: number,
  designer?: string
  file?: string
  hasEmbroidery?: boolean
}

export type spellType = null | 'flip' | 'delete' | 'enlarge';

export interface Spell {
  name: string
  action: spellType
  icon: any
}

export interface SelectedBlock {
  position: BlockPosition
  flipped?: boolean
  block?: Block,
  color?: string
}

export type Color = 'inherit' | 'primary' | 'textSecondary' | 'secondary' | 'error' | 'default'

export interface InfoContent {
  key: string
  text: string | object
  color?: Color
  divider?: boolean
}


export interface Tag {
  name: String
}
