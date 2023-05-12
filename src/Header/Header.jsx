import React from 'react'


import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <ul className="nav navbar bg-dark" data-bs-theme="dark">
      <li><Link to="/" >Главная</Link>   </li>
      <li><Link to="/players">Игроки</Link> </li>
      <li><Link to="/teams">Команды</Link> </li>
      <li><Link to="/games">Игры</Link> </li>
    </ul>
  )
}
