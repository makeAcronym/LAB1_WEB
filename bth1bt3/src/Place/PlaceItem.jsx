import React from 'react'

function PlaceItem({placeName, placeImage, idTag, headPage}) { 
    let imageLink = require(`../assets/images/${placeImage}`)
  
    return (
        <div className="placeContent" id={idTag}>
            <h2 className="placeNameText">{placeName}</h2>
            
            <img src={imageLink} alt="Ảnh địa danh" className="placeImage" />

            <a href={`#${headPage}`} className="backHeadPage">Quay về đầu trang</a>
        </div>
  )
}

export default PlaceItem;