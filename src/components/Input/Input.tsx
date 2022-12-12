import React from 'react';
import './Input.css';

interface IInputProps {
  onChange: (value: string) => void;
  inputValue: string;
  isCompleted?: boolean;
  isReadonly?: boolean;
}

const Input: React.FC<IInputProps> = ({
  onChange,
  inputValue,
  isCompleted = false,
  isReadonly = false,
}) => {
  return (
    <div className="input-container">
      <input
        readOnly={isReadonly}
        disabled={isCompleted}
        type="text"
        onChange={(event) => onChange(event.target.value)}
        value={inputValue}
      />
      {isCompleted && <div className="line"></div>}
    </div>
  );
};

export default Input;
