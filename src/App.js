import React from 'react';
import './App.css';
import cat1 from './images/cat1.jpg';
import cat2 from './images/cat2.jpg';
import cat3 from './images/cat3.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Портфолио</h1>
        <p>Добрый день, это сайт - портфолио, которое сделано на React, раз это портфолио
          то я расскажу о себе.
          Я студент Финансового университета, учусь на 3 курсе по направлению подготовки 
          "прикладная информатика"

          а вот моя кошка Дуся:
        </p>
        <div className="gallery">
          <img src={cat1} alt="Cat 1" />
          <img src={cat2} alt="Cat 2" />
          <img src={cat3} alt="Cat 3" />
        </div>
      </header>
    </div>
  );
}

export default App;
