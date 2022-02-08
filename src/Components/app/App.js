import { Component, useState } from "react"
import PhotoList from '../photoList/PhotoList'

import '../../style/style.scss'
import AppHeader from "./appHeader/Appheader"
import Modal from "../modal/Modal"
import mesa from "../../img/1000.jpg"
import ImageStock from "./image"


const App = ()=>{


  const [modal, setModal] = useState({
    modal1: false,
    imageId: 0
  })

  return(

  
      <div className="app">

        
        <AppHeader/>
        <div className="container">
          
  
          <main>

          <button className="button" onClick={()=> setModal({
            ...modal, modal1: true
          })}>
            <ImageStock/>
          </button>




          {/* <Modal
          
          title={'Modal title'}
          
          isOpened = {modal.modal1}
          onModalClose = {()=> setModal({...modal, modal1: false})}>
            

            <ImageStock/>
          </Modal> */}


          <PhotoList />



          
          
          </main>
        </div>
        
      
     
    </div>



    )
  
}



export default App;