import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Image from 'next/image'; // Assuming you are using Next.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Imagemodals({ image, toggle, modal }) {
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} size="lg" >
        {/* <p toggle={toggle} className="opacity-0.5">Image</p> */}
        <ModalBody>
            <div className="position-relative">
          <Image
            src={`${process.env.NEXT_PUBLIC_STORAGE_PATH}${image}`}
            alt="Seller"
            layout="responsive"
            width={100}
            height={75}
             className="object-fit-contain "
          />
          </div>
              <p toggle={toggle} onClick={toggle} 
           className=" position-absolute top-0 end-0 "><i style={{fontSize:"17px",color:"black"}} className="bi bi-x-circle"></i></p>
        </ModalBody>
        {/* <ModalFooter className="opacity-0">
          
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter> */}
      </Modal>
    </div>
  );
}

export default Imagemodals;
