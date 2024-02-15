import React, { useState } from 'react'
import './ImageLinkForm.css'

const ImageLinkForm = props => {
  const { onSubmit } = props
  const [imageUrl, setImageUrl] = useState('')

  const handleChange = event => {
    setImageUrl(event.target.value)
  }

  const handleSubmit = () => onSubmit(imageUrl)

  return (
    <div className="image-link-form">
      <p className="description">This AI Brain will detect faces</p>
      <div>
        <input
          type="text"
          placeholder="IMAGE URL..."
          value={imageUrl}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>SCAN FOR FACE</button>
      </div>
    </div>
  )
}

export default ImageLinkForm
