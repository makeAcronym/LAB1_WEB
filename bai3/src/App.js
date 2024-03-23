import React  from 'react';
import './App.css';
import Places from "./Component/Places";
import PlaceHolder from './Component/PlaceHolder';
function App() {


  return (
    <div className="container">
      <h1 class="title">  DANH LAM THẮNG CẢNH</h1>

      <div class ="placeContainer">
        <div class ="placesListContainer">
          <h2>Danh sách địa danh</h2>
          <div class ="placesListName">
          {Places.map((currElement, index) => (

            <a class="placeLink"
            href={`#${currElement[0]}`} 
            key={index} > {currElement[1]}</a>

          ))}
          </div>
      </div>



        <div class ="placesInfoContainer">
          {Places.map((currElement, index) => (
            <PlaceHolder  id={currElement[0]} key={index} placeName={currElement[1]} placeImage={currElement[2]} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;