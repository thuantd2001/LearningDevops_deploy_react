import './styles.scss';

import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Board from '../../Components/Board';
import History from '../../Components/History';
import NumberWin from '../../Components/NumberWin';

function HomePage() {
  const [dataX, setDataX] = useState<number[][]>([]);
  const [dataY, setDataY] = useState<number[][]>([]);
  const [xWin, setXWin] = useState(0);
  const [yWin, setYWin] = useState(0);
  const [user, setUser] = useState<any>();

  return (
    <div className="homeWrap">
      <header>
        <div className="overlay">
          <h1>CaroGame</h1>
        </div>
      </header>
      <NumberWin xWin={xWin} yWin={yWin} />
      <section className="App-container">
        <Board
          setHisX={setDataX}
          setHisY={setDataY}
          historyTurnX={dataX}
          historyTurnY={dataY}
          setXWin={setXWin}
          setYWin={setYWin}
          xWin={xWin}
          yWin={yWin}
        ></Board>

        <div className="history-board">
          <History dataX={dataX} turn={'X'} />
          <History dataX={dataY} turn={'Y'} />
        </div>
      </section>
    </div>
  );
}

export default HomePage;
