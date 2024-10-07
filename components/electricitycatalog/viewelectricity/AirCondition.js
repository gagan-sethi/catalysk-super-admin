import Link from "next/link";
import React, { useEffect, useState } from "react";
import Carousels from "../../carousels/Carousels";
import MediaCarousel from "../../carousels/MediaCarousels";

const AirCondition = ({ id, viewElectricProduct, setViewElectricProduct }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (
      viewElectricProduct &&
      (!Array.isArray(viewElectricProduct?.product_link) ||
        viewElectricProduct?.product_link.length === 0)
    ) {
      setViewElectricProduct({
        ...viewElectricProduct,
        product_link: Array.isArray(viewElectricProduct?.product_link)
          ? viewElectricProduct?.product_link
          : viewElectricProduct?.product_link
          ? [viewElectricProduct?.product_link]
          : [""], // Fallback to empty string if product_link is falsy
      });
    }
  }, [viewElectricProduct, setViewElectricProduct]);

  console.log();
  return (
    <div>
      <div
        class="modal fade"
        id={id}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                View Product
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => setViewElectricProduct({})}
              > </button>
            </div>
            <div class="modal-body">
              <div className="view-mdl only-view">
                {/* image view started */}
                <div className="catalogueImgWrap mb-3">
                  {viewElectricProduct?.product_images &&
                    viewElectricProduct?.product_images.length > 0 && (
                      <div>
                        <MediaCarousel
                          mediaUrls={viewElectricProduct?.product_images}
                        />
                      </div>
                    )}
                </div>
                {/* end */}
                {/* <div className="catalogueImgWrap mb-3">
                  <img
                    src={
                      viewElectricProduct?.product_images?.length > 0
                        ? viewElectricProduct?.product_images[0]
                        : "/ele-devices.jpg"
                    }
                    className="CatalogueProductImg"
                  />
                </div> */}
                <div className="row">
                  <div className="col-lg-12">
                    <div className="d-flex align-items-end mb-3 gap-2">
                      <div className="form-group flex-grow-1">
                        <div className="form-group flex-grow-1">
                          <label className="mb-3">product images</label>
                          {viewElectricProduct?.product_images &&
                            viewElectricProduct?.product_images?.map(
                              (ele, index) => (
                                <div key={index} className="d-flex mb-2">
                                  {console.log("ele", ele)}

                                  <input
                                    value={ele}
                                    type="text"
                                    className="form-control"
                                    readOnly
                                  />

                                  <div className="actions-bttns ms-2">
                                    <Link
                                      href={ele || "#"}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      <span>
                                        <i className="fe fe-link"></i>
                                      </span>
                                    </Link>
                                  </div>
                                </div>
                              )
                            )}
                        </div>

                        <label className="mb-3">Product link</label>

                        {Array.isArray(viewElectricProduct?.product_link) &&
                          viewElectricProduct?.product_link?.map(
                            (ele, index) => (
                              <div key={index} className="d-flex mb-2">
                                {console.log("ele", ele)}

                                <input
                                  className="form-control"
                                  value={ele}
                                  // value="https://www.amazon.in/Samsung-Inverter-Convertible-Anti-bacterial-AR12CY5ZAGD/dp/B0BSGSCNV9/ref=sr_1_9?crid=24O5MBDXDYFA4&dib=eyJ2IjoiMSJ9.DbEqI-AQuCkRIxEy8LIWy4gaYGx_8ppzMvtfawXlWmdL2lJCYh1gTrbqVlLJYkhn8zwHDk0jzhOEOPavo_hNH5bnhkpgU9t2F24a6FNKpO6JDxpZcXHHrxYXlz4r-ljGFbBFUVWR9A_2PkdUFyUgrdx7lcM2UH5Pm1gTirubfQmUa0JNu1-aRH2lT0Hdkc6aSeWvF01qMYUlwkoAyCRH1uOzgk-oh7Nh1yPNPN5-5R0.UTqpID8eFnYBPLCgLeY1nVLy5pbJlcSN0TdPeFWVwSI&dib_tag=se&keywords=air+conditioner&qid=1710930918&refinements=p_n_feature_five_browse-bin%3A28237214031%2Cp_n_feature_thirteen_browse-bin%3A2753048031%2Cp_72%3A1318476031%2Cp_n_feature_eleven_browse-bin%3A2753097031&rnid=2753095031&s=kitchen&sprefix=air+conditioner%2Caps%2C273&sr=1-9"
                                />

                                <div className="actions-bttns ms-2">
                                  <Link
                                    href={ele || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <span>
                                      {" "}
                                      <i className="fe fe-link "></i>
                                    </span>
                                  </Link>
                                </div>
                              </div>
                            )
                          )}

                        {/* <input
                          className="form-control"
                          value={viewElectricProduct?.product_link}
                          // value="https://www.amazon.in/Samsung-Inverter-Convertible-Anti-bacterial-AR12CY5ZAGD/dp/B0BSGSCNV9/ref=sr_1_9?crid=24O5MBDXDYFA4&dib=eyJ2IjoiMSJ9.DbEqI-AQuCkRIxEy8LIWy4gaYGx_8ppzMvtfawXlWmdL2lJCYh1gTrbqVlLJYkhn8zwHDk0jzhOEOPavo_hNH5bnhkpgU9t2F24a6FNKpO6JDxpZcXHHrxYXlz4r-ljGFbBFUVWR9A_2PkdUFyUgrdx7lcM2UH5Pm1gTirubfQmUa0JNu1-aRH2lT0Hdkc6aSeWvF01qMYUlwkoAyCRH1uOzgk-oh7Nh1yPNPN5-5R0.UTqpID8eFnYBPLCgLeY1nVLy5pbJlcSN0TdPeFWVwSI&dib_tag=se&keywords=air+conditioner&qid=1710930918&refinements=p_n_feature_five_browse-bin%3A28237214031%2Cp_n_feature_thirteen_browse-bin%3A2753048031%2Cp_72%3A1318476031%2Cp_n_feature_eleven_browse-bin%3A2753097031&rnid=2753095031&s=kitchen&sprefix=air+conditioner%2Caps%2C273&sr=1-9"
                        /> */}
                      </div>
                      {/* <Link
                        href={viewElectricProduct?.product_link}
                        className="copyBtn"
                      >
                        <i className="fe fe-copy"></i>
                      </Link> */}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">Brand</label>
                      <input
                        className="form-control"
                        value={viewElectricProduct?.brand}
                        // value="Blue star"
                        readonly
                      />
                    </div>
                  </div>
                  {/* <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">Iseer</label>
                      <input
                        className="form-control"
                        value={viewElectricProduct?.iseer ?? ""}
                        // value="5.15"
                        readonly
                      />
                    </div>
                  </div> */}
                  {/* <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">CFM</label>
                      <input
                        className="form-control"
                        //  value="0"
                        value={viewElectricProduct?.cfm}
                        readonly
                      />
                    </div> */}
                  {/* </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">AEC (kwh)</label>
                      <input
                        className="form-control"
                        value={viewElectricProduct?.aec}
                        readonly
                      />
                    </div>
                  </div> */}
                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">Efficient Percentage</label>
                      <input
                        className="form-control"
                        value={viewElectricProduct?.efficient_percentage}
                        readonly
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">Price</label>
                      <input
                        className="form-control"
                        //  value="38990"
                        value={viewElectricProduct?.price}
                        readonly
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">Customer rating</label>
                      <input
                        className="form-control"
                        //  value="4.1"
                        value={viewElectricProduct?.customer_rating}
                        readonly
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">No. of ratings</label>
                      <input
                        className="form-control"
                        value={viewElectricProduct?.no_of_ratings}
                        readonly
                      />
                    </div>
                  </div>
                  {/* <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">Noise level rating</label>
                      <input
                        className="form-control"
                        value={viewElectricProduct?.noise_level_rating}
                        readonly
                      />
                    </div>
                  </div> */}
                  {/* <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">Energy efficiency rating</label>
                      <input
                        className="form-control"
                        value={viewElectricProduct?.energy_efficiency_rating}
                        readonly
                      />
                    </div>
                  </div> */}
                  {/* <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">Noise</label>
                      <input
                        className="form-control"
                        value={viewElectricProduct?.noise}
                        readonly
                      />
                    </div>
                  </div> */}
                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">
                        Calculation - watts per hour
                      </label>
                      <input
                        className="form-control"
                        //  value="300.9"
                        value={viewElectricProduct?.watt_per_hour}
                        readonly
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group mb-3">
                      <label htmlFor="review" className="mb-3">
                        Comments
                      </label>
                      <textarea
                        id="review"
                        value={viewElectricProduct?.comments || ""}
                        name="w3review"
                        cols="11"
                        rows="5"
                        readOnly
                        className="form-control" // Add this class for styling if needed
                        style={{ overflowY: "auto", maxHeight: "200px" }}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              {/* <button
                type="button"
                class="btn btn-primary"
                data-bs-target="#edit-mddl"
                data-bs-dismiss="modal"
                data-bs-toggle="modal"
              >
                Edit
              </button> */}
              <button
                type="button"
                class="btn btn-outline-white"
                data-bs-dismiss="modal"
                onClick={() => setViewElectricProduct({})}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirCondition;
