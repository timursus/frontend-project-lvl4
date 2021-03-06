import React from 'react';
import { useDispatch } from 'react-redux';
import cn from 'classnames';
import { setCurrentChannel } from './channelsSlice.js';

const ChannelsMenu = ({ channels, currentChannelId }) => {
  const dispatch = useDispatch();

  const openChannel = (id) => (e) => {
    e.preventDefault();
    dispatch(setCurrentChannel({ id }));
  };

  return (
    <div className="overflow-auto h-100 pb-3 px-md-2">
      <nav className="nav flex-column">
        {channels.map(({ id, name }) => {
          const isActive = currentChannelId === id;
          const classes = cn('nav-link w-100 text-truncate btn', { 'btn-primary': isActive, 'btn-dark': !isActive });
          return (
            <a className={classes} key={id} href={`#${id}`} onClick={openChannel(id)}>{name}</a>
          );
        })}
      </nav>
    </div>
  );
};

export default ChannelsMenu;
