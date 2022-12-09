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

  const changeStyles = (): void => {
    const root = document.documentElement;

    if (borderColor) {
      root.style.setProperty(EPropertyVariable.BORDER_COLOR, borderColor)
    } 
  }

  React.useEffect(() => {
    changeStyles();
  }, [])

  return (
    <div className="createButton-container">
      <button onClick={onClick}>
        {btnImg && <img src={btnImg} alt="Checkmark" />}
        {!btnImg && btnText && <span>{btnText}</span>}
      </button>
    </div>
  );
};

export default Button;
