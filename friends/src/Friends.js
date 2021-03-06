import React from 'react';
import Friend from './Friend';

const Friends = props =>
  props.friends.map(f => (
    <Friend
      key={f.id}
      friend={f}
      deleteHandler={props.deleteHandler}
      editHandler={props.editHandler}
    />
  ));

export default Friends;
