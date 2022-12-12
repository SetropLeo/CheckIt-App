import React from 'react';
import './Card.css';

import { ICard } from '../../interfaces/ICard';
import { EStyleColors } from '../../enums';
import { Button, Input } from '..';

const checkmarkIcon = require('../../images/checkmark.png');
const crossmarkIcon = require('../../images/crossmark.png');

interface ICardProps {
  card: ICard;
  cardIndex: number;
  isReadonly?: boolean;
  onClickCompleted: (cardIndex: number) => void;
  onClickRemove: (cardIndex: number) => void;
}

const Card: React.FC<ICardProps> = ({
  card,
  cardIndex,
  isReadonly = false,
  onClickCompleted,
  onClickRemove,
}) => {
  return (
    <div className="card-element" key={cardIndex}>
      <Input
        inputValue={card.value}
        onChange={() => ''}
        isCompleted={card.isCompleted}
        isReadonly={isReadonly}
      />
      <Button
        onClick={() => onClickCompleted(cardIndex)}
        borderColor={EStyleColors.GREEN}
        btnImg={checkmarkIcon}
      />
      <Button
        onClick={() => onClickRemove(cardIndex)}
        borderColor={EStyleColors.RED}
        btnImg={crossmarkIcon}
      />
    </div>
  );
};

export default Card;
