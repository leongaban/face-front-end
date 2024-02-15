import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import videoBg from './assets/face-background.mp4'
import './index.css'
import reportWebVitals from './reportWebVitals'

let process = {}

// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = 'YOUR_PAT_HERE'
// Specify the correct user_id/app_id pairings
// Since you're making inferences outside your app's scope
const USER_ID = 'clarifai'
const APP_ID = 'main'
// Change these to whatever model and image URL you want to use
const MODEL_ID = 'general-image-recognition'
const MODEL_VERSION_ID = 'aa7f35c01e0642fda5cf400f543e7c40'
const IMAGE_URL = 'https://samples.clarifai.com/metro-north.jpg'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <App />
    <div className="hero">
      <div className="content">
        <h1>
          FACE RECOGNITION BRAIN<em>TM</em>
        </h1>
      </div>
      <video src={videoBg} autoPlay loop muted />
      {/* <video autoPlay loop muted plays-inline="true" className="back-video">
      <source src="assets/face-background.mp4" type="video/mp4"/>
    </video> */}
    </div>
  </div>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
