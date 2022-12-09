import React from 'react';
import './Workspace.css';
import { Button, Input } from '../../components';
import { EStyleColors } from '../../enums';

const sendIcon = require('../../images/send.png');
const clearIcon = require('../../images/erase.png')

interface IWorkspaceProps {}

const Workspace: React.FC<IWorkspaceProps> = () => {
  const [inputValue, setInputValue] = React.useState('');

  const onChangeInput = (value: string) => {
    setInputValue(value);
  };

  const onClickAdd = () => {
    console.log('create');
  }

  const onClickClear = () => {
    console.log('clear');
  }

  return (
    <div className="workspace-container">
      <div className="input-btn-container">
      <Input inputValue={inputValue} onChange={onChangeInput} />
      <Button onClick={onClickAdd} borderColor={EStyleColors.GREEN} btnImg={sendIcon} />
      <Button onClick={onClickClear} borderColor={EStyleColors.RED} btnImg={clearIcon} />
      </div>
    </div>
  );
};

export default Workspace;
