import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

import Email from '@material-ui/icons/Email';
import Info from '@material-ui/icons/Info';
import Link from '@material-ui/icons/Link';

import { getShareableLink, setBlockAction } from '../interactions';
import spells from '../spells';
import { Spell } from '../util/types';

export namespace MyToolbar {
  export interface Props {
    onInfoClick: () => void
    onMenuClick: () => void
    onShareLink: (link: string) => void
    onSpellClick: (spell: Spell) => void
  }

  export interface State {
  }
}

class MyToolbar extends React.Component<MyToolbar.Props, MyToolbar.State> {
  render() {
    const { onInfoClick, onSpellClick, onShareLink } = this.props;
    return (
      <AppBar position="sticky">
        <Toolbar>
          <Typography
            variant="title"
            color="inherit"
            className="flex1"
          >
            Design helper
          </Typography>
          <Tooltip title="Shareable link">
            <IconButton
              onClick={() => {
                const shareableLink = getShareableLink();
                onShareLink(shareableLink);
              }}
              color="inherit"
            >
              <Link />
            </IconButton>
          </Tooltip>
          {spells.map(spell => (
              <Tooltip
                title={spell.name}
                key={spell.action as string}
              >
                <IconButton
                  onClick={() => {
                    onSpellClick(spell);
                    setBlockAction(spell.action);
                  }}
                >
                  {spell.icon}
                </IconButton>
              </Tooltip>
            )
          )}
          <Tooltip title="Show info">
            <IconButton onClick={() => onInfoClick()}>
              <Info color="secondary" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Email me">
            <IconButton
              color="inherit"
              onClick={() => window.location.href = 'mailto:project-of-doom@luzma.click'}
            >
              <Email />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    );
  }
}

export default MyToolbar;
