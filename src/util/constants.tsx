import * as React from 'react';
import Button from '@material-ui/core/Button/Button';

import { InfoContent } from './types';

const makeColor = (color, title) => {
  return { color, title };
};

const materialPalette = [
  makeColor('#F44336', 'Red'),
  makeColor('#E91E63', 'Pink'),
  makeColor('#9C27B0', 'Purple'),
  makeColor('#673AB7', 'Deep Purple'),
  makeColor('#3F51B5', 'Indigo'),
  makeColor('#2196F3', 'Blue'),
  makeColor('#03A9F4', 'Light Blue'),
  makeColor('#00BCD4', 'Cyan'),
  makeColor('#009688', 'Teal'),
  makeColor('#4CAF50', 'Green'),
  makeColor('#8BC34A', 'Light Green'),
  makeColor('#CDDC39', 'Lime'),
  makeColor('#FFEB3B', 'Yellow'),
  makeColor('#FFC107', 'Amber'),
  makeColor('#FF9800', 'Orange'),
  makeColor('#FF5722', 'Deep Orange'),
  makeColor('#795548', 'Brown'),
  makeColor('#9E9E9E', 'Gray'),
  makeColor('#607D8B', 'Blue Gray'),
  makeColor('#000000', 'Black'),
  makeColor('#FFFFFF', 'White')
];

// const originalQuiltSizes = {
//   baby: { name: 'Baby', size: { w: 36, h: 54 } },
//   lap: { name: 'Lap', size: { w: 54, h: 72 } },
//   twin: { name: 'Twin', size: { w: 54, h: 90 } },
//   double: { name: 'Double', size: { w: 72, h: 90 } },
//   queen: { name: 'Queen', size: { w: 90, h: 108 } },
//   king: { name: 'King', size: { w: 108, h: 108 } }
// };

const quiltSizes = {
  baby: { name: 'Baby', size: { w: 37.5, h: 55 } },
  lap: { name: 'Lap', size: { w: 55, h: 72.5 } },
  twin: { name: 'Twin', size: { w: 55, h: 90 } },
  double: { name: 'Double', size: { w: 72.5, h: 90 } },
  queen: { name: 'Queen', size: { w: 90, h: 110 } },
  queen2: { name: 'queen (top only)', size: { w: 62, h: 78 } },
  king: { name: 'King', size: { w: 110, h: 110 } }
};

const infoContents: InfoContent[] = [
  {
    key: 't0',
    text: 'These awesome blocks were designed by Jennifer Ofenstein and other Fandom in Stitches Designers ' +
      '(each block has its designer\'s name on hover)'
  },
  {
    key: 't1',
    text: <>
      <Button
        size="small"
        href="https://sewhooked.com/"
        target="_blank"
        color="primary"
      >
        sewhooked.com
      </Button>
      ⚡️
      <Button
        size="small"
        href="http://www.fandominstitches.com/"
        target="_blank"
        color="primary"
      >
        fandominstitches.com
      </Button>
    </>
  },
  {
    key: 't2',
    text: 'These patterns are free for personal and NON-profit use only.\n' +
      'Not to be used for manufacture or distribution.\n' +
      'Sale of the patterns or quilts made from them is prohibited.',
    color: 'secondary'
  },
  {
    key: 't3',
    text: <>You can find the patterns in the&nbsp;
      <Button
        size="small"
        href="http://www.fandominstitches.com/2015/07/harry-potter-bookcase-quilt-along.html"
        target="_blank"
        color="primary"
      >
        Fandom in Stitches - Project of Doom
      </Button>
      &nbsp;site</>
  },
  {
    key: 't4', text: '', divider: true
  },
  {
    key: 't5', text: 'Each square in the Quilt grid measures 2.5"'
  },
  {
    key: 't6', text: 'You can drag blocks from the left and drop them in the Quilt'
  },
  {
    key: 't7', text: 'To drag a block grab it by the little white square on the top left corner'
  },
  {
    key: 't8', text: 'You can drag and drop the blocks in the Quilt to rearrange them'
  },
  {
    key: 't9',
    text: 'Clicking a square in the Quilt grid will show a color picker to paint one or more squares'
  },
  {
    key: 't10',
    text: 'You can modify blocks by clicking the icons on the toolbar. Each one will tell you what it does'
  }
];

const constants = {
  inchMultiplier: 10,
  minBlockSize: 2,
  baseImagesPath: '../assets/images/blocks',
  materialPalette,
  quiltSizes,
  infoContents
};

export default constants;
