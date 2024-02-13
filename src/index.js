import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import videoBg from './assets/face-background.mp4'
import './index.css'
import reportWebVitals from './reportWebVitals'

console.log('window', window)

let process = {}

console.log('process', process)
// if (process.env.NODE_ENV !== 'production') {
// }

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
