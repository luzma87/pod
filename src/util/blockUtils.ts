const _ = require('lodash');
import { Block } from './types';
import constants from './constants';

const basePath = constants.baseImagesPath;

export const getFileName = (block: Block): string => {
  const week = block.week;
  const number = block.number;
  const blockFolder = block.type === 'original' || block.type === 'variation' ? 'weekly' : block.type;
  if (week !== null && week !== undefined && number !== null && number !== undefined) {
    const weekPart = _.padStart(week, 3, '0');
    return `${basePath}/${blockFolder}/${weekPart}-${number}.svg`;
  }
  if (block.file !== null && block.file !== undefined) {
    return `${basePath}/${blockFolder}/${block.file}.svg`;
  }
  return '';
};

const weekTitle = (block: Block): string => {
  return block.week === null || block.week === undefined
    ? ''
    : `Week ${block.week} - `;
};
const designer = (block: Block, spacing: string): string => {
  return block.designer !== undefined ? `\n${spacing}by ${block.designer}` : '';
};

export const getImageTitle = (block: Block): string => {
  const spacing = '    ';
  const embroidery = block.hasEmbroidery === true ? `\n${spacing}[has embroidery]` : '';
  return `${weekTitle(block)}${block.name} (${block.type})\n${spacing}[${block.size.width}"x${block.size.height}"]${embroidery}${designer(block, spacing)}`;
};

export const getDescriptionForSelectedList = (block: Block): string => {
  return `${weekTitle(block)}${block.name} (${block.type}) - ${designer(block, '')}`;
};

export const getDescriptionForBlocksList = (block: Block): string => {
  let title = block.week === null || block.week === undefined ? '' : `w.${block.week} [${block.number}] `;
  title += block.name;
  return title;
};

export const getBlockKey = (block: Block, prefix: string): string => {
  let key = `${prefix}.${block.type}.${block.week}.${block.number}.${block.file}`;
  if (block.week === null) {
    key = `${prefix}.${block.file}`;
  }
  return key;
};
