import './styles.scss';

import { type } from 'os';
import React from 'react';
import { useSelector } from 'react-redux';

import { getUserSelector } from '../../store/user/selectors';

type Props = {
  user: any;
};
function Profile() {
  const user = useSelector(getUserSelector);
  return (
    <div className="profileWrap">
      {/*  */}
      <div className="card">
        <div className="card__img">{user && <img src={user.picture?.large} alt="" />}</div>
        {user && (
          <h2>
            {user.name?.title} {user.name?.first} {user.name?.last}{' '}
          </h2>
        )}
        {user && <p>{user.email} </p>}
        <ul>
          {user && <li>{user.gender} </li>}
          {user && <li>{user.phone} </li>}
        </ul>
        <button>Contact me</button>
      </div>
    </div>
  );
}
export default Profile;
