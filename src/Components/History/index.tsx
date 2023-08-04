import './styles.scss';

import React, { useEffect, useState } from 'react';

type Props = {
  dataX: number[][];
  turn: string;
};
function History({ dataX, turn }: Props) {
  const [history, setHistory] = useState(dataX);
  return (
    <div className="HistoryWrap">
      <ul>
        <li>{turn}</li>
        {dataX.map((item: any, index: number) => (
          <li key={item}>
            {item[0]}:{item[1]}
          </li>
        ))}
      </ul>
      {/* <ul>{dataX}</ul> */}
    </div>
  );
}

export default History;
