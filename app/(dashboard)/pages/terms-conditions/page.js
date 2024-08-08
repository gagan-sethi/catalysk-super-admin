'use client'
import { Col, Row, Container, Button } from 'react-bootstrap';
import { PageHeading } from 'widgets';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';


const TermsConditions = () => {

  const [CKEditor, setCKEditor] = useState(null);
  const [ClassicEditor, setClassicEditor] = useState(null);

  useEffect(() => {
    const loadEditor = async () => {
      const { CKEditor: LoadedCKEditor } = await import('@ckeditor/ckeditor5-react');
      const { default: LoadedClassicEditor } = await import('@ckeditor/ckeditor5-build-classic');
      setCKEditor(() => LoadedCKEditor); // Use function to set state correctly
      setClassicEditor(() => LoadedClassicEditor);
    };

    loadEditor();
  }, []);

    return (
    <Container fluid className="p-6">
      <PageHeading heading="Terms & Conditions"/>

      <div className='card'>
        <div className='card-body'>
            <div className='form-group'>
              <label className='mb-2'>Heading</label>
                <input className='form-control' placeholder='Enter Heading' />          
            </div>

            <div className='form-group mt-5'>
              <label className='mb-2'>Page Content</label>
              
             {/* ckeditor start */}
             {CKEditor && ClassicEditor && (
              <CKEditor
                className="mnh"
                editor={ClassicEditor}
                data="<p>Type your content here...</p>"
                onChange={(event, editor) => {
                  const data = editor.getData();
                  console.log({ event, data });
                }}
              />
            )}
             {/* ckeditor end*/}
             
            </div>

            <div className='d-flex justify-content-center p-3'>
              <Button variant="primary" type="submit">Save</Button>
            </div>

        </div>
      </div>
    </Container>
  );
}

export default TermsConditions;
