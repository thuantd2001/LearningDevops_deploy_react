/* eslint-disable jsx-a11y/label-has-associated-control */
import './App.scss';

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Link, Route, Routes, useNavigate, useParams } from 'react-router-dom';

import Count from './Components/Counter';
import logo from './logo.svg';
import HomePage from './Page/Home';
import Profile from './Page/Profile';
import { fetchUser } from './store/user/actions';
import { getUserSelector } from './store/user/selectors';
function App() {
  const [isDark, setDark] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(getUserSelector);
  useEffect(() => {
    console.log('call');
    if (!user.email) dispatch(fetchUser());
  }, []);
  const darkMode = () => {
    setDark(!isDark);
    console.log(isDark);
  };
  return (
    <div className={isDark ? 'Dark App' : 'App'}>
      <nav>
        <ul className="link">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <div className="toggle">
              <input onChange={() => darkMode()} type="checkbox" id="toggleMode" hidden />
              <label htmlFor="toggleMode"></label>
            </div>
          </li>
          <li>
            <Link to="/profile"> {user && <img src={user.picture?.medium} alt="" />}</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="/profile" element={<Profile></Profile>} />
      </Routes>
    </div>
  );
}

export default App;
