import React from "react";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";

import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import { handleApi, hello } from "utils/apis/handleApi.js";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const AirConditionEdit = ({
  id,
  viewElectricProduct,
  setViewElectricProduct,
  setPageRender,
}) => {
  const modalEditRef = useRef();
  // const modalDeleteRef = useRef();
  const router = useRouter();
  const validationSchema = Yup.object().shape({
    product_link: Yup.array()
      .of(Yup.string())
      .min(1, "At least one product link is required")
      .required("At least one product link is required"),
    product_images: Yup.array()
      .of(Yup.string())
      .min(1, "At least one product image link is required")
      .required("At least one product link is required"),
    brand: Yup.string().required("Brand is required"),
    // iseer: Yup.number()
    //   .required("Iseer is required")
    //   .positive("Iseer must be positive"),
    // cfm: Yup.number("CFM must be number").positive("CFM must be positive"),
    // aec: Yup.number("AEC must be number")
    //   .required("AEC is required")
    //   .positive("AEC must be positive"),
    // power_consumption_per_hour: Yup.number()
    //   .required("Power consumption is required")
    //   .positive("Must be positive"),
    no_of_ratings: Yup.number().positive("Must be positive"),
    price: Yup.number()
      .required("Price is required")
      .positive("Must be positive"),
    customer_rating: Yup.number()
      .required("Rating is required")
      .min(1, "Min rating is 1")
      .max(5, "Max rating is 5"),
    // noise_level_rating: Yup.number().positive("Must be positive"),
    efficient_percentage: Yup.number().positive("Must be positive"),
    comments: Yup.string().required("Noise is required"),
    watt_per_hour: Yup.number()
      .required("Watts per hour is required")
      .positive("Must be positive"),
  });
  // console.log("viewElectricProduct", viewElectricProduct.product_link);

  let initialValues = {
    product_images: [""],
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
  });

  const handleEdit = async () => {
    formik.setTouched(
      Object.keys(formik.values).reduce((acc, fieldName) => {
        acc[fieldName] = true;
        return acc;
      }, {})
    );

    formik.validateForm().then(async (errors) => {
      if (Object.keys(errors).length === 0) {
        console.log("errors", errors);
        let postdata = formik?.values;
        postdata = { ...formik?.values, product_link: formik?.values.product_link[0] };
        console.log("postdata", postdata);


        const response = await handleApi(
          `catalogue/editProducts/${viewElectricProduct._id}`,
          "PATCH",
          postdata,
          {},
          true,
          false,
          router
        );

        if (response?.code == 200) {
          toast?.success(response.message);
          // router.push("pages/electricity-catalogue")
          formik.resetForm();
          setViewElectricProduct({});
          setPageRender((old) => old + 1);
          const modalElement = modalEditRef.current;
          console.log("modalElement", modalElement);
          const modalInstance = bootstrap.Modal.getInstance(modalElement);
          console.log("modalInstance", modalInstance);
          if (modalInstance) {
            modalInstance.hide();
          }
        }
      }
    });
  };

  const handleRemoveLink = (index) => {
    const media = [...formik.values.product_link];
    if (media.length == 1) {
      // formik.setFieldTouched("product_images[0]", true);
      formik.setFieldError(
        "product_link",
        "At least one product link is required"
      );
      return;
    }
    media.splice(index, 1);
    formik.setFieldValue("product_link", media);
    // handleCustomError();
  };

  const handleAddLink = (index) => {
    const media = [...formik.values.product_link];
    media.push("");
    formik.setFieldValue("product_link", media);
    // handleCustomError();
  };

  const handleRemoveImages = (index) => {
    const media = [...formik.values.product_images];
    if (media.length == 1) {
      // formik.setFieldTouched("product_images[0]", true);
      formik.setFieldError(
        "product_images",
        "At least one product image is required"
      );
      return;
    }
    media.splice(index, 1);
    formik.setFieldValue("product_images", media);
    // handleCustomError();
  };

  const handleAddImages = (index) => {
    const media = [...formik.values.product_images];
    media.push("");
    formik.setFieldValue("product_images", media);
  };
  useEffect(() => {
    if (viewElectricProduct) {
      formik.setValues({
        brand: viewElectricProduct?.brand || "",
        // iseer: viewElectricProduct?.iseer || "",
        // cfm: viewElectricProduct?.cfm || "",
        // aec: viewElectricProduct?.aec || "",
        // power_consumption_per_hour:
        // viewElectricProduct?.power_consumption_per_hour || "",
        price: viewElectricProduct?.price || "",
        customer_rating: viewElectricProduct?.customer_rating || "",
        no_of_ratings: viewElectricProduct?.no_of_ratings || "",
        // noise_level_rating: viewElectricProduct?.noise_level_rating || "",
        efficient_percentage: viewElectricProduct?.efficient_percentage || "",
        comments: viewElectricProduct?.comments || "",
        watt_per_hour: viewElectricProduct?.watt_per_hour || "",

        // product_link: viewElectricProduct.product_link || [""],
        product_link: Array.isArray(viewElectricProduct.product_link)
          ? viewElectricProduct.product_link
          : [viewElectricProduct.product_link] || [""],
        product_images: viewElectricProduct.product_images || [""],
      });
    }
  }, [viewElectricProduct]);

  console.log("comments", viewElectricProduct);
  console.log("formikvalues", formik.values.product_link);
  return (
    <div>
      {/* <!--Edit Modal --> */}
      <div
        class="modal fade"
        id={id}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        ref={modalEditRef}
      >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Edit Product
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  setViewElectricProduct({});
                }}
              ></button>
            </div>
            <div class="modal-body">
              <div className="view-mdl only-view">
                <div className="catalogueImgWrap mb-3">
                  <img
                    src={
                      viewElectricProduct?.product_images?.length > 0
                        ? viewElectricProduct?.product_images[0]
                        : "/ele-devices.jpg"
                    }
                    // src="https://static.toiimg.com/thumb/msid-110356258,width-1280,height-720,resizemode-4/110356258.jpg"
                    className="CatalogueProductImg"
                  />
                  <div className="customUploaderWrap">
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
                  </div>
                </div>

                <div className="form-group flex-grow-1">
                  <label className="mb-3">product images</label>
                  {formik.values.product_images &&
                    formik.values.product_images.map((ele, index) => (
                      <div key={index} className="d-flex mb-2">
                        {console.log("ele", ele)}
                        {/* <div> */}
                        <input
                          style={{
                            pointerEvents: "auto",
                            backgroundColor: "white",
                          }}
                          type="text"
                          className="form-control"
                          // Bind the value of the input field with Formik's field array value
                          {...formik.getFieldProps(`product_images.${index}`)}
                        />
                        {formik.touched.product_images &&
                          formik.errors.product_images &&
                          formik.errors.product_images[index] && (
                            <div className="text-danger d-block">
                              {formik.errors.product_images[index]}
                            </div>
                          )}
                        {formik.errors.product_images &&
                          formik?.errors?.product_images && (
                            <div className="text-danger d-block">
                              {formik?.errors?.product_images}
                            </div>
                          )}
                        {/* </div> */}
                        <div className="actions-bttns">
                          <Link
                            href={ele ?? "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span>
                              {" "}
                              <i className="fe fe-link"></i>
                            </span>
                          </Link>
                          {index == 0 && (
                            <span onClick={() => handleAddImages(index)}>
                              {" "}
                              <i className="fe fe-plus"></i>
                            </span>
                          )}
                          <span
                            // data-bs-toggle="modal"
                            // data-bs-target="#delete-mddl"
                            onClick={() => handleRemoveImages(index)}
                          >
                            {" "}
                            <i className="fe fe-trash"></i>
                          </span>
                        </div>
                      </div>
                    ))}

                  {/* {`formik.errors.product_images.${index}`} */}
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="d-flex align-items-end mb-3 gap-2">
                      <div className="form-group flex-grow-1">
                        <label className="mb-3">Product link</label>
                        {Array.isArray(formik?.values?.product_link) &&
                          formik.values.product_link.map((ele, index) => (
                            <div key={index} className="d-flex mb-2">
                              <input
                                style={{
                                  pointerEvents: "auto",
                                  backgroundColor: "white",
                                }}
                                type="text"
                                className="form-control"
                                // Bind the value of the input field with Formik's field array value
                                {...formik.getFieldProps(
                                  `product_link.${index}`
                                )}
                              />
                              <div className="actions-bttns">
                                <Link
                                  href={ele ?? "#"}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <span>
                                    <i className="fe fe-link"></i>
                                  </span>
                                </Link>
                                {/* {index == 0 && (
                                  <span onClick={() => handleAddLink(index)}>
                                    {" "}
                                    <i className="fe fe-plus"></i>
                                  </span>
                                )} */}
                                {/* <span
                                  // data-bs-toggle="modal"
                                  // data-bs-target="#delete-mddl"
                                  onClick={() => handleRemoveLink(index)}
                                >
                                  {" "}
                                  <i className="fe fe-trash"></i>
                                </span> */}
                              </div>
                            </div>
                          ))}
                        {formik.errors.product_link &&
                          formik?.errors?.product_link && (
                            <div className="text-danger d-block">
                              {formik?.errors?.product_link[0]}
                            </div>
                          )}
                      </div>

                      {/* <button
                       
                        className="copyBtn"
                      >
                        <i className="fe fe-copy"></i>
                      </button> */}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">Brand</label>
                      <input
                        style={{
                          pointerEvents: "auto",
                          backgroundColor: "white",
                        }}
                        type="text"
                        className="form-control"
                        // value={formik?.values?.brand}

                        {...formik.getFieldProps("brand")}
                      />
                      {formik.touched.brand && formik.errors.brand && (
                        <small className="text-danger">
                          {formik.errors.brand}
                        </small>
                      )}
                    </div>
                  </div>

                  {/* <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">Iseer</label>
                      <input
                        style={{
                          pointerEvents: "auto",
                          backgroundColor: "white",
                        }}
                        type="text"
                        className="form-control"
                        // value={formik?.values?.iseer}

                        {...formik.getFieldProps("iseer")}
                      />
                      {formik.touched.iseer && formik.errors.iseer && (
                        <small className="text-danger">
                          {formik.errors.iseer}
                        </small>
                      )}
                    </div>
                  </div> */}
                  {/* <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">CFM</label>
                      <input
                        style={{
                          pointerEvents: "auto",
                          backgroundColor: "white",
                        }}
                        type="number"
                        className="form-control"
                        //  value="0"
                        // value={formik?.values?.cfm}

                        {...formik.getFieldProps("cfm")}
                      />
                      {formik.touched.cfm && formik.errors.cfm && (
                        <small className="text-danger">
                          {formik.errors.cfm}
                        </small>
                      )}
                    </div>
                  </div> */}
                  {/* <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">AEC (kwh)</label>
                      <input
                        style={{
                          pointerEvents: "auto",
                          backgroundColor: "white",
                        }}
                        type="number"
                        className="form-control"
                        // value={formik?.values?.aec}
                        {...formik.getFieldProps("aec")}
                      />
                      {formik.touched.aec && formik.errors.aec && (
                        <small className="text-danger">
                          {formik.errors.aec}
                        </small>
                      )}
                    </div>
                  </div> */}
                  {/* <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">Power consumption per hour</label>
                      <input
                        style={{
                          pointerEvents: "auto",
                          backgroundColor: "white",
                        }}
                        type="text"
                        className="form-control"
                        // value={formik?.values?.power_consumption_per_hour}
                        {...formik.getFieldProps("power_consumption_per_hour")}
                      />
                      {formik?.touched?.power_consumption_per_hour &&
                        formik?.errors?.power_consumption_per_hour && (
                          <small className="text-danger">
                            {formik?.errors.power_consumption_per_hour}
                          </small>
                        )}
                    </div>
                  </div> */}
                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">Price</label>
                      <input
                        style={{
                          pointerEvents: "auto",
                          backgroundColor: "white",
                        }}
                        type="number"
                        className="form-control"
                        //  value="38990"
                        // value={formik?.values?.price}

                        {...formik.getFieldProps("price")}
                      />
                      {formik?.touched?.price && formik?.errors?.price && (
                        <small className="text-danger">
                          {formik?.errors.price}
                        </small>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">Customer rating</label>
                      <input
                        style={{
                          pointerEvents: "auto",
                          backgroundColor: "white",
                        }}
                        type="number"
                        className="form-control"
                        //  value="4.1"
                        // value={formik?.values?.customer_rating}

                        {...formik.getFieldProps("customer_rating")}
                      />
                      {formik?.touched?.customer_rating &&
                        formik?.errors?.customer_rating && (
                          <small className="text-danger">
                            {formik?.errors.customer_rating}
                          </small>
                        )}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">No. of ratings</label>
                      <input
                        style={{
                          pointerEvents: "auto",
                          backgroundColor: "white",
                        }}
                        type="text"
                        className="form-control"
                        //  value={formik?.values?.no_of_ratings} />
                        {...formik.getFieldProps("no_of_ratings")}
                      />
                      {formik?.touched?.no_of_ratings &&
                        formik?.errors?.no_of_ratings && (
                          <small className="text-danger">
                            {formik?.errors.no_of_ratings}
                          </small>
                        )}
                    </div>
                  </div>
                  {/* <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">Noise level rating</label>
                      <input
                        style={{
                          pointerEvents: "auto",
                          backgroundColor: "white",
                        }}
                        type="text"
                        className="form-control"
                        //  value={formik?.values?.noise_level_rating} />
                        {...formik.getFieldProps("noise_level_rating")}
                      />
                      {formik?.touched?.noise_level_rating &&
                        formik?.errors?.noise_level_rating && (
                          <small className="text-danger">
                            {formik?.errors.noise_level_rating}
                          </small>
                        )}
                    </div>
                  </div> */}
                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">Efficient Percentage</label>
                      <input
                        style={{
                          pointerEvents: "auto",
                          backgroundColor: "white",
                        }}
                        type="text"
                        className="form-control"
                        // value={formik?.values?.efficient_percentage}
                        //  />
                        {...formik.getFieldProps("efficient_percentage")}
                      />
                      {formik?.touched?.efficient_percentage &&
                        formik?.errors?.efficient_percentage && (
                          <small className="text-danger">
                            {formik?.errors.efficient_percentage}
                          </small>
                        )}
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">
                        Calculation - watts per hour
                      </label>
                      <input
                        style={{
                          pointerEvents: "auto",
                          backgroundColor: "white",
                        }}
                        type="number"
                        className="form-control"
                        //  value="300.9"
                        // value={formik?.values?.watt_per_hour}

                        {...formik.getFieldProps("watt_per_hour")}
                      />
                      {formik?.touched?.watt_per_hour &&
                        formik?.errors?.watt_per_hour && (
                          <small className="text-danger">
                            {formik?.errors?.watt_per_hour}
                          </small>
                        )}
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group mb-3">
                      <label className="mb-3">Comments</label>
                      <textarea
                        style={{
                          pointerEvents: "auto",
                          backgroundColor: "white",
                          overflowY: "auto",
                        }}
                        className="form-control"
                        rows="4" // You can change this value to increase the default height of the textarea
                        {...formik.getFieldProps("comments")} // Spread Formik's props for the comments field
                      />
                      {formik?.touched?.comments &&
                        formik?.errors?.comments && (
                          <small className="text-danger">
                            {formik?.errors?.comments}
                          </small>
                        )}
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary"
                onClick={handleEdit}
              >
                Update
              </button>
              <button
                type="button"
                class="btn btn-outline-white"
                data-bs-dismiss="modal"
                onClick={() => {
                  setViewElectricProduct({});
                }}
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

export default AirConditionEdit;

{
  /* <div className="row">
                  <div className="col-lg-12">
                    <div className="d-flex align-items-end mb-3 gap-2">
                      <div className="form-group flex-grow-1">
                        <label className="mb-3">Product link</label>
                        <input  style={{ pointerEvents: 'auto', backgroundColor: 'white' }} type="text"
                          className="form-control"
                          value="https://www.amazon.in/Samsung-Inverter-Convertible-Anti-bacterial-AR12CY5ZAGD/dp/B0BSGSCNV9/ref=sr_1_9?crid=24O5MBDXDYFA4&dib=eyJ2IjoiMSJ9.DbEqI-AQuCkRIxEy8LIWy4gaYGx_8ppzMvtfawXlWmdL2lJCYh1gTrbqVlLJYkhn8zwHDk0jzhOEOPavo_hNH5bnhkpgU9t2F24a6FNKpO6JDxpZcXHHrxYXlz4r-ljGFbBFUVWR9A_2PkdUFyUgrdx7lcM2UH5Pm1gTirubfQmUa0JNu1-aRH2lT0Hdkc6aSeWvF01qMYUlwkoAyCRH1uOzgk-oh7Nh1yPNPN5-5R0.UTqpID8eFnYBPLCgLeY1nVLy5pbJlcSN0TdPeFWVwSI&dib_tag=se&keywords=air+conditioner&qid=1710930918&refinements=p_n_feature_five_browse-bin%3A28237214031%2Cp_n_feature_thirteen_browse-bin%3A2753048031%2Cp_72%3A1318476031%2Cp_n_feature_eleven_browse-bin%3A2753097031&rnid=2753095031&s=kitchen&sprefix=air+conditioner%2Caps%2C273&sr=1-9"
                        />
                      </div>
                      <button className="copyBtn">
                        <i className="fe fe-copy"></i>
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">Brand</label>
                      <input  style={{ pointerEvents: 'auto', backgroundColor: 'white' }} type="text" className="form-control" value="Blue star" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">Iseer</label>
                      <input  style={{ pointerEvents: 'auto', backgroundColor: 'white' }} type="text" className="form-control" value="5.15" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">CFM</label>
                      <input  style={{ pointerEvents: 'auto', backgroundColor: 'white' }} type="text" className="form-control" value="0" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">AEC (kwh)</label>
                      <input  style={{ pointerEvents: 'auto', backgroundColor: 'white' }} type="text" className="form-control" value="481.43" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">Power consumption per hour</label>
                      <input  style={{ pointerEvents: 'auto', backgroundColor: 'white' }} type="text" className="form-control" value="760" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">Price</label>
                      <input  style={{ pointerEvents: 'auto', backgroundColor: 'white' }} type="text" className="form-control" value="38990" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">Customer rating</label>
                      <input  style={{ pointerEvents: 'auto', backgroundColor: 'white' }} type="text" className="form-control" value="4.1" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">Noise level rating</label>
                      <input  style={{ pointerEvents: 'auto', backgroundColor: 'white' }} type="text" className="form-control" value="" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">Energy efficiency rating</label>
                      <input  style={{ pointerEvents: 'auto', backgroundColor: 'white' }} type="text" className="form-control" value="" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">Noise</label>
                      <input  style={{ pointerEvents: 'auto', backgroundColor: 'white' }} type="text" className="form-control" value="42 db" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">
                        Calculation - watts per hour
                      </label>
                      <input  style={{ pointerEvents: 'auto', backgroundColor: 'white' }} type="text" className="form-control" value="300.9" />
                    </div>
                  </div>
                </div> */
}
