import * as React from 'react';
import { Spell } from './util/types';
import Flip from '@material-ui/icons/Flip';
import Delete from '@material-ui/icons/Delete';
import PhotoSizeSelectLarge from '@material-ui/icons/PhotoSizeSelectLarge';

const spells: Array<Spell> = [
  {
    name: 'Flipendo',
    action: 'flip',
    icon: <Flip />
  },
  {
    name: 'Evanesco',
    action: 'delete',
    icon: <Delete />
  },
  {
    name: 'Engorgio',
    action: 'enlarge',
    icon: <PhotoSizeSelectLarge />
  }

];

export { spells as default };
