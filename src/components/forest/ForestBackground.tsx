import React from 'react';
import Tree from './Tree';

export default function ForestBackground({ levelArray = [0] }) {
  return (
    <div
      className='d-flex flex-row justify-content-around align-items-end'
      style={{
        position: 'absolute',
        top: '65vh',

        zIndex: '0',
        width: '100vw',
        height: 'fit-content',
      }}
    >
      {levelArray.map(i => {
        return <Tree number={i + 1} />;
      })}
    </div>
  );
}
