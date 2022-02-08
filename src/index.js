import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/app/App';
// import AvitoService from './service/AvitoService'
// import PhotoList from './Components/photoList/PhotoList';
// import './style/style.scss';




// const avitoService = new AvitoService();

// avitoService.getAllPhotos().then(res => console.log(res))
// avitoService.getAllPhotos().then(res => res.forEach(item => console.log(item.url)));
// avitoService.getAllPhotos().then(res => res.forEach(item => console.log(item.id)));




ReactDOM.render(
  <React.StrictMode>
    <App />
   
  </React.StrictMode>,
  document.getElementById('root')
);


