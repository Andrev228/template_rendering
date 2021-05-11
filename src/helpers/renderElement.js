import React from 'react';

export function renderElement(block) {
  if (typeof block.component === 'function') {
    return React.createElement(block.component, {
        id: block.id,
        ...(block.properties ? block.properties : {}),
      },
      /* 
        we may also check children to be string,
        but it is not necessary in our case
      */
      (block.children ? block.children : []).map(renderElement))
    }
  
  return null;
}