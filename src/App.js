import React from 'react';
import './App.css';
import cat1 from './images/cat1.jpg';
import cat2 from './images/cat2.jpg';
import cat3 from './images/cat3.jpg';
import cat4 from './images/cat4.jpg';
import cat5 from './images/cat5.jpg';
import cat6 from './images/cat6.jpg';
import cat7 from './images/cat7.jpg';
import cat8 from './images/cat8.jpg';
import val1 from './images/val1.jpg';
import val2 from './images/val2.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Портфолио</h1>
        <p>
          Добрый день, это сайт - портфолио, которое сделано на React, раз это портфолио то я расскажу о себе.
          Меня зовут Дмитрий и я студент Финансового Университета, учусь на 3 курсе по направлению подготовки "прикладная информатика".
        </p>
        <p>Раньше я увлекался хоккеем и настольным теннисом</p>
        <p>А вот моя кошка Дуся:</p>
        <div className="gallery">
          <img src={cat1} alt="Cat 1" />
          <img src={cat2} alt="Cat 2" />
          <img src={cat3} alt="Cat 3" />
          <img src={cat4} alt="Cat 4" />
          <img src={cat5} alt="Cat 5" />
          <img src={cat6} alt="Cat 6" />
          <img src={cat7} alt="Cat 7" />
          <img src={cat8} alt="Cat 8" />
        </div>
        <p>А что касается сегодняшней погоды:</p>
        <div className="weather-gallery">
          <img src={val1} alt="Weather 1" />
          <img src={val2} alt="Weather 2" />
        </div>
      </header>
    </div>
  );
}

export default App;
