import "./App.css";
import "./Style.css";
import Form3 from "./Component/Form3";
import React, { useState } from "react";
import Form4 from "./Component/Form4";
import Form1 from "./Component/Form1";
function App() {
  return(
      <div className="App">
 <Form3/>
 {/* Nếu muốn hiển thị bài khác, đổi Form3 thành Form1 hoặc Form4 */}
  </div>

  )

}

export default App;
