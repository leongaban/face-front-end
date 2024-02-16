import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import videoBg from './assets/face-background.mp4'
import './index.css'
import 'tachyons'

import reportWebVitals from './reportWebVitals'

// let process = {}

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <App />
    <div className="hero">
      <div className="content">
        <h1>
          FACE RECOGNITION APP<em>TM</em>
        </h1>
        <p className="app-info">
          This App uses the generative AI by{' '}
          <a href="https://www.clarifai.com/">clarifai.com</a>
        </p>
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
