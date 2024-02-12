import React from 'react'
import './imageLinkForm.css'

const ImageLinkForm = () => {
  return (
    <div className="image-link-form">
      <p className="description">This AI Brain will detect faces</p>
      <div>
        <input type="text" placeholder="IMAGE URL..." />
        <button>SCAN FOR FACE</button>
      </div>
    </div>
  )
}

export default ImageLinkForm
