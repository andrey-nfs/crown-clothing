import React from 'react';
import { withRouter } from 'react-router-dom';

import { MenuItemContainer, MenuItemBackgroundImage, ManuItemContent, TitleContainter, SubtitleContainer } from './menu-item.styles.js';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <MenuItemBackgroundImage imageUrl={imageUrl} />
    <ManuItemContent>
      <TitleContainter>{title.toUpperCase()}</TitleContainter>
      <SubtitleContainer>SHOP NOW</SubtitleContainer>
    </ManuItemContent>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
