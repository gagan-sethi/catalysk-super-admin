import React, { useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function CustomModal({ children, visible, toggle, header,btn1,btn2,footer }) {
  // Sync modal state with visible prop
  useEffect(() => {
    setModal(visible);
  }, [visible]);

  const [modal, setModal] = React.useState(visible);

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
         {header && <ModalHeader toggle={toggle}>{header}</ModalHeader>}
          {footer=="define"?<>
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          {btn1 &&(
          <Button color="primary" onClick={toggle}>
          {btn1}
          </Button>
)}
          {btn2 &&(
          <Button color="secondary" onClick={toggle}>
            {btn2}
          </Button>
          )}
        </ModalFooter>
        </>:<>
        {children}
        </>}
      </Modal>
    </div>
  );
}

export default CustomModal;

