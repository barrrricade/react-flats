import React from 'react';

import Flat from "./flat";

// eslint-disable-next-line react/prefer-stateless-function
const FlatList = (props) => {
  const renderList = () => {
    return props.flats.map((flat, index) => {
      // debugger
      return (
        <Flat
          flat={flat}
          key={flat.lng}
          selected={flat.name === props.selectedFlat.name}
          index={index}
          selectFlat={props.selectFlat}
        />
      );
    });
  };

  return (
    <div className="flat-list">
      {renderList()}
    </div>
  );
};

export default FlatList;