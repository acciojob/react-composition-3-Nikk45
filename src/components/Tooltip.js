import React, { useState } from 'react';

const Tooltip = ({ text, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className="tooltip-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      {showTooltip && <h1 className="tooltiptext">{text}</h1>}
    </div>
  );
};

export default Tooltip;
