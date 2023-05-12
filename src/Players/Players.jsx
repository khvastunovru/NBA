import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Players() {

  useEffect(() => {

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'd8fc1d850dmsha5a022c62c586f6p106cbcjsnf6e37576149e',
        'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
      }
    };

    fetch('https://free-nba.p.rapidapi.com/players?page=0&per_page=25', options)
      .then(response => response.json())
      .then(response => setPlayers(response.data))
      .catch(err => console.error(err));
  })


  const [players, setPlayers] = useState([]);
  return (

    <div className='container'>
      {players.map((el) => { return <p> Имя игрока:  {el.first_name}   </p> })}
    </div>

  )
}
