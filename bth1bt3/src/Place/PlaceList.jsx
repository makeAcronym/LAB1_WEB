import React from 'react'
import PlaceItem from './PlaceItem'

const placeLists = [
    ['nt', 'Biển Nha Trang', 'nha_trang.jpg'],
    ['dl', 'Thành phố Đà Lạt', 'da_lat.jpg'],
    ['vt', 'Biển Vũng Tàu', 'vung_tau.jpg'],
    ['hl', 'Vịnh Hạ Long', 'ha_long.jpg'],
    ['pt', 'Biển Phan Thiết', 'phan_thiet.jpg'],
    ['ht', 'Biển Hà Tiên', 'ha_tien.jpg'],
    ['pq', 'Đảo Phú Quốc', 'phu_quoc.jpg'],
]

function PlaceList() {

    return (
        <div className="placeListContainer">
            <h1 className="textHeader" id="headPage">Danh lam thắng cảnh</h1>

            <div className="placeContainer">
                <div className="placeNameContainer">
                    <h2 className="textHeaderplaceNameContainer">Danh sách địa danh</h2>

                    <div className="placeNameTextContainer">
                        {placeLists.map((place, index) => (
                            <a href={`#${place[0]}`} className="placeNameTextLink" key={index}>{place[1]}</a>
                        ))}
                    </div>
                </div>

                <div className="placeContentContainer">
                    {placeLists.map((place, index) => (
                        <PlaceItem headPage={'headPage'} idTag={place[0]} key={index} placeName={place[1]} placeImage={place[2]} />
                    ))}
                </div>
            </div>
        </div>

    )
}

export default PlaceList