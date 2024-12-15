"use client";
// import node module libraries
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

// import widget as custom components
import { PageHeading } from "widgets";

// import sub components
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const AddInvoice = () => {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    company_id: "",
    invoice_number: "",
    amount: "",
    invoice_date: "",
    due_date: "",
    invoice: null,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [token, setToken] = useState("");

  useEffect(() => {
    // Only runs on the client-side
    const tokenFromLocalStorage = localStorage.getItem("token");
    setToken(tokenFromLocalStorage || "");
  }, []);
  useEffect(() => {
    // Fetch company_id from the search parameters
    const company_id = searchParams.get("customerId");
    if (company_id) {
      setFormData((prevData) => ({ ...prevData, company_id }));
    }
  }, [searchParams]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
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
    if (!formData.company_id) newErrors.company_id = "Company ID is required.";
    if (!formData.invoice_number) newErrors.invoice_number = "Invoice Number is required.";
    if (!formData.amount) newErrors.amount = "Amount is required.";
    if (!formData.invoice_date) newErrors.invoice_date = "Invoice Date is required.";
    if (!formData.due_date) newErrors.due_date = "Due Date is required.";
    if (!formData.invoice) newErrors.invoice = "Invoice file is required.";
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
      const formDataToSend = new FormData();
      formDataToSend.append("company_id", formData.company_id);
      formDataToSend.append("invoice_number", formData.invoice_number);
      formDataToSend.append("amount", formData.amount);
      formDataToSend.append("invoice_date", formData.invoice_date);
      formDataToSend.append("due_date", formData.due_date);
      formDataToSend.append("invoice", formData.invoice);

      const response = await fetch(
        "https://betazone.promaticstechnologies.com/admin/invoice/addInvoice",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formDataToSend,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add invoice.");
      }

      const result = await response.json();
      setSuccess(true);
      setFormData({
        company_id: formData.company_id,
        invoice_number: "",
        amount: "",
        invoice_date: "",
        due_date: "",
        invoice: null,
      });
      console.log("Invoice added:", result);
    } catch (err) {
      setErrors({ submit: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Container fluid className="p-6">
        <PageHeading heading="Add Invoice" />
        <div className="main-content-wrapper">
          <div className="card">
            <div className="card-body">
              <form className="myform" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Company ID</label>
                      <input
                        className="form-control"
                        name="company_id"
                        placeholder="Enter Company ID"
                        value={formData.company_id}
                        readOnly
                      />
                      {errors.company_id && <small className="text-danger">{errors.company_id}</small>}
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Invoice Number</label>
                      <input
                        className="form-control"
                        name="invoice_number"
                        placeholder="Enter Invoice Number"
                        value={formData.invoice_number}
                        onChange={handleChange}
                      />
                      {errors.invoice_number && <small className="text-danger">{errors.invoice_number}</small>}
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Amount</label>
                      <input
                        className="form-control"
                        name="amount"
                        placeholder="Enter Amount"
                        value={formData.amount}
                        onChange={handleChange}
                      />
                      {errors.amount && <small className="text-danger">{errors.amount}</small>}
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Invoice Date</label>
                      <input
                        type="date"
                        className="form-control"
                        name="invoice_date"
                        value={formData.invoice_date}
                        onChange={handleChange}
                      />
                      {errors.invoice_date && <small className="text-danger">{errors.invoice_date}</small>}
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Due Date</label>
                      <input
                        type="date"
                        className="form-control"
                        name="due_date"
                        value={formData.due_date}
                        onChange={handleChange}
                      />
                      {errors.due_date && <small className="text-danger">{errors.due_date}</small>}
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Invoice File</label>
                      <input
                        type="file"
                        className="form-control"
                        name="invoice"
                        onChange={handleChange}
                      />
                      {errors.invoice && <small className="text-danger">{errors.invoice}</small>}
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center p-3 gap-2">
                  <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? "Saving..." : "Add"}
                  </button>

                  <Link href="/dashboard/invoices" className="btn btn-secondary">
                    Cancel
                  </Link>
                </div>
                {errors.submit && <small className="text-danger">{errors.submit}</small>}
                {success && <p className="text-success">Invoice added successfully!</p>}
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default AddInvoice;
