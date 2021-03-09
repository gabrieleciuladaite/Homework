import React from 'react';
import Movie from './Movie';
import '../App.scss';


export default function SearchRez(props) {

  const data = props.data.slice(0, 5);

  if(props.inputLength >= 3 && props.clicked === false) {
    return (
      <div className="results">
          <div className="firstInResultsList">
          <Movie className="movieIconOnInput"/>
            <ul>
                <li>{props.inputText}</li><br/>
                <span>Enter a movie name</span>
            </ul>
          </div>
          {data.map((data, index) => {
            return (
              <div className="resultsList" onClick={() => props.selectionHandler(data.title)} >
                <ul onClick={() => props.selected(true)} >
                  <li>{data.title}</li><br/>
                  <span>{data.vote_average} Rating, {data.release_date.slice(0, 4)}</span>
                </ul>
              </div>
            )
          })}
      </div>
    )
  }else{
    return null;
  }
}