import { Component, useState } from "react"
import PhotoList from '../photoList/PhotoList'

import '../../style/style.scss'
import AppHeader from "./appHeader/Appheader"



const App = ()=>{


 

  return(

  
      <div className="app">

        
        <AppHeader/>
        <div className="container">
          
  
          <main>
          <PhotoList />
          </main>
        </div>
        
      
     
    </div>



    )
  
}



export default App;