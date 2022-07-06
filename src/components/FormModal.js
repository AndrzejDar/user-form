import { Modal, ModalBody, ModalHeader, Button, ModalFooter } from "reactstrap";
import React from "react";
import "./FormModal.scss";

const FormModal = ({ show, toggle }) => {
  return (
    <Modal isOpen={show} toggle={toggle} centered>
      <ModalHeader toggle={toggle}>
        SUKCES!
      </ModalHeader>
      <ModalBody>Twoje dane zostały zapisane</ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>
          Zamknij
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default FormModal;
