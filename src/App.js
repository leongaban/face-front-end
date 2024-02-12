import React from 'react'
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import './App.css'

function App() {
  return (
    <div className="App">
      {/* <div className="overlay"></div> */}
      <Navigation />
      <Logo />
      <div className="app-content">
        <ImageLinkForm />
        {/* 
        
        <FaceRecognition /> */}
      </div>
    </div>
  )
}

export default App
