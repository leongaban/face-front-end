import React, { useState, useEffect } from 'react'
// import Clarifai from 'clarifai'

import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import './App.css'

import fetchFaceDection from './services/faceDetection'

// https://github.com/Clarifai/clarifai-nodejs-grpc
// https://clarifai.com/clarifai/main/models/face-detection
// https://github.com/aneagoie/face-recognition-brain/blob/master/src/App.js

// Set NodeJS default version: https://www.bairesdev.com/blog/change-node-version/

function App() {
  const [imageUrl, setImageUrl] = useState('')
  const [box, setBox] = useState(undefined)
  const [boundingBox, setBoundingBox] = useState(undefined)

  const onImageSubmit = async imageUrl => {
    setImageUrl(imageUrl)
    try {
      const box = await fetchFaceDection(imageUrl)
      setBox(box)
    } catch (error) {
      console.error('Error fetching face detection:', error)
    }
  }

  const calculateFaceLocation = box => {
    // const clarifaiFace =
    //   data.outputs[0].data.regions[0].region_info.bounding_box
    const image = document.getElementById('inputimage')
    console.log('image', image)
    const width = Number(image.width)
    const height = Number(image.height)

    return {
      leftCol: box.left_col * width,
      topRow: box.top_row * height,
      rightCol: width - box.right_col * width,
      bottomRow: height - box.bottom_row * height,
    }
  }

  // useEffect(() => {
  //   fetch('http://localhost:3001')
  //     .then(res => res.json())
  //     .then(console.log)
  // }, [])

  useEffect(() => {
    if (box) {
      const result = calculateFaceLocation(box)
      setBoundingBox(result)
    }
  }, [box, imageUrl])

  return (
    <div className="App">
      {/* <div className="overlay"></div> */}
      <Navigation />
      <Logo />
      <div className="app-content">
        <ImageLinkForm onSubmit={onImageSubmit} />
        <FaceRecognition box={boundingBox} imageUrl={imageUrl} />
      </div>
    </div>
  )
}

export default App
