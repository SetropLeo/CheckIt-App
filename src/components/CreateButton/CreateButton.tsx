import React from 'react';
import './CreateButton.css'
const checkMark = require('../../images/checkmark.png');

interface ICreateButtonProps {
  onClick: () => void;
}

const CreateButton: React.FC<ICreateButtonProps> = ({ onClick }) => {
  return (
    <div className='createButton-container'>
      <button onClick={onClick}>
        <img src={checkMark} alt="Checkmark" />
      </button>
    </div>
  );
};

export default CreateButton;
