import React from 'react'
// import Clarifai from 'clarifai'

import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import './App.css'

// https://github.com/Clarifai/clarifai-nodejs-grpc
// https://clarifai.com/clarifai/main/models/face-detection
// https://github.com/aneagoie/face-recognition-brain/blob/master/src/App.js

// Set NodeJS default version: https://www.bairesdev.com/blog/change-node-version/

//You must add your own API key here from Clarifai.
// const app = new Clarifai.App({
//   apiKey: 'YOUR API KEY HERE',
// })

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
