// const PAT = 'c219ce8b658f4d36974d5a0a16a655d9'
const PAT = process.env.REACT_APP_CLARIFAI_PAT
const USER_ID = 'clarifai'
const APP_ID = 'main'
const MODEL_ID = 'face-detection'
// const MODEL_VERSION_ID = '6dc7e46bc9124c5c8824be4822abe105'
const MODEL_VERSION_ID = process.env.REACT_APP_CLARIFAI_MODEL_VERSION_ID
const IMAGE_URL = 'https://samples.clarifai.com/metro-north.jpg'
const API_CLARIFAI_V_MODELS = 'https://api.clarifai.com/v2/models/'

export {
  PAT,
  USER_ID,
  APP_ID,
  MODEL_ID,
  MODEL_VERSION_ID,
  IMAGE_URL,
  API_CLARIFAI_V_MODELS,
}
