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

  const localStorageKey: string = 'checkit-cards';

  React.useEffect(() => {
    getCards();
  }, []);

  const getCards = () => {
    const currentCards = localStorage.getItem(localStorageKey);
    if (currentCards !== null && currentCards.length > 0)
      setCards(JSON.parse(currentCards));
  };

  const updateCards = (updatedCards: ICard[]) => {
    localStorage.setItem(localStorageKey, JSON.stringify(updatedCards));
    setCards(updatedCards);
  };

  const onChangeInput = (value: string): void => {
    setInputValue(value);
  };

  const onClickAdd = (): void => {
    if (inputValue !== '') {
      const newCard = { value: inputValue, isCompleted: false };
      const newCardsList = [...cards, newCard]

      updateCards(newCardsList);
      setInputValue('');
    }
  };

  const onClickCompleted = (index: number): void => {
    const cardsUpdated = cards.map((card, cardIndex) => {
      if (cardIndex === index) return { ...card, isCompleted: true };
      else return card;
    });
    updateCards(cardsUpdated);
  };

  const onClickRemove = (index: number): void => {
    const newCardsList = cards.filter((card, cardIndex) => cardIndex !== index);
    updateCards(newCardsList);
  };

  const onClickClear = (): void => {
    setInputValue('');
  };

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
        <div className="cards-container">
          {cards.map((card: ICard, index: number) => (
            <Card
              card={card}
              cardIndex={index}
              onClickCompleted={onClickCompleted}
              onClickRemove={onClickRemove}
              isReadonly={true}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workspace;
