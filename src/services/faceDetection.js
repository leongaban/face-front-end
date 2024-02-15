import {
  API_CLARIFAI_V_MODELS,
  PAT,
  USER_ID,
  APP_ID,
  MODEL_ID,
  MODEL_VERSION_ID,
} from '../constants/clarifai'

const fetchFaceDetection = IMAGE_URL => {
  console.log('fetchFaceDetection called with', IMAGE_URL)
  const raw = JSON.stringify({
    user_app_id: {
      user_id: USER_ID,
      app_id: APP_ID,
    },
    inputs: [
      {
        data: {
          image: {
            url: IMAGE_URL,
            // "base64": IMAGE_BYTES_STRING
          },
        },
      },
    ],
  })

  const requestOptions = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: 'Key ' + PAT,
    },
    body: raw,
  }

  return new Promise((resolve, reject) => {
    fetch(
      API_CLARIFAI_V_MODELS +
        MODEL_ID +
        '/versions/' +
        MODEL_VERSION_ID +
        '/outputs',
      requestOptions
    )
      .then(response => response.json())
      .then(result => {
        const regions = result.outputs[0].data.regions
        console.log('regions', regions)
        console.log(' ')

        regions.forEach(region => {
          const boundingBox = region.region_info.bounding_box
          const topRow = boundingBox.top_row.toFixed(3)
          const leftCol = boundingBox.left_col.toFixed(3)
          const bottomRow = boundingBox.bottom_row.toFixed(3)
          const rightCol = boundingBox.right_col.toFixed(3)

          region.data.concepts.forEach(concept => {
            const name = concept.name
            const value = concept.value.toFixed(4)

            console.log(
              `${name}: ${value} BBox: ${topRow}, ${leftCol}, ${bottomRow}, ${rightCol}`
            )
          })
        })

        const box = regions[0].region_info.bounding_box

        resolve(box)
      })
      .catch(error => {
        console.error('Error fetching face detection:', error)
        reject(error)
      })
  })
}

export default fetchFaceDetection
