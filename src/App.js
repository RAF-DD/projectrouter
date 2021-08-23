import {React, useState} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Description from './Description';
import Home from './Home';

function App  () {
  const [movies, setmovies] = useState([
    {
        title: "Embattled",
        duration:"117 min",
        date:"2020",
        rate:2,
        genre:"Action",
        description:"The plot revolves around the fraught relationship between a mixed martial arts cage fighting champion named Cash Boykins (Stephen Dorff, a sinewy mass here of cut muscle, tattoos and barely controlled rage) and his semi-estranged 18-year-old son Jett (newcomer Darren Mann, more than holding his own)",
        img:"https://resizing.flixster.com/867MPHLo3khx6TYB8IetaEWYnD4=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzL2NmYzVlYjE2LWE4YWUtNGVhNy05NzhjLTkxOTgzMjc4NjcyYi5qcGc=",
        href:"https://www.youtube.com/embed/rDfW0aY6EdU"
    },
    {
      
      title: "Josée",
        duration:"116 min",
        date:"2020",
        rate:3,
        genre:"Romance",
        description:"Yeong-Seok est un étudiant qui, en marchant dans la rue, aide une femme, Josée, tombée de sa chaise roulante. Pour le remercier, elle décide de lui offrir un repas. Depuis ce jour, Yeong-Seok passe de temps en temps chez Josée pour pouvoir prendre des repas et apprendre à faire connaissance",
        img:"http://image2.sharebox.co.kr/images/data/2021_01_15/c2d394898fbf6c01780131d5a40abb9b.jpg",
        href:"https://www.youtube.com/embed/T0uRwQHQgEQ"  
    },
    {
    
        title: "Gladiator",
        duration:"171 min",
        date:"2000",
        rate:4,
        genre:"Adventure",
        description:"Crowe portrays Roman general Maximus Decimus Meridius, who is betrayed when Commodus, the ambitious son of Emperor Marcus Aurelius, murders his father and seizes the throne. Reduced to slavery, Maximus becomes a gladiator and rises through the ranks of the arena to avenge the murders of his family and his emperor.",
        img:"https://images.cakeresume.com/vvzma/weicheng-8eb5e9-673612-ff8510-3a1f6b-14197c/eea77b61-6b52-42e5-88e7-71c4a1f21cd8.png",
        href:"https://www.youtube.com/embed/uvbavW31adA"
    },
    {
    
      title: "Moana",
      duration:"113 min",
      date:"2016",
      rate:5,
      genre:"family",
      description:"Moana, daughter of chief Tui, embarks on a journey to return the heart of goddess Te Fitti from Maui, a demigod, after the plants and the fish on her island start dying due to a blight",
      img:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTCStGlbSfgnn58-5uq4yHTAgEG4VK5moQUtt6XETV9CG9DtZYm",
      href:"https://www.youtube.com/embed/LKFuXETZUsI"
  }
]);
  return (
    <div>
      <BrowserRouter>
      <Route exact path="/" ><Home movies={movies}/></Route>
      <Route path="/:name"><Description movies={movies}/></Route>
      </BrowserRouter>
    </div>
  );
}

export default App

