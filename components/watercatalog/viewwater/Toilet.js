// import Link from "next/link";
// import React from "react";

// const Toilet = ({ id, viewWaterProduct, setViewWaterProduct }) => {
//   return (
//     <div>
//       <div
//         class="modal fade"
//         id={id}
//         tabindex="-1"
//         aria-labelledby="exampleModalLabel"
//         aria-hidden="true"
//       >
//         <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
//           <div class="modal-content">
//             <div class="modal-header">
//               <h1 class="modal-title fs-5" id="exampleModalLabel">
//                 View Product
//               </h1>
//               <button
//                 type="button"
//                 class="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//                 onClick={() => setViewWaterProduct({})}
//               ></button>
//             </div>
//             <div class="modal-body">
//               <div className="view-mdl only-view">
//                 <div className="catalogueImgWrap mb-3">
//                   <img
//                     src={
//                       viewWaterProduct?.product_images?.length > 0
//                         ? viewWaterProduct?.product_images[0]
//                         : "/ele-devices.jpg"
//                     }
//                     // src="https://static.toiimg.com/thumb/msid-110356258,width-1280,height-720,resizemode-4/110356258.jpg"
//                     className="CatalogueProductImg"
//                   />
//                 </div>
//                 <div className="row">
//                   <div className="col-lg-12">
//                     <div className="d-flex align-items-end mb-3 gap-2">
//                       <div className="form-group flex-grow-1">
//                         <div className="form-group flex-grow-1">
//                           <label className="mb-3">product images</label>
//                           {viewWaterProduct?.product_images &&
//                             viewWaterProduct?.product_images?.map(
//                               (ele, index) => (
//                                 <div key={index} className="d-flex mb-2">
//                                   {console.log("ele", ele)}

//                                   <input
//                                     value={ele}
//                                     type="text"
//                                     className="form-control"
//                                     readOnly
//                                   />

//                                   <div className="actions-bttns ms-2">
//                                     <a
//                                       href={ele || "#"}
//                                       target="_blank"
//                                       rel="noopener noreferrer"
//                                     >
//                                       <span>
//                                         <i className="fe fe-link"></i>
//                                       </span>
//                                     </a>
//                                   </div>
//                                 </div>
//                               )
//                             )}
//                         </div>

//                         <label className="mb-3">Product link</label>

//                         {viewWaterProduct?.product_link &&
//                           viewWaterProduct?.product_link.map((ele, index) => (
//                             <div key={index} className="d-flex mb-2">
//                               {console.log("ele", ele)}

//                               <input
//                                 className="form-control"
//                                 value={ele}
//                                 // value="https://www.amazon.in/Samsung-Inverter-Convertible-Anti-bacterial-AR12CY5ZAGD/dp/B0BSGSCNV9/ref=sr_1_9?crid=24O5MBDXDYFA4&dib=eyJ2IjoiMSJ9.DbEqI-AQuCkRIxEy8LIWy4gaYGx_8ppzMvtfawXlWmdL2lJCYh1gTrbqVlLJYkhn8zwHDk0jzhOEOPavo_hNH5bnhkpgU9t2F24a6FNKpO6JDxpZcXHHrxYXlz4r-ljGFbBFUVWR9A_2PkdUFyUgrdx7lcM2UH5Pm1gTirubfQmUa0JNu1-aRH2lT0Hdkc6aSeWvF01qMYUlwkoAyCRH1uOzgk-oh7Nh1yPNPN5-5R0.UTqpID8eFnYBPLCgLeY1nVLy5pbJlcSN0TdPeFWVwSI&dib_tag=se&keywords=air+conditioner&qid=1710930918&refinements=p_n_feature_five_browse-bin%3A28237214031%2Cp_n_feature_thirteen_browse-bin%3A2753048031%2Cp_72%3A1318476031%2Cp_n_feature_eleven_browse-bin%3A2753097031&rnid=2753095031&s=kitchen&sprefix=air+conditioner%2Caps%2C273&sr=1-9"
//                               />

//                               <div className="actions-bttns ms-2">
//                                 <Link href={ele || "#"}>
//                                   <span>
//                                     {" "}
//                                     <i className="fe fe-link "></i>
//                                   </span>
//                                 </Link>
//                               </div>
//                             </div>
//                           ))}

//                         {/* <input
//                           className="form-control"
//                           value={viewWaterProduct?.product_link}
//                           // value="https://www.amazon.in/Samsung-Inverter-Convertible-Anti-bacterial-AR12CY5ZAGD/dp/B0BSGSCNV9/ref=sr_1_9?crid=24O5MBDXDYFA4&dib=eyJ2IjoiMSJ9.DbEqI-AQuCkRIxEy8LIWy4gaYGx_8ppzMvtfawXlWmdL2lJCYh1gTrbqVlLJYkhn8zwHDk0jzhOEOPavo_hNH5bnhkpgU9t2F24a6FNKpO6JDxpZcXHHrxYXlz4r-ljGFbBFUVWR9A_2PkdUFyUgrdx7lcM2UH5Pm1gTirubfQmUa0JNu1-aRH2lT0Hdkc6aSeWvF01qMYUlwkoAyCRH1uOzgk-oh7Nh1yPNPN5-5R0.UTqpID8eFnYBPLCgLeY1nVLy5pbJlcSN0TdPeFWVwSI&dib_tag=se&keywords=air+conditioner&qid=1710930918&refinements=p_n_feature_five_browse-bin%3A28237214031%2Cp_n_feature_thirteen_browse-bin%3A2753048031%2Cp_72%3A1318476031%2Cp_n_feature_eleven_browse-bin%3A2753097031&rnid=2753095031&s=kitchen&sprefix=air+conditioner%2Caps%2C273&sr=1-9"
//                         /> */}
//                       </div>
//                       {/* <Link
//                         href={viewWaterProduct?.product_link}
//                         className="copyBtn"
//                       >
//                         <i className="fe fe-copy"></i>
//                       </Link> */}
//                     </div>
//                   </div>
//                   <div className="col-lg-6">
//                     <div className="form-group mb-3">
//                       <label className="mb-3">Brand</label>
//                       <input
//                         className="form-control"
//                         value={viewWaterProduct?.brand}
//                         // value="Blue star"
//                         readonly
//                       />
//                     </div>
//                   </div>
//                   <div className="col-lg-6">
//                     <div className="form-group mb-3">
//                       <label className="mb-3">Iseer</label>
//                       <input
//                         className="form-control"
//                         value={viewWaterProduct?.iseer ?? ""}
//                         // value="5.15"
//                         readonly
//                       />
//                     </div>
//                   </div>
//                   <div className="col-lg-6">
//                     <div className="form-group mb-3">
//                       <label className="mb-3">CFM</label>
//                       <input
//                         className="form-control"
//                         //  value="0"
//                         value={viewWaterProduct?.cfm}
//                         readonly
//                       />
//                     </div>
//                   </div>
//                   <div className="col-lg-6">
//                     <div className="form-group mb-3">
//                       <label className="mb-3">AEC (kwh)</label>
//                       <input
//                         className="form-control"
//                         value={viewWaterProduct?.aec}
//                         readonly
//                       />
//                     </div>
//                   </div>
//                   <div className="col-lg-6">
//                     <div className="form-group mb-3">
//                       <label className="mb-3">Power consumption per hour</label>
//                       <input
//                         className="form-control"
//                         value={viewWaterProduct?.power_consumption_per_hour}
//                         readonly
//                       />
//                     </div>
//                   </div>
//                   <div className="col-lg-6">
//                     <div className="form-group mb-3">
//                       <label className="mb-3">Price</label>
//                       <input
//                         className="form-control"
//                         //  value="38990"
//                         value={viewWaterProduct?.price}
//                         readonly
//                       />
//                     </div>
//                   </div>
//                   <div className="col-lg-6">
//                     <div className="form-group mb-3">
//                       <label className="mb-3">Customer rating</label>
//                       <input
//                         className="form-control"
//                         //  value="4.1"
//                         value={viewWaterProduct?.customer_rating}
//                         readonly
//                       />
//                     </div>
//                   </div>
//                   <div className="col-lg-6">
//                     <div className="form-group mb-3">
//                       <label className="mb-3">Noise level rating</label>
//                       <input
//                         className="form-control"
//                         value={viewWaterProduct?.noise_level_rating}
//                         readonly
//                       />
//                     </div>
//                   </div>
//                   <div className="col-lg-6">
//                     <div className="form-group mb-3">
//                       <label className="mb-3">Energy efficiency rating</label>
//                       <input
//                         className="form-control"
//                         value={viewWaterProduct?.energy_efficiency_rating}
//                         readonly
//                       />
//                     </div>
//                   </div>
//                   <div className="col-lg-6">
//                     <div className="form-group mb-3">
//                       <label className="mb-3">Noise</label>
//                       <input
//                         className="form-control"
//                         value={viewWaterProduct?.noise}
//                         readonly
//                       />
//                     </div>
//                   </div>
//                   <div className="col-lg-6">
//                     <div className="form-group mb-3">
//                       <label className="mb-3">
//                         Calculation - watts per hour
//                       </label>
//                       <input
//                         className="form-control"
//                         //  value="300.9"
//                         value={viewWaterProduct?.watt_per_hour}
//                         readonly
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div class="modal-footer">
//               {/* <button
//                 type="button"
//                 class="btn btn-primary"
//                 data-bs-target="#edit-mddl"
//                 data-bs-dismiss="modal"
//                 data-bs-toggle="modal"
//               >
//                 Edit
//               </button> */}
//               <button
//                 type="button"
//                 class="btn btn-outline-white"
//                 data-bs-dismiss="modal"
//                 onClick={() => setViewWaterProduct({})}
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Toilet;



import Link from "next/link";
import React,{useEffect} from "react";
import MediaCarousel from "../../carousels/MediaCarousels";

const Toilet = ({ id, viewWaterProduct, setViewWaterProduct }) => {

  useEffect(() => {
    if (
      viewWaterProduct &&
      (!Array.isArray(viewWaterProduct?.product_link) ||
        viewWaterProduct?.product_link.length === 0)
    ) {
      setViewWaterProduct({
        ...viewWaterProduct,
        product_link: Array.isArray(viewWaterProduct?.product_link)
          ? viewWaterProduct?.product_link
          : viewWaterProduct?.product_link
          ? [viewWaterProduct?.product_link]
          : [""], // Fallback to empty string if product_link is falsy
      });
    }
  
  }, [viewWaterProduct, setViewWaterProduct]);
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
                onClick={() => setViewWaterProduct({})}
              ></button>
            </div>
            <div class="modal-body">
              <div className="view-mdl only-view">
                <div className="catalogueImgWrap mb-3">

                {viewWaterProduct?.product_images &&
                    viewWaterProduct?.product_images.length > 0 && (
                      <div>
                        {console.log("carouseltoileturl",viewWaterProduct?.product_images)}
                        <MediaCarousel
                          mediaUrls={viewWaterProduct?.product_images}
                        />
                      </div>
                    )}
                  {/* <img
                    src={
                      viewWaterProduct?.product_images?.length > 0
                        ? viewWaterProduct?.product_images[0]
                        : "/ele-devices.jpg"
                    }
                   
                    className="CatalogueProductImg"
                  /> */}
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="d-flex align-items-end mb-3 gap-2">
                      <div className="form-group flex-grow-1">
                        <div className="form-group flex-grow-1">
                          <label className="mb-3">product images</label>
                          {viewWaterProduct.product_images &&
                            viewWaterProduct.product_images.map(
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

                        {Array.isArray(viewWaterProduct?.product_link) &&
                          viewWaterProduct?.product_link?.map((ele,index)=>(
                            <div key={index} className="d-flex mb-2">
                              {console.log("ele", ele)}

                              <input
                                className="form-control"
                                value={ele}
                                // value="https://www.amazon.in/Samsung-Inverter-Convertible-Anti-bacterial-AR12CY5ZAGD/dp/B0BSGSCNV9/ref=sr_1_9?crid=24O5MBDXDYFA4&dib=eyJ2IjoiMSJ9.DbEqI-AQuCkRIxEy8LIWy4gaYGx_8ppzMvtfawXlWmdL2lJCYh1gTrbqVlLJYkhn8zwHDk0jzhOEOPavo_hNH5bnhkpgU9t2F24a6FNKpO6JDxpZcXHHrxYXlz4r-ljGFbBFUVWR9A_2PkdUFyUgrdx7lcM2UH5Pm1gTirubfQmUa0JNu1-aRH2lT0Hdkc6aSeWvF01qMYUlwkoAyCRH1uOzgk-oh7Nh1yPNPN5-5R0.UTqpID8eFnYBPLCgLeY1nVLy5pbJlcSN0TdPeFWVwSI&dib_tag=se&keywords=air+conditioner&qid=1710930918&refinements=p_n_feature_five_browse-bin%3A28237214031%2Cp_n_feature_thirteen_browse-bin%3A2753048031%2Cp_72%3A1318476031%2Cp_n_feature_eleven_browse-bin%3A2753097031&rnid=2753095031&s=kitchen&sprefix=air+conditioner%2Caps%2C273&sr=1-9"
                              />

                              <div className="actions-bttns ms-2">
                                <Link href={ele || "#"}>
                                  <span>
                                    {" "}
                                    <i className="fe fe-link "></i>
                                  </span>
                                </Link>
                              </div>
                            </div>
                          ))}

                        {/* <input
                          className="form-control"
                          value={viewWaterProduct?.product_link}
                          // value="https://www.amazon.in/Samsung-Inverter-Convertible-Anti-bacterial-AR12CY5ZAGD/dp/B0BSGSCNV9/ref=sr_1_9?crid=24O5MBDXDYFA4&dib=eyJ2IjoiMSJ9.DbEqI-AQuCkRIxEy8LIWy4gaYGx_8ppzMvtfawXlWmdL2lJCYh1gTrbqVlLJYkhn8zwHDk0jzhOEOPavo_hNH5bnhkpgU9t2F24a6FNKpO6JDxpZcXHHrxYXlz4r-ljGFbBFUVWR9A_2PkdUFyUgrdx7lcM2UH5Pm1gTirubfQmUa0JNu1-aRH2lT0Hdkc6aSeWvF01qMYUlwkoAyCRH1uOzgk-oh7Nh1yPNPN5-5R0.UTqpID8eFnYBPLCgLeY1nVLy5pbJlcSN0TdPeFWVwSI&dib_tag=se&keywords=air+conditioner&qid=1710930918&refinements=p_n_feature_five_browse-bin%3A28237214031%2Cp_n_feature_thirteen_browse-bin%3A2753048031%2Cp_72%3A1318476031%2Cp_n_feature_eleven_browse-bin%3A2753097031&rnid=2753095031&s=kitchen&sprefix=air+conditioner%2Caps%2C273&sr=1-9"
                        /> */}
                      </div>
                      {/* <Link
                        href={viewWaterProduct?.product_link}
                        className="copyBtn"
                      >
                        <i className="fe fe-copy"></i>
                      </Link> */}
                    </div>
                  </div>

                  {/* <div className="col-lg-6">
                    <div className="form-group mb-3"> */}
                  {/* <label className="mb-3">company url</label>
                  <div className="d-flex mb-2">

                    <input
                      className="form-control"
                      value={viewWaterProduct?.company_url}
                    />

                    <div className="actions-bttns ms-2">
                      <Link href={viewWaterProduct?.company_url || "#"}>
                        <span>
                          {" "}
                          <i className="fe fe-link "></i>
                        </span>
                      </Link>
                    </div>
                  </div> */}
                  {/* <input
                        className="form-control"
                        //  value="4.1"
                        value={viewWaterProduct?.company_url}
                        readonly
                      />
                    </div>
                  </div> */}

                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">Brand</label>
                      <input
                        className="form-control"
                        value={viewWaterProduct?.brand}
                        // value="Blue star"
                        readonly
                      />
                    </div>
                  </div>
                  {/* <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">color</label>
                     { viewWaterProduct?.colour && viewWaterProduct?.colour?.map((ele,index) => (
                        <>
                        <input
                        className="form-control"
                        value={ele ?? ""}
                        // value="5.15"
                        readonly
                      />
                        </>
                      ))}
            
                    </div>
                  </div> */}

                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">Price</label>
                      <input
                        className="form-control"
                        //  value="38990"
                        value={viewWaterProduct?.price}
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
                        value={viewWaterProduct?.customer_rating}
                        readonly
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">No. of ratings</label>
                      <input
                        className="form-control"
                        value={viewWaterProduct?.no_of_ratings}
                        readonly
                      />
                    </div>

                  
        
                  </div>
       

                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">Efficient percentage</label>
                      <input
                        className="form-control"
                        //  value="300.9"
                        value={viewWaterProduct?.efficient_percentage}
                        readonly
                      />
                    </div>
                  </div>
               

                  {/* <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">Modal name</label>
                      <input
                        className="form-control"
                        //  value="4.1"
                        value={viewWaterProduct?.model_name}
                        readonly
                      />
                    </div> */}
                  {/* </div> */}
                  {/* <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">Flow</label>
                      <input
                        className="form-control"
                        //  value="4.1"
                        value={viewWaterProduct?.flow_litre_per_minute}
                        readonly
                      />
                    </div>
                  </div> */}

                  {/* <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">Price on company site</label>
                      <input
                        className="form-control"
                        //  value="4.1"
                        value={viewWaterProduct?.price_on_company_site}
                        readonly
                      />
                    </div>
                  </div> */}
                  {/* <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">company url</label>
                      <input
                        className="form-control"
                        //  value="4.1"
                        value={viewWaterProduct?.company_url}
                        readonly
                      />
                    </div>
                  </div> */}
                  {/* <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">Blade length</label>
                      <input
                        className="form-control"
                        //  value="4.1"
                        value={viewWaterProduct?.blade_length}
                        readonly
                      />
                    </div>
                  </div> */}
                  {/* <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">Remote</label>
                      <input
                        className="form-control"
                        //  value="4.1"
                        value={viewWaterProduct?.remote}
                        readonly
                      />
                    </div>
                  </div> */}

                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">Comments</label>
                      <input
                        className="form-control"
                        //  value="300.9"
                        value={
                          viewWaterProduct?.comments ?? "Not Available"
                        }
                        readonly
                      />
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
                onClick={() => setViewWaterProduct({})}
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

export default Toilet;

