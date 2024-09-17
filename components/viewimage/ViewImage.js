import React from 'react'

const ViewImage = ({image}) => {
  return (
    <>
        <div className="catalogueImgWrap mb-3">
                  <img
                    src={
                      image
                        ? image
                        : "/ele-devices.jpg"
                    }
                    className="CatalogueProductImg"
                  />
                  {/* <div className="customUploaderWrap">
                    <label htmlFor="uploadInput">
                      <i className="fe fe-upload"></i>
                      <input
                        style={{
                          pointerEvents: "auto",
                          backgroundColor: "white",
                        }}
                        type="file"
                        id="uploadInput"
                      />
                    </label>
                  </div> */}
                </div>

    </>
    
)
}

export default ViewImage