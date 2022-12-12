import React from 'react';
import './Workspace.css';
import { Button, Card, Input } from '../../components';
import { EStyleColors } from '../../enums';
import { ICard } from '../../interfaces/ICard';

const sendIcon = require('../../images/send.png');
const clearIcon = require('../../images/erase.png');

const Workspace: React.FC = () => {
  const [inputValue, setInputValue] = React.useState<string>('');
  const [cards, setCards] = React.useState<ICard[]>([]);

  const onChangeInput = (value: string): void => {
    setInputValue(value);
  };

  const onClickAdd = (): void => {
    if (inputValue !== '')
      setCards((cards: ICard[]) => [
        ...cards,
        { value: inputValue, isCompleted: false },
      ]);

    setInputValue('');
  };

  const onClickClear = (): void => {
    setInputValue('');
  };

  const onClickCompleted = (index: number): void => {
    const cardsUpdated = cards.map((card, cardIndex) => {
      if (cardIndex === index) {
        return { ...card, isCompleted: true };
      }
      return card;
    });
    setCards(cardsUpdated);
  };

  const onClickRemove = (index: number): void => {
    setCards((currentCards) =>
      currentCards.filter((card, cardIndex) => cardIndex !== index),
    );
  };

  const mappedCards = () =>
    cards.map((card: ICard, index) => (
      <Card
        card={card}
        cardIndex={index}
        onClickCompleted={onClickCompleted}
        onClickRemove={onClickRemove}
        isReadonly={true}
      />
    ));

  return (
    <div className="workspace-container">
      <div className="workspace-content-container">
        <div className="createcard-container">
          <Input
            inputValue={inputValue}
            onChange={onChangeInput}
            isCompleted={false}
          />
          <Button
            onClick={onClickAdd}
            borderColor={EStyleColors.GREEN}
            btnImg={sendIcon}
          />
          <Button
            onClick={onClickClear}
            borderColor={EStyleColors.RED}
            btnImg={clearIcon}
          />
        </div>
        <div className="cards-container">{mappedCards()}</div>
      </div>
    </div>
  );
};

export default Workspace;
