import React from 'react';
import { EPropertyVariable } from '../../enums';
import './Button.css';

interface IButtonProps {
  onClick: () => void;
  btnImg?: any;
  btnText?: string;
  borderColor?: string;
}

const Button: React.FC<IButtonProps> = ({
  onClick,
  btnImg,
  btnText = 'Click',
  borderColor,
}) => {
  const [isHovering, setIsHovering] = React.useState(false);

  const componentStyles = {
    outline: isHovering ? `2px solid ${borderColor}` : '',
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      className="createButton-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button onClick={onClick} style={componentStyles}>
        {btnImg && <img src={btnImg} alt="Checkmark" />}
        {!btnImg && btnText && <span>{btnText}</span>}
      </button>
    </div>
  );
};

export default Button;
