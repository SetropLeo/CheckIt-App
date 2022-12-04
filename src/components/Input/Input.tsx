import React from 'react';
import './Input.css';

interface IInputProps {
  onChange: (value: string) => void;
  inputValue: string;
}

const Input: React.FC<IInputProps> = ({ onChange, inputValue }) => {
  return (
    <div className='input-container'>
      <input
        type="text"
        onChange={(event) => onChange(event.target.value)}
        value={inputValue}
      />
    </div>
  );
};

export default Input;
