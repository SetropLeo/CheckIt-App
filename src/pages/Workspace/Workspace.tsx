import React from 'react';
import './Workspace.css';
import { CreateButton, Input } from '../../components';

interface IWorkspaceProps {}

const Workspace: React.FC<IWorkspaceProps> = () => {
  const [inputValue, setInputValue] = React.useState('');

  const onChangeInput = (value: string) => {
    setInputValue(value);
  };

  const onClickCreateButton = () => {
    console.log('create');
  }

  return (
    <div className="workspace-container">
      <div className="input-btn-container">
      <Input inputValue={inputValue} onChange={onChangeInput} />
      <CreateButton onClick={onClickCreateButton} />
      </div>
    </div>
  );
};

export default Workspace;
