import './styles.css';

import React, { useEffect, useState } from 'react';

type Props = {
  defaultValue: string;
  updateMap: (x: number, y: number) => void;
  checking: (x: number, y: number) => void;
  turn: string;
  draw: () => void;

  x: number;
  y: number;
};
function ButtonCell({ defaultValue, updateMap, checking, turn, draw, x, y }: Props) {
  const [valueButton, setValueButton] = useState<any>(defaultValue);
  const [isActive, setIsActive] = useState(false);
  const [color, setColor] = useState(false);

  const clickAction = () => {
    updateMap(x, y);
    checking(x, y);
    draw();
  };
  const handleClick = () => {
    // 👇️ toggle
    if (isActive) return;
    else refesh();
    setIsActive(true);
  };
  const refesh = () => {
    if (turn === 'X') setColor(true);
    else if (turn === 'O') setColor(false);
  };
  return (
    <div
      className={isActive ? 'buttonWrapClick' : 'buttonWrap'}
      onClick={() => {
        clickAction();
        handleClick();
      }}
    >
      <span className={color ? 'TurnX' : 'TurnY'}>{defaultValue}</span>
    </div>
  );
}

export default ButtonCell;
