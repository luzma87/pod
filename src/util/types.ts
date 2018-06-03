export interface BlockSize {
  width: number,
  height: number
}

export interface BlockVariation {
  number: number,
  name: string,
  tags?: Array<string>
}

export interface WeekBlock {
  name: string,
  week: number,
  size: BlockSize,
  tags: Array<string>,
  variations: Array<BlockVariation>,
}
