import './App.scss';
import React from 'react';
import { useState, useEffect } from 'react'
import Search from './Components/Search';
import Movie from './Components/Movie';
import SearchRez from './Components/SearchRez';


function App() {
  const [inputText, setInputText] = useState();
  const [inputLength, setInputLength] = useState(1);

  const [clicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState([]);


  useEffect(() => {
    if (inputText != '') {
      let urlForAPI = ('https://api.themoviedb.org/3/search/movie?api_key=8f1024885585f455407aaf22471e875b&language=en-US&query=' + inputText);
      fetch(urlForAPI)
        .then((result) => {
          if (clicked == true) {
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
              return result.json();
            }, 5000);
          } else {
            return result.json();
          }
          if (loading == true) {

          }
        })
        .then((data) => {
          setData(data.results);
        })
        .catch(function (error) {
          console.log(error);
          return;
        })
    }
  }, [inputText, clicked]);

  const inputHandler = (e) => {
    const text = e.target.value;
    setInputText(text);
    setClicked(false);
    setInputLength(text.length);
  }

  return (
    <div className="app">
      <header className="appHeader">
        <div className="searchField">
          <div className="searchLine">
            <Movie className="movieIcon" />
            <input type="search" placeholder="Enter a movie name" id="search" onChange={inputHandler} value={inputText} />
          </div>
          <Search className="searchIcon" />
        </div>
        <SearchRez className="results" selectionHandler={inputText => setInputText(inputText)} inputLength={inputLength} inputText={inputText} data={data} selected={clicked => setClicked(clicked)} clicked={clicked}/>
      </header>
    </div>
  );
}

export default App;
