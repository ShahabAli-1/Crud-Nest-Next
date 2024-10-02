import React from 'react';

interface ActionButtonProps {
  onClick: () => void; // Callback function for button click
  label: string;       // The label that will be displayed on the button
  className: string;   // The CSS classes for styling the button
}

const ActionButton: React.FC<ActionButtonProps> = ({ onClick, label, className }) => {
  return (
    <button onClick={onClick} className={className}>
      {label}
    </button>
  );
};

export default ActionButton;
