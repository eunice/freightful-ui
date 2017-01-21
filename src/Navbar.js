import React from 'react';
import AppBar from 'material-ui/AppBar';

import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';

const BadgeEl = () => (

    <Badge
      badgeContent={10}
      secondary={true}
      badgeStyle={{top: 12, right: 12}}
    >
      <IconButton tooltip="Notifications">
        <NotificationsIcon />
      </IconButton>
    </Badge>
);

// export default BadgeExampleSimple;


const Navbar = () => (
  <div>
    <AppBar
      title="FreightFul"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
    />
  </div>
);

export default Navbar;
