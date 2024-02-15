import React from 'react'
import './FaceRecognition.css'

const FaceRecognition = ({ imageUrl, box }) => {
  console.log('FACE box', box)
  console.log('FACE img', imageUrl)
  console.log(' ')

  //   const image = document.getElementById('inputimage')
  //   const width = Number(image.width)
  //   const height = Number(image.height)

  // const leftCol = box.left_col * width
  // const topRow = box.top_row * height
  // const rightCol = width - box.right_col * width
  // const bottomRow = height - box.bottom_row * height

  return (
    <div className="center mtop-neg400 w500">
      <div className="absolute mt2">
        <img id="inputimage" alt="" src={imageUrl} width="500px" heigh="auto" />
        {box && (
          <div
            className="bounding-box"
            style={{
              top: box.topRow,
              right: box.rightCol,
              bottom: box.bottomRow,
              left: box.leftCol,
            }}
          ></div>
        )}
      </div>
    </div>
  )
}

export default FaceRecognition
