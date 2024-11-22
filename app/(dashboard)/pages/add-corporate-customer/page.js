"use client";
// import node module libraries
import { useState } from "react";
import { Container } from "react-bootstrap";

// import widget as custom components
import { PageHeading } from "widgets";

// import sub components
import Link from "next/link";

const AddCorporateCustomer = () => {
  const [formData, setFormData] = useState({
    corporate_name: "",
    email: "",
    alternate_email: "",
    number_of_employees: "",
    industry_type: "",
    status: "",
    current_or_former: "",
    how_did_we_get_to_them: "",
    address: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Clear the error for the current field
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  // Validate form fields
  const validate = () => {
    const newErrors = {};
    if (!formData.corporate_name) newErrors.corporate_name = "Corporate Name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.alternate_email) {
      newErrors.alternate_email = "Alternate Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.alternate_email)) {
      newErrors.alternate_email = "Invalid email format.";
    }
    if (!formData.number_of_employees) newErrors.number_of_employees = "Number of Employees is required.";
    if (!formData.industry_type) newErrors.industry_type = "Industry Type is required.";
    if (!formData.status) newErrors.status = "Status is required.";
    if (!formData.current_or_former) newErrors.current_or_former = "Current/Former Customer is required.";
    if (!formData.how_did_we_get_to_them) newErrors.how_did_we_get_to_them = "This field is required.";
    if (!formData.address) newErrors.address = "Address is required.";

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:7001/corp_customer/addCorporateCustomer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to add corporate customer.");
      }

      const result = await response.json();
      setSuccess(true);
      setFormData({
        corporate_name: "",
        email: "",
        alternate_email: "",
        number_of_employees: "",
        industry_type: "",
        status: "",
        current_or_former: "",
        how_did_we_get_to_them: "",
        address: "",
      });
      console.log("Corporate customer added:", result);
    } catch (err) {
      setErrors({ submit: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Container fluid className="p-6">
        <PageHeading heading="Add Corporate Customer" />
        <div className="main-content-wrapper">
          <div className="card">
            <div className="card-body">
              <form className="myform" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Corporate Name</label>
                      <input
                        className="form-control"
                        name="corporate_name"
                        placeholder="Enter Corporate Name"
                        value={formData.corporate_name}
                        onChange={handleChange}
                      />
                      {errors.corporate_name && <small className="text-danger">{errors.corporate_name}</small>}
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        className="form-control"
                        name="email"
                        placeholder="Enter Email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && <small className="text-danger">{errors.email}</small>}
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Alternate Email</label>
                      <input
                        className="form-control"
                        name="alternate_email"
                        placeholder="Enter Alternate Email"
                        value={formData.alternate_email}
                        onChange={handleChange}
                      />
                      {errors.alternate_email && <small className="text-danger">{errors.alternate_email}</small>}
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Number of Employees</label>
                      <input
                        className="form-control"
                        name="number_of_employees"
                        placeholder="Enter Number of Employees"
                        value={formData.number_of_employees}
                        onChange={handleChange}
                      />
                      {errors.number_of_employees && <small className="text-danger">{errors.number_of_employees}</small>}
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Industry Type</label>
                      <select
                        className="form-control"
                        name="industry_type"
                        value={formData.industry_type}
                        onChange={handleChange}
                      >
                        <option value="">Select Industry Type</option>
                        <option value="Technology">Technology</option>
                        <option value="Automobile">Automobile</option>
                        <option value="Agriculture">Agriculture</option>
                        <option value="Accounts">Accounts</option>
                        <option value="Medical">Medical</option>
                      </select>
                      {errors.industry_type && <small className="text-danger">{errors.industry_type}</small>}
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Status</label>
                      <select
                        className="form-control"
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                      >
                        <option value="">Select Status</option>
                        <option value="Active">Active</option>
                        <option value="Block">Block</option>
                      </select>
                      {errors.status && <small className="text-danger">{errors.status}</small>}
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Current / Former Customer</label>
                      <input
                        className="form-control"
                        name="current_or_former"
                        placeholder="Enter Current / Former Customer"
                        value={formData.current_or_former}
                        onChange={handleChange}
                      />
                      {errors.current_or_former && <small className="text-danger">{errors.current_or_former}</small>}
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>How did we get to them</label>
                      <select
                        className="form-control"
                        name="how_did_we_get_to_them"
                        value={formData.how_did_we_get_to_them}
                        onChange={handleChange}
                      >
                        <option value="">Select from below</option>
                        <option value="Social Ad">Social Ad</option>
                        <option value="Referral">Referral</option>
                        <option value="Social Media">Social Media</option>
                      </select>
                      {errors.how_did_we_get_to_them && <small className="text-danger">{errors.how_did_we_get_to_them}</small>}
                    </div>
                  </div>

                  <div className="col-sm-12">
                    <div className="form-group">
                      <label>Address</label>
                      <textarea
                        className="form-control"
                        name="address"
                        placeholder="Enter Address"
                        value={formData.address}
                        onChange={handleChange}
                      />
                      {errors.address && <small className="text-danger">{errors.address}</small>}
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center p-3 gap-2">
                  <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? "Saving..." : "Add"}
                  </button>

                  <Link href="/dashboard/customer" className="btn btn-secondary">
                    Cancel
                  </Link>
                </div>
                {errors.submit && <small className="text-danger">{errors.submit}</small>}
                {success && <p className="text-success">Corporate Customer added successfully!</p>}
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default AddCorporateCustomer;
