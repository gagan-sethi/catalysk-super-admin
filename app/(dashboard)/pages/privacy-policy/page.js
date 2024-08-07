'use client'
// import node module libraries
import { Col, Row, Container, Button } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'
import { CKEditor as CKEditorComponent } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "ckbox/dist/styles/themes/lark.css";

// CKBox is a peer dependency of CKEditor. It must be present in the global scope.
// Importing UMD build of CKBox will make sure that `window.CKBox` will be available.
import "ckbox/dist/ckbox";



const PrivacyPolicy = () => {

  const config = {
    ckbox: {
        tokenUrl: `${process.env.NEXT_PUBLIC_URL}/api/ckbox`,
        theme: "lark",
    },
    toolbar: [
        "ckbox",
        "imageUpload",
        "|",
        "heading",
        "|",
        "undo",
        "redo",
        "|",
        "bold",
        "italic",
        "|",
        "blockQuote",
        "indent",
        "link",
        "|",
        "bulletedList",
        "numberedList",
    ],
};

  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="Privacy Policy"/>

      <div className='card'>
        <div className='card-body'>

            <div className='form-group'>
              <label className='mb-2'>Heading</label>
                <input className='form-control' placeholder='Enter Heading' />          
            </div>
 
            <div className='form-group mt-5'>
              <label className='mb-2'>Page Content</label>

              <style>{`.ck-editor__editable_inline { min-height: 300px; }`}</style>
              <CKEditorComponent editor={ClassicEditor} config={config} />
            </div>

            <div className='d-flex justify-content-center p-3'>
              <Button variant="primary" type="submit">Save</Button>
            </div>

        </div>

      </div>
     

    </Container>
  )
}

export default PrivacyPolicy;