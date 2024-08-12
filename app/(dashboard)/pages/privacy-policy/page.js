'use client'
// import node module libraries
import { Col, Row, Container, Button } from 'react-bootstrap';
import { PageHeading } from 'widgets'
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

import toast, { Toaster } from 'react-hot-toast';


const PrivacyPolicy = () => {
  const [CKEditor, setCKEditor] = useState(null);
  const [ClassicEditor, setClassicEditor] = useState(null);
    const [heading, setHeading] = useState("");
  const [headingError, setheadingError] = useState("");
  const [content, setContent] = useState("");
  const [contentError, setContentError] = useState("");

  useEffect(() => {

    const loadEditor = async () => {
      const { CKEditor: LoadedCKEditor } = await import('@ckeditor/ckeditor5-react');
      const { default: LoadedClassicEditor } = await import('@ckeditor/ckeditor5-build-classic');
      setCKEditor(() => LoadedCKEditor); // Use function to set state correctly
      setClassicEditor(() => LoadedClassicEditor);
    };

    loadEditor();

        

  }, []);

  useEffect(()=>{
  console.log('testttttttttt')
        getcms()
  }, [])





     const  getcms = async  () => {
           try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/cms/getCMS?type=privacy_policy`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        
      });

      console.log(response)
      const data = await response.json();
        console.log(data)
      setHeading(data.data.heading)
      setContent(data.data.content)
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }

      
      
      return data;
    } catch (error) {
      console.error('Error in API call:', error);
    //  setEmailError('Error checking email. Please try again.');
    }
     }

    const handleInputChange = (e) => {
    setHeading(e.target.value);
   
    if(!heading){
        setheadingError("Please enter someting...");

    }else{
            setheadingError("");

    }
  };

    const handleInputChangeforeditor = (e) => {
    console.log(e)
    setContent(e);
    if(!content){
        setContentError("Please enter someting...");

    }else{
            setContentError("");

    }
  };
      var myEditor;


  const type ="privacy_policy"
                          const token = typeof window !== 'undefined' ? localStorage.getItem('token') : '';



   const save = async () => {
   console.log(content)
   if(!heading){
   setheadingError('Please enter someting...')
   return
   }else if(!content){  setContentError('Please enter someting...')
   return

   }else{
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/cms/addCMS`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ heading,content, type}),
      });

                    toast.success('Updated sussccessfully');


      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }

      const data = await response?.json();
      return data;
    } catch (error) {
      console.error('Error in API call:', error);
     // setEmailError('Error checking email. Please try again.');
    }
    }
  };

  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="Privacy Policy"/>

      <div className='card'>
        <div className='card-body'>

            <div className='form-group'>
              <label className='mb-2'>Heading</label>
                <input className='form-control' placeholder='Enter Heading'
                 value={heading}
                onChange={handleInputChange}/>    
                
                  {headingError && <p className="text-red-500 text-sm mt-2">{headingError}</p>}
            </div>
 
            <div className='form-group mt-5'>
              <label className='mb-2'>Page Content</label>

             {/* ckeditor start */}
             {CKEditor && ClassicEditor && (
              <CKEditor
                editor={ClassicEditor}
                placeholder="Type your content here..."
              data={content}
             onChange={(event, editor) => {
          handleInputChangeforeditor(editor.getData());
        }}
              //  onChange={handleInputChangeforeditor}
              
              />
            )}
             {/* ckeditor end*/}
                               {contentError && <p className="text-red-500 text-sm mt-2">{contentError}</p>}

            </div>

            <div className='d-flex justify-content-center p-3'>
              <Button variant="primary" type="submit"  onClick={save}>Save</Button>
            </div>

        </div>

      </div>
     
                 <Toaster position="top-right" />

    </Container>

  )
}

export default PrivacyPolicy;