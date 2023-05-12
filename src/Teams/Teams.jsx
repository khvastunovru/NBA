import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Teams() {

  useEffect(() => {

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '1d932b7d49mshfb2a800c33a541ep16a5aejsn8e79fbdf66a6',
        'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
      }
    };

    fetch('https://free-nba.p.rapidapi.com/players?page=0&per_page=25', options)
      .then(response => response.json())
      .then(response => setTeams(response.data))
      .catch(err => console.error(err));
  })


  const [teams, setTeams] = useState([]);
  return (

    <div className='container'>
      {teams.map((el) => { return <p>Командa id:  {el.id}   </p> })}
    </div>

  )
}