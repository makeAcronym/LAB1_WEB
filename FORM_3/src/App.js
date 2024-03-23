import React, { useRef } from 'react';
import './App.css';
import list from "./list";
function App() {
  const eleRef = useRef([]);
  const changeOpt = (opt) => {
    eleRef.current[opt].scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  const setDefault = () => {
    window.scrollTo({ behavior: 'smooth', top: 0 });
  }
  return (
    <div className="App">
      <h2>DANH LAM THẮNG CẢNH</h2>
      <div className='content'>
        <nav>
          <p>Danh sách địa danh</p>
            {list.map((obj, index) => (
              <span key={index} onClick={() => changeOpt(index)}>
                  {obj[1]}
              </span>
            ))}
        </nav>
        <div className='listImg'>
            {list.map((obj, index) => (
                <div key={index} ref={ele => eleRef.current[index] = ele}>
                    <p>{obj[1]}</p>
                    <img src={require(`${obj[2]}`)} alt={obj[1]} />
                    <span onClick={setDefault}>Quay lại đầu trang</span>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;