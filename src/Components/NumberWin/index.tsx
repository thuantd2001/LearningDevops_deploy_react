import './styles.scss';

import { type } from '@testing-library/user-event/dist/type';
import React, { useEffect, useState } from 'react';

type Props = {
  xWin: number;
  yWin: number;
};

function NumberWin({ xWin, yWin }: Props) {
  return (
    <div className="winWrap">
      <div className="count_x">so lan thang x: {xWin} </div>
      <div className="count_y">so lan thang y: {yWin} </div>
    </div>
  );
}
export default NumberWin;
