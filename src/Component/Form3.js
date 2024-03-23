import React from "react";
import "../StyleForm3.css";
import imageDL from '../assets/DL.jpg';
import imageHCM from '../assets/TPHCM.jpg';
import imageDN from '../assets/DN.jpg';
import imageHN from '../assets/HN.jpg';
import imageNT from '../assets/NT.jpg';


export default function Form3() {
  const danhSach = [
    ["DL", "Đà Lạt", imageDL],
    ["HCM", "Tp Hồ chí Minh", imageHCM],
    ["DN", "Đà Nẵng", imageDN],
    ["HN", "Hà Nội", imageHN],
    ["NT", "Nha Trang",imageNT],
  ];
  const scrollToImage = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <h1 style={{textAlign:'center'}}> Danh lam thắng cảnh</h1>
      <div id="container">
        <div className="FlexBox">
          <h2 style={{marginLeft: 20}}> Danh sách danh lam thắng cảnh</h2>
          <ul>
           {danhSach.map((dd, index) => (
              <li key={index} onClick={() => scrollToImage(`image${dd[0]}`)}>   {dd[1]}   </li>
            ))} 
          </ul>
        </div>

        <div className="FlexBox">
         
        {danhSach.map((dd, index) => (
          <div key={index} >
          <img src={dd[2]} alt={dd[0]} id={`image${dd[0]}`} />
          <p>
            <a href="#">Trở về đầu trang</a>
          </p>
        </div>
            ))}
          
        </div>
      </div>
    </div>
  );
}
