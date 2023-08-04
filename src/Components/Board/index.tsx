import './styles.css';

import { useEffect, useState } from 'react';
import React from 'react';
import swal from 'sweetalert';

import ButtonCell from '../ButtonCell';

type Props = {
  setHisX: (x: number[][]) => void;
  setHisY: (y: number[][]) => void;
  historyTurnX: any;
  historyTurnY: any;
  setXWin: any;
  setYWin: any;
  xWin: number;
  yWin: number;
};
function Board({ setHisX, setHisY, historyTurnX, historyTurnY, setXWin, setYWin, xWin, yWin }: Props) {
  const [sizeBoard, setSizeBoard] = useState({ x: 5, y: 5 });
  const [mapButton, setMapButton] = useState<string[][]>([]);
  const [turn, setTurn] = useState('X');
  const [draw, setDraw] = useState<number>(0);

  useEffect(() => {
    createSizeMap();
  }, [sizeBoard]);
  const updateMapButton = (x: number, y: number) => {
    const temp = [...mapButton];

    if (temp[x][y] !== '') return;
    temp[x][y] = turn;

    setMapButton(temp);
    setDraw(draw + 1);
    //  console.log(x, y);
    if (turn === 'X') {
      const tem = [...historyTurnX];
      const str = [x, y];
      tem.push(str);
      setHisX(tem);
      setTurn('O');
    } else if (turn === 'O') {
      const tem = [...historyTurnY];
      const str = [x, y];
      tem.push(str);
      setHisY(tem);
      setTurn('X');
    }
  };
  const checked = (x: number, y: number) => {
    const temp = [...mapButton];
    updateMapButton(x, y);
    let count = 1;
    let i = 1;
    while (y + i < sizeBoard.y && temp[x][y + i] === turn) {
      count++;
      i++;
    }
    i = 1;
    while (y - i >= 0 && temp[x][y - i] === turn) {
      count++;
      i++;
    }
    endGame(count);
    //Vertical
    count = 1;
    i = 1;
    while (x + i < sizeBoard.x && temp[x + i][y] === turn) {
      count++;
      i++;
    }
    i = 1;
    while (x - i >= 0 && temp[x - i][y] === turn) {
      count++;
      i++;
    }
    endGame(count);
    //Left diagonal
    count = 1;
    i = 1;
    let j = 1;
    while (y + i < sizeBoard.y && x + i < sizeBoard.x && temp[x + i][y + j] === turn) {
      count++;
      i++;
      j++;
    }
    i = 1;
    j = 1;
    while (x - i >= 0 && y - j >= 0 && temp[x - i][y - j] === turn) {
      count++;
      i++;
      j++;
    }
    endGame(count);
    //Right diagonal
    count = 1;
    i = 1;
    j = 1;
    while (y + j < sizeBoard.y && x - i >= 0 && temp[x - i][y + j] === turn) {
      count++;
      i++;
      j++;
    }
    i = 1;
    j = 1;
    while (y - j >= 0 && x + i < sizeBoard.x && temp[x + i][y - j] === turn) {
      count++;
      i++;
      j++;
    }
    endGame(count);
  };
  const endGame = function (count: number) {
    if (count > 3) {
      const text = turn + ' win';
      if (turn === 'X') {
        setXWin(xWin + 1);
      } else if (turn === 'O') {
        setYWin(yWin + 1);
      }
      swal('Good job !' + text, 'You clicked the button!', 'success');
      updateSizeMap(sizeBoard.x, sizeBoard.y);
      setMapButton([]);
      reset();
    }
  };
  const gameDraw = () => {
    if (draw >= sizeBoard.x * sizeBoard.y - 1) {
      alert('draw');
      updateSizeMap(sizeBoard.x, sizeBoard.y);
      setMapButton([]);
      reset();
    }
  };

  const reset = () => {
    setHisX([]);
    setHisY([]);
    setDraw(0);
    setTurn('X');
  };
  const createSizeMap = () => {
    reset();
    const temArr = [];
    for (let i = 0; i < sizeBoard.x; i++) {
      const subArr = [];
      for (let j = 0; j < sizeBoard.y; j++) {
        const str = '';
        subArr.push(str);
      }
      temArr.push([...subArr]);

      // console.log(temArr);
    }
    setMapButton([...temArr]);
  };
  const updateSizeMap = (h: number, w: number) => {
    setSizeBoard({ x: h, y: w });
    setMapButton([]);
  };

  return (
    <div className="BoardWrap">
      <br></br>
      <div className="button-box">
        <button className="button-87" onClick={() => updateSizeMap(5, 5)}>
          6x6
        </button>
        <button className="button-87" onClick={() => updateSizeMap(9, 9)}>
          9x9
        </button>
        <button className="button-87" onClick={() => updateSizeMap(12, 12)}>
          12x12
        </button>
        <button className="button-87" onClick={() => updateSizeMap(15, 15)}>
          15x15
        </button>
      </div>
      <div className="boxed">
        <div className="boxed-child">
          {mapButton.map((item: any, index: number) => (
            // eslint-disable-next-line react/no-array-index-key
            <div className="rowWrap" key={index}>
              {item.map((subItem: any, index2: number) => (
                <ButtonCell
                  key={index.toString() + index2.toString()}
                  defaultValue={subItem}
                  updateMap={updateMapButton}
                  checking={checked}
                  turn={turn}
                  draw={gameDraw}
                  x={index}
                  y={index2}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Board;
