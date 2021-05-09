import React, { useState } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Title from './components/Title';
import UploadForm from './components/UploadFrom';
import ImageGrid from './components/ImagesGrid';
import Model from './components/Model';



function App() {

  const [selectedImg, setSelectedImg] = useState(null);
  
    return (
      <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Model selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}
  export default App;