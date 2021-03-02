import React from "react";

export const Picture = ({ element, editable }) => {
  return (
    <div style={element.style.container}>
      <img 
        src={element.content.src} 
        width="100%" 
        alt="pic" 
        className={editable ? 'editable' : undefined}
      />
    </div>
  );
};
