import React from 'react';
import './Workspace.css';
import { Button, Input } from '../../components';
const checkMark = require('../../images/checkmark.png');

interface IWorkspaceProps {}

const Workspace: React.FC<IWorkspaceProps> = () => {
  const [inputValue, setInputValue] = React.useState('');

  const onChangeInput = (value: string) => {
    setInputValue(value);
  };

  const onClickAdd = () => {
    console.log('create');
  }

  return (
    <div className="workspace-container">
      <div className="input-btn-container">
      <Input inputValue={inputValue} onChange={onChangeInput} />
      <Button onClick={onClickAdd} borderColor={'#01A601'} btnImg={checkMark} />
      </div>
    </div>
  );
};

export default Workspace;
