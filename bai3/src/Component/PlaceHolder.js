
import React, { useEffect } from 'react';

function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
}
function PlaceHolder({id, placeName, placeImage }) { 
    let imageSrc = require(`../assets/${placeImage}`)

    return (
        <div className="placeInfo" id={id}>
            <h2 className="placeName">{placeName}</h2>
            
            <img class="placeImg" src={imageSrc} alt= {placeName} />
            <a class="toTop"
            href="#top"> 
            <ScrollToTop/>
            Quay về đầu trang
            </a>
        </div>
  )
  
}

export default PlaceHolder;