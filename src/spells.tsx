import * as React from 'react';
import { Spell } from './util/types';
import Flip from '@material-ui/icons/Flip';
import Delete from '@material-ui/icons/Delete';

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
  }

];

export { spells as default };
